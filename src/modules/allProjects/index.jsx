import React from "react"
import ProjectTile from "../../components/projectTile"
import { allProjects } from "../../content/projects"
import "./styles.scss"

const ProjectsModule = () => {
  return (
    <section className="projects">
      <header className="projects-heading">
        <p className="projects-eyebrow">Selected and experimental work</p>
        <h1 className="section-title">All Projects</h1>
        <p className="projects-intro">
          Products, tools, extensions, and experiments built across different
          stages of my engineering journey.
        </p>
      </header>
      <div className="projects-grid">
        {allProjects.map(project => (
          <ProjectTile key={project.name} project={project} variant="card" />
        ))}
      </div>
    </section>
  )
}

export default ProjectsModule
