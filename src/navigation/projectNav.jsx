import React from "react"
import { Link } from "react-router-dom"
import { analyticsSource, trackNavigationClick } from "../analytics/events"
import NavLogo from "../components/navLogo"
import "./styles.scss"

const ProjectNav = () => {
  return (
    <nav className="nav nav-project" aria-label="Primary">
      <Link
        to="/"
        className="img-link"
        aria-label="Home"
        onClick={() =>
          trackNavigationClick("/", analyticsSource.primaryNavigation)
        }
      >
        <NavLogo />
      </Link>
      <div className="links">
        <Link
          className="navigation-link"
          to="/projects"
          aria-label="All Projects"
          onClick={() =>
            trackNavigationClick(
              "/projects/",
              analyticsSource.primaryNavigation,
            )
          }
        >
          Projects
        </Link>
        <Link
          className="navigation-link"
          to="/"
          onClick={() =>
            trackNavigationClick("/", analyticsSource.primaryNavigation)
          }
        >
          Home
        </Link>
      </div>
    </nav>
  )
}

export default ProjectNav
