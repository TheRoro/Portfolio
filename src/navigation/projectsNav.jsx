import React from "react"
import { Link } from "react-router-dom"
import NavLogo from "../components/navLogo"
import "./styles.scss"

const ProjectsNav = () => {
  return (
    <nav className="nav">
      <Link to="/" className="img-link" aria-label="Home">
        <NavLogo />
      </Link>
      <div className="links">
        <Link className="navigation-link" to="/">
          Home
        </Link>
      </div>
    </nav>
  )
}

export default ProjectsNav
