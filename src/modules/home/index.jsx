import React from "react"
import { Link as LinkScroll } from "react-scroll"
import Planets from "../../components/planets"
import FloatingLinks from "../../components/floatingLinks"
import "./styles.scss"

const HomeModule = () => {
  return (
    <section id="home" className="home">
      <div className="home-col">
        <p className="current-role">Software Engineer · Microsoft, Xbox</p>
        <h1 className="name">Rodrigo Ramirez</h1>
        <p className="job glowing-text">Software Engineer</p>
        <div className="hero-actions" aria-label="Portfolio actions">
          <LinkScroll
            className="hero-action hero-action-primary"
            to="experience"
            smooth={true}
            duration={1000}
          >
            <span>View experience</span>
          </LinkScroll>
          <LinkScroll
            className="hero-action"
            to="main-projects"
            smooth={true}
            duration={1000}
          >
            <span>View selected work</span>
          </LinkScroll>
          <a
            className="hero-action hero-action-download"
            href="/rodrigo_ramirez_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
          >
            <span>Download résumé</span>
          </a>
          <LinkScroll
            className="hero-action"
            to="contact"
            smooth={true}
            duration={1000}
          >
            <span>Contact me</span>
          </LinkScroll>
        </div>
      </div>
      <div className="planets-container">
        <Planets />
      </div>
      <FloatingLinks />
    </section>
  )
}

export default HomeModule
