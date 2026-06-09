const SITE_NAME = "Rodrigo Ramirez · Software Engineer Portfolio"
const SITE_URL = "https://rodrigoramirez.dev"

const HOME_SEO = {
  title: "Rodrigo Ramirez · Software Engineer at Microsoft, Xbox",
  description:
    "Experience and selected work from Rodrigo Ramirez across Xbox product engineering, cloud infrastructure, diagnostics, and reliable systems.",
  path: "/",
  imagePath: "/rodrigo/social.jpg",
  imageAlt: "Rodrigo Ramirez, software engineer at Microsoft working on Xbox",
}

const PROJECTS_SEO = {
  title: "Software Engineering Projects · Rodrigo Ramirez",
  description:
    "Selected software projects by Rodrigo Ramirez spanning real-time systems, developer tools, accessible products, browser extensions, and interactive WebGL.",
  path: "/projects/",
  imagePath: "/projects/optimized/portfolio-og.jpg",
  imageAlt: "Selected software engineering projects by Rodrigo Ramirez",
}

const absoluteUrl = path => new URL(path, `${SITE_URL}/`).toString()

const projectImagePath = project =>
  `/projects/optimized/${project.imgUrl.replace(/\.[^.]+$/, "")}-og.jpg`

const projectSeo = project => ({
  title: `${project.title} · ${project.keywords} · Rodrigo Ramirez`,
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
      name: "Rodrigo Ramirez",
      url: SITE_URL,
      image: absoluteUrl("/rodrigo/portrait.jpg"),
      jobTitle: "Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Microsoft",
      },
      knowsAbout: [
        "Xbox product engineering",
        "Cloud infrastructure",
        "Diagnostics",
        "Reliable systems",
        "Full-stack development",
      ],
      sameAs: [
        "https://github.com/TheRoro",
        "https://www.linkedin.com/in/rodrigoramirezb/",
      ],
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
