import { profile, socialLinks } from "../../content/profile.js"

const SITE_NAME = `${profile.name} · ${profile.role} Portfolio`
const SITE_URL = profile.siteUrl

const HOME_SEO = {
  title: `${profile.name} · ${profile.role} at ${profile.employer}, ${profile.product}`,
  description: `Experience and selected work from ${profile.name} across ${profile.product} product engineering, cloud infrastructure, diagnostics, and reliable systems.`,
  path: "/",
  imagePath: profile.portrait.socialImage,
  imageAlt: `${profile.name}, software engineer at ${profile.employer} working on ${profile.product}`,
}

const PROJECTS_SEO = {
  title: `Software Engineering Projects · ${profile.name}`,
  description: `Selected software projects by ${profile.name} spanning real-time systems, developer tools, accessible products, browser extensions, and interactive WebGL.`,
  path: "/projects/",
  imagePath: "/projects/optimized/portfolio-og.jpg",
  imageAlt: `Selected software engineering projects by ${profile.name}`,
}

const absoluteUrl = path => new URL(path, `${SITE_URL}/`).toString()

const projectImagePath = project =>
  `/projects/optimized/${project.imgUrl.replace(/\.[^.]+$/, "")}-og.jpg`

const projectSeo = project => ({
  title: `${project.title} · ${project.keywords} · ${profile.name}`,
  description: `${project.summary} ${project.keywords}.`,
  path: `/${project.name}/`,
  imagePath: projectImagePath(project),
  imageAlt: `${project.title} project interface`,
  type: "article",
})

const personReference = {
  "@id": `${SITE_URL}/#person`,
}

const homeStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      ...personReference,
      name: profile.name,
      url: SITE_URL,
      image: absoluteUrl(profile.portrait.src),
      jobTitle: profile.role,
      worksFor: {
        "@type": "Organization",
        name: profile.employer,
      },
      knowsAbout: profile.knowsAbout,
      sameAs: socialLinks
        .filter(link => ["github", "linkedin"].includes(link.id))
        .map(link => link.href),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      author: personReference,
      image: absoluteUrl(HOME_SEO.imagePath),
    },
  ],
}

const projectsStructuredData = projects => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${SITE_URL}/projects/#collection`,
  name: PROJECTS_SEO.title,
  description: PROJECTS_SEO.description,
  url: `${SITE_URL}/projects/`,
  author: personReference,
  mainEntity: {
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: absoluteUrl(`/${project.name}/`),
    })),
  },
})

const projectStructuredData = project => {
  const seo = projectSeo(project)

  return {
    "@context": "https://schema.org",
    "@type": ["CreativeWork", "SoftwareSourceCode"],
    "@id": `${absoluteUrl(seo.path)}#project`,
    name: project.title,
    headline: project.summary,
    description: project.description,
    url: absoluteUrl(seo.path),
    image: absoluteUrl(seo.imagePath),
    author: personReference,
    codeRepository: project.repoUrl,
    sameAs: [project.repoUrl, project.webUrl],
    keywords: project.tags,
    isAccessibleForFree: true,
    isPartOf: {
      "@id": `${SITE_URL}/projects/#collection`,
    },
  }
}

export {
  HOME_SEO,
  PROJECTS_SEO,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  homeStructuredData,
  projectSeo,
  projectStructuredData,
  projectsStructuredData,
}
