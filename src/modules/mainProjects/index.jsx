import React from "react"
import { Link } from "react-router-dom"
import ProjectTile from "../../components/projectTile"
import SectionHeading from "../../components/sectionHeading"
import { selectedProjects } from "../../content/projects"
import "./styles.scss"

const MainProjectsModule = () => {
  return (
    <section className="main-projects" id="main-projects">
      <SectionHeading
        eyebrow="Featured work"
        title="Selected Projects"
        intro="Products and tools where I focused on thoughtful interactions, dependable engineering, and clear user value."
      />
      <div className="projects-list">
        {selectedProjects.map((project, index) => (
          <ProjectTile
            key={project.name}
            project={project}
            index={index}
            orientation={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
      <Link className="more-projects-action" to="/projects/">
        More Projects
      </Link>
    </section>
  )
}

export default MainProjectsModule
