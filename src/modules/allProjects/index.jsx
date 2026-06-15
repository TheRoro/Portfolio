import React from "react"
import ProjectTile from "../../components/projectTile"
import { allProjects } from "../../content/projects"
import "./styles.scss"

const ProjectsModule = () => {
  return (
    <section className="projects">
      <h1 className="section-title mb-5">All Projects</h1>
      {allProjects.map((project, index) => (
        <ProjectTile
          key={project.name}
          project={project}
          orientation={index % 2 === 0 ? "right" : "left"}
        />
      ))}
    </section>
  )
}

export default ProjectsModule
