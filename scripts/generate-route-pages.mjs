import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { allProjects } from "../src/components/projectsInfo.js"
import {
  HOME_SEO,
  PROJECTS_SEO,
  SITE_NAME,
  absoluteUrl,
  homeStructuredData,
  projectSeo,
  projectStructuredData,
  projectsStructuredData,
} from "../src/components/seo/siteMetadata.js"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const dist = path.join(root, "dist")
const templatePath = path.join(dist, "index.html")
const template = await fs.readFile(templatePath, "utf8")

const escapeHtml = value =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")

const renderTags = ({ seo, structuredData }) => {
  const canonicalUrl = absoluteUrl(seo.path)
  const imageUrl = absoluteUrl(seo.imagePath)
  const title = escapeHtml(seo.title)
  const description = escapeHtml(seo.description)
  const imageAlt = escapeHtml(seo.imageAlt)
  const json = JSON.stringify(structuredData).replaceAll("<", "\\u003c")

  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="image" content="${imageUrl}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:site_name" content="${escapeHtml(SITE_NAME)}" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="${seo.type ?? "website"}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:secure_url" content="${imageUrl}" />
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:image:alt" content="${imageAlt}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <meta name="twitter:image:alt" content="${imageAlt}" />
    <script type="application/ld+json">${json}</script>`
}

const routes = [
  {
    seo: HOME_SEO,
    structuredData: homeStructuredData,
  },
  {
    seo: PROJECTS_SEO,
    structuredData: projectsStructuredData(allProjects),
  },
  ...allProjects.map(project => ({
    seo: projectSeo(project),
    structuredData: projectStructuredData(project),
  })),
]

for (const route of routes) {
  const html = template
    .replace(/<title>.*?<\/title>/s, "")
    .replace("</head>", `${renderTags(route)}\n  </head>`)
  const routePath =
    route.seo.path === "/"
      ? templatePath
      : path.join(dist, route.seo.path, "index.html")

  await fs.mkdir(path.dirname(routePath), { recursive: true })
  await fs.writeFile(routePath, html)
}

await Promise.all(
  allProjects.map(project =>
    fs.rm(path.join(dist, "projects", project.imgUrl), { force: true }),
  ),
)

console.log(`Generated metadata HTML for ${routes.length} routes.`)
