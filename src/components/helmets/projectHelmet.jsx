import React from "react"
import Seo, { projectSeo, projectStructuredData } from "../seo"

const ProjectHelmet = ({ project }) => {
  return (
    <Seo
      {...projectSeo(project)}
      structuredData={projectStructuredData(project)}
    />
  )
}

export default ProjectHelmet
