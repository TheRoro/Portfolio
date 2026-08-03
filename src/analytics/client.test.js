import { describe, expect, it } from "vitest"
import { sanitizeCaptureResult, sanitizeUrl } from "./client"

describe("analytics privacy", () => {
  it("removes query strings and fragments from captured URLs", () => {
    expect(
      sanitizeUrl(
        "https://rodrigoramirez.dev/drawly/?utm_source=test#decisions",
      ),
    ).toBe("https://rodrigoramirez.dev/drawly/")
  })

  it("sanitizes URL properties without changing event properties", () => {
    expect(
      sanitizeCaptureResult({
        event: "project_product_opened",
        properties: {
          $current_url:
            "https://rodrigoramirez.dev/drawly/?private=value#actions",
          $referrer: "https://example.com/search?q=portfolio",
          project: "drawly",
          source: "project-hero",
        },
      }),
    ).toEqual({
      event: "project_product_opened",
      properties: {
        $current_url: "https://rodrigoramirez.dev/drawly/",
        $referrer: "https://example.com/search",
        project: "drawly",
        source: "project-hero",
      },
    })
  })

  it("removes campaign and advertising identifiers", () => {
    expect(
      sanitizeCaptureResult({
        event: "$pageview",
        properties: {
          $pathname: "/",
          fbclid: "private-ad-click-id",
          gclid: "private-google-click-id",
          utm_content: "private-campaign-value",
          utm_source: "linkedin",
        },
      }),
    ).toEqual({
      event: "$pageview",
      properties: {
        $pathname: "/",
      },
    })
  })

  it("drops malformed URL properties", () => {
    expect(
      sanitizeCaptureResult({
        event: "$pageview",
        properties: {
          $current_url: "http://[invalid",
          $pathname: "/",
        },
      }),
    ).toEqual({
      event: "$pageview",
      properties: {
        $pathname: "/",
      },
    })
  })
})
