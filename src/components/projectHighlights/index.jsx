import React from "react"
import "./styles.scss"

const ProjectHighlights = ({ project }) => {
  const headingId = `${project.name}-highlights`

  return (
    <section className="project-highlights" aria-labelledby={headingId}>
      <header>
        <p>Project highlights</p>
        <h2 id={headingId}>What it includes</h2>
      </header>
      <div className="project-highlights-grid">
        {project.highlights.map((highlight, index) => (
          <article key={highlight}>
            <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <p>{highlight}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProjectHighlights
