import React from "react"
import PageTransition from "../animations/pageTransition"
import AllProjectsHelmet from "../components/helmets/allProjectsHelmet"
import ProjectsNav from "../navigation/projectsNav"
import ProjectsModule from "../modules/allProjects"

const ProjectsPage = () => {
  return (
    <>
      <ProjectsNav />
      <PageTransition>
        <AllProjectsHelmet />
        <ProjectsModule />
      </PageTransition>
    </>
  )
}

export default ProjectsPage
