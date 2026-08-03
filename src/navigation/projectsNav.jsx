import React from "react"
import { Link } from "react-router-dom"
import { analyticsSource, trackNavigationClick } from "../analytics/events"
import NavLogo from "../components/navLogo"
import "./styles.scss"

const ProjectsNav = () => {
  return (
    <nav className="nav" aria-label="Primary">
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

export default ProjectsNav
