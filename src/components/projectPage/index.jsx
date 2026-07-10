import React from "react"
import PageTransition from "../../animations/pageTransition"
import ProjectHelmet from "../helmets/projectHelmet"
import ProjectNav from "../../navigation/projectNav"
import { allProjects } from "../../content/projects"
import CaseStudy from "../caseStudy"
import ProjectHero from "../projectHero"
import ProjectHighlights from "../projectHighlights"
import ProjectPagination from "../projectPagination"
import "../../pages/projects.scss"

const ProjectPage = ({ project }) => {
  return (
    <>
      <ProjectNav />
      <PageTransition>
        <ProjectHelmet project={project} />
        <section className="project-container">
          <ProjectHero project={project} />
          <CaseStudy project={project} />
          {!project.caseStudy && <ProjectHighlights project={project} />}
          <ProjectPagination currentProject={project} projects={allProjects} />
        </section>
      </PageTransition>
    </>
  )
}

export default ProjectPage
