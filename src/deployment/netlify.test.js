import { readFileSync } from "node:fs"
import { resolve } from "node:path"
import { describe, expect, it } from "vitest"
import { parse } from "smol-toml"

const configPath = resolve(process.cwd(), "netlify.toml")
const config = parse(readFileSync(configPath, "utf8"))

const headersFor = path =>
  config.headers.find(header => header.for === path)?.values

describe("Netlify deployment configuration", () => {
  it("defines each header scope once", () => {
    const scopes = config.headers.map(header => header.for)

    expect(new Set(scopes).size).toBe(scopes.length)
  })

  it("builds and publishes the Vite production output with Node 20", () => {
    expect(config.build).toMatchObject({
      command: "npm run build",
      publish: "dist",
      environment: {
        NODE_VERSION: "20",
      },
    })
  })

  it("redirects the Netlify hostname before applying the SPA fallback", () => {
    expect(config.redirects).toEqual([
      {
        from: "https://rodrigoramirez.netlify.app/*",
        to: "https://rodrigoramirez.dev/:splat",
        status: 301,
        force: true,
      },
      {
        from: "/*",
        to: "/index.html",
        status: 200,
      },
    ])
  })

  it("enforces restrictive browser security headers", () => {
    const headers = headersFor("/*")
    const policy = headers["Content-Security-Policy"]

    expect(headers).toMatchObject({
      "Cross-Origin-Opener-Policy": "same-origin",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "DENY",
    })
    expect(policy).toContain("default-src 'self'")
    expect(policy).toContain("script-src 'self'")
    expect(policy).toContain("connect-src 'self' https://us.i.posthog.com")
    expect(policy).toContain("style-src-attr 'unsafe-inline'")
    expect(policy).toContain("frame-ancestors 'none'")
    expect(policy).toContain("object-src 'none'")
    expect(policy).not.toMatch(/script-src[^;]*'unsafe-inline'/)
    expect(policy).not.toMatch(/script-src[^;]*'unsafe-eval'/)
    expect(policy).not.toMatch(/connect-src[^;]*\*/)
  })

  it("caches only fingerprinted build assets as immutable", () => {
    const immutableRules = config.headers
      .filter(header => header.values["Cache-Control"]?.includes("immutable"))
      .map(header => header.for)

    expect(immutableRules).toEqual(["/assets/*"])
    expect(headersFor("/assets/*")["Cache-Control"]).toBe(
      "public, max-age=31536000, immutable",
    )
    expect(headersFor("/*")["Cache-Control"]).toBe(
      "public, max-age=0, must-revalidate",
    )

    expect(headersFor("/favicon.ico")["Cache-Control"]).toContain(
      "stale-while-revalidate",
    )
    expect(headersFor("/planet-*")["Cache-Control"]).toContain(
      "stale-while-revalidate",
    )
    expect(headersFor("/apple-touch-icon.png")["Cache-Control"]).toContain(
      "stale-while-revalidate",
    )
    expect(headersFor("/site.webmanifest")["Cache-Control"]).toContain(
      "stale-while-revalidate",
    )
  })
})
