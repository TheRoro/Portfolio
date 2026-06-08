import React from "react"
import ProjectImage from "../projectImage"
import "./styles.scss"

const ProjectRow = ({ project }) => {
  const { title, description, keywords } = project

  return (
    <div className="project-row">
      <div className="image-container">
        <ProjectImage project={project} alt={`${title} · ${keywords}`} />
      </div>
      <div className="details-container">
        <h2 className="keywords">{keywords}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default ProjectRow
