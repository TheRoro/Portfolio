import React from "react"
import { useNavigate } from "react-router-dom"
import ProjectTile from "../../components/projectTile"
import { selectedProjects } from "../../components/projectsInfo"
import "./styles.scss"

const MainProjectsModule = () => {
  const navigate = useNavigate()

  return (
    <section className="main-projects" id="main-projects">
      <h1 className="section-title glowing-text mb-5">Selected Projects</h1>
      <div className="projects-list">
        {selectedProjects.map((project, index) => (
          <ProjectTile
            key={project.name}
            project={project}
            orientation={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
      <button
        className="button"
        onClick={() => {
          navigate("/projects/")
        }}
      >
        More Projects
      </button>
    </section>
  )
}

export default MainProjectsModule
