import React from "react"
import PageTransition from "../../animations/pageTransition"
import ProjectHelmet from "../helmets/projectHelmet"
import ProjectNav from "../../navigation/projectNav"
import CaseStudy from "../caseStudy"
import ProjectHero from "../projectHero"
import ProjectHighlights from "../projectHighlights"
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
        </section>
      </PageTransition>
    </>
  )
}

export default ProjectPage
