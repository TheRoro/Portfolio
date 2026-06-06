import React from "react"
import { Link } from "react-router-dom"
import LazySphere from "../components/lazySphere"
import "./styles.scss"

const ProjectNav = () => {
  return (
    <nav className="nav">
      <Link to="/" className="img-link" aria-label="Home">
        <LazySphere />
      </Link>
      <div className="links">
        <Link className="navigation-link" to="/projects">
          All Projects
        </Link>
        <Link className="navigation-link" to="/">
          Home
        </Link>
      </div>
    </nav>
  )
}

export default ProjectNav
