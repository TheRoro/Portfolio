import React, { lazy, Suspense } from "react"
import { Link as LinkScroll } from "react-scroll"
import FloatingLinks from "../../components/floatingLinks"
import SpaceFallback from "../../components/spaceFallback"
import WebGLBoundary from "../../components/webglBoundary"
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion"
import "./styles.scss"

const Planets = lazy(() => import("../../components/planets"))

const HomeModule = () => {
  const reduceMotion = usePrefersReducedMotion()
  const scrollProps = {
    smooth: !reduceMotion,
    duration: reduceMotion ? 0 : 1000,
  }

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
            href="#experience"
            {...scrollProps}
          >
            <span>View experience</span>
          </LinkScroll>
          <LinkScroll
            className="hero-action"
            to="main-projects"
            href="#main-projects"
            {...scrollProps}
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
            href="#contact"
            {...scrollProps}
          >
            <span>Contact me</span>
          </LinkScroll>
        </div>
      </div>
      <div className="planets-container">
        <WebGLBoundary fallback={<SpaceFallback />}>
          <Suspense fallback={<SpaceFallback />}>
            <Planets />
          </Suspense>
        </WebGLBoundary>
      </div>
      <FloatingLinks />
    </section>
  )
}

export default HomeModule
