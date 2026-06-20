import React from "react"
import PageTransition from "../../animations/pageTransition"
import ProjectHelmet from "../helmets/projectHelmet"
import ProjectNav from "../../navigation/projectNav"
import CaseStudy from "../caseStudy"
import ProjectRow from "../projectRow"
import LinksComponent from "../links"
import PaletteComponent from "../palette"
import "../../pages/projects.scss"

const ProjectPage = ({ project }) => {
  return (
    <>
      <ProjectNav />
      <PageTransition>
        <ProjectHelmet project={project} />
        <section className="project-container">
          <h1 className="project-title">{project.title}</h1>
          <h2 className="project-subtitle">{project.summary}</h2>
          <ProjectRow project={project} />
          <CaseStudy project={project} />
          <LinksComponent
            repoUrl={project.repoUrl}
            webUrl={project.webUrl}
            webLabel={project.webLabel}
          />
          <PaletteComponent palette={project.palette} />
        </section>
      </PageTransition>
    </>
  )
}

export default ProjectPage
