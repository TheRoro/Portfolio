import React from "react"
import { Link } from "react-router-dom"
import {
  analyticsSource,
  trackProjectDetailsOpened,
} from "../../analytics/events"
import "./styles.scss"

const getAdjacentProjects = (projects, currentName) => {
  if (projects.length < 2) return null

  const currentIndex = projects.findIndex(
    project => project.name === currentName,
  )
  if (currentIndex === -1) return null

  return {
    previous: projects[(currentIndex - 1 + projects.length) % projects.length],
    next: projects[(currentIndex + 1) % projects.length],
  }
}

const ProjectPaginationCard = ({ direction, project }) => (
  <Link
    className={`project-pagination-card project-pagination-card-${direction}`}
    to={`/${project.name}/`}
    aria-label={`${direction === "previous" ? "Previous" : "Next"} project ${project.title}`}
    onClick={() =>
      trackProjectDetailsOpened(
        project.name,
        analyticsSource.projectPagination,
        direction,
      )
    }
  >
    <span className="project-pagination-arrow" aria-hidden="true">
      {direction === "previous" ? "←" : "→"}
    </span>
    <span className="project-pagination-content">
      <span className="project-pagination-direction">
        {direction === "previous" ? "Previous project" : "Next project"}
      </span>
      <span className="project-pagination-title">{project.title}</span>
    </span>
  </Link>
)

const ProjectPagination = ({ currentProject, projects }) => {
  const adjacentProjects = getAdjacentProjects(projects, currentProject.name)

  if (!adjacentProjects) return null

  return (
    <nav className="project-pagination" aria-label="Browse projects">
      <ProjectPaginationCard
        direction="previous"
        project={adjacentProjects.previous}
      />
      <ProjectPaginationCard direction="next" project={adjacentProjects.next} />
    </nav>
  )
}

export { getAdjacentProjects }
export default ProjectPagination
