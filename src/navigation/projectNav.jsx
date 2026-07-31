import React from "react"
import { Link } from "react-router-dom"
import NavLogo from "../components/navLogo"
import "./styles.scss"

const ProjectNav = () => {
  return (
    <nav className="nav nav-project" aria-label="Primary">
      <Link to="/" className="img-link" aria-label="Home">
        <NavLogo />
      </Link>
      <div className="links">
        <Link
          className="navigation-link"
          to="/projects"
          aria-label="All Projects"
        >
          Projects
        </Link>
        <Link className="navigation-link" to="/">
          Home
        </Link>
      </div>
    </nav>
  )
}

export default ProjectNav
