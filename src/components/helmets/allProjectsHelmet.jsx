import React from "react"
import { allProjects } from "../projectsInfo"
import Seo, { PROJECTS_SEO, projectsStructuredData } from "../seo"

const AllProjectsHelmet = () => {
  return (
    <Seo
      {...PROJECTS_SEO}
      structuredData={projectsStructuredData(allProjects)}
    />
  )
}

export default AllProjectsHelmet
