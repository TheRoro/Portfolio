import React, { lazy, Suspense } from "react"
import { Link as LinkScroll } from "react-scroll"
import FloatingLinks from "../../components/floatingLinks"
import SpaceFallback from "../../components/spaceFallback"
import WebGLBoundary from "../../components/webglBoundary"
import useMediaQuery from "../../hooks/useMediaQuery"
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion"
import "./styles.scss"

const Planets = lazy(() => import("../../components/planets"))

const HomeModule = () => {
  const reduceMotion = usePrefersReducedMotion()
  const useMobileScene = useMediaQuery("(max-width: 650px)")
  const scrollProps = {
    smooth: !reduceMotion,
    duration: reduceMotion ? 0 : 1000,
  }

  return (
    <section id="home" className="home">
      <div className="home-col">
        <p className="current-role">Software Engineer · Microsoft, Xbox</p>
        <h1 className="name">Rodrigo Ramirez</h1>
        <nav className="hero-actions" aria-label="Portfolio actions">
          <LinkScroll
            className="hero-action"
            to="experience"
            href="#experience"
            {...scrollProps}
          >
            <span>Experience</span>
          </LinkScroll>
          <span className="hero-action-group">
            <span className="hero-action-separator" aria-hidden="true">
              ·
            </span>
            <LinkScroll
              className="hero-action"
              to="main-projects"
              href="#main-projects"
              {...scrollProps}
            >
              <span>Selected work</span>
            </LinkScroll>
          </span>
          <span className="hero-action-group">
            <span className="hero-action-separator" aria-hidden="true">
              ·
            </span>
            <a
              className="hero-action"
              href="/rodrigo_ramirez_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <span>Résumé</span>
            </a>
          </span>
          <span className="hero-action-group">
            <span className="hero-action-separator" aria-hidden="true">
              ·
            </span>
            <LinkScroll
              className="hero-action"
              to="contact"
              href="#contact"
              {...scrollProps}
            >
              <span>Contact</span>
            </LinkScroll>
          </span>
        </nav>
      </div>
      <div className="planets-container">
        {useMobileScene ? (
          <SpaceFallback mobile />
        ) : (
          <WebGLBoundary fallback={<SpaceFallback />}>
            <Suspense fallback={<SpaceFallback />}>
              <Planets />
            </Suspense>
          </WebGLBoundary>
        )}
      </div>
      <FloatingLinks />
    </section>
  )
}

export default HomeModule
