import React from "react"
import "./styles.scss"

const ProjectRow = ({ project: { title, description, keywords, imgUrl } }) => {
  return (
    <div className="project-row">
      <div className="image-container">
        <img
          className="image"
          src={`/projects/${imgUrl}`}
          alt={`${title} · ${keywords}`}
        />
      </div>
      <div className="details-container">
        <h2 className="keywords">{keywords}</h2>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}

export default ProjectRow
