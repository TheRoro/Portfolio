import React, { lazy, Suspense } from "react"
import { Link as LinkScroll } from "react-scroll"
import {
  analyticsSource,
  trackNavigationClick,
  trackProfileLinkOpened,
} from "../../analytics/events"
import FloatingLinks from "../../components/floatingLinks"
import SpaceFallback from "../../components/spaceFallback"
import WebGLBoundary from "../../components/webglBoundary"
import { heroActions } from "../../content/navigation"
import { profile } from "../../content/profile"
import useMediaQuery from "../../hooks/useMediaQuery"
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion"
import { getScrollMotionProps } from "../../navigation/scrollMotion"
import "./styles.scss"

const Planets = lazy(() => import("../../components/planets"))

const HomeModule = () => {
  const reduceMotion = usePrefersReducedMotion()
  const useMobileScene = useMediaQuery("(max-width: 650px)")
  const scrollProps = getScrollMotionProps(reduceMotion)
  const renderAction = action =>
    action.type === "resume" ? (
      <a
        className="hero-action"
        href={profile.resumePath}
        target="_blank"
        rel="noopener noreferrer"
        download
        onClick={() => trackProfileLinkOpened("resume", analyticsSource.hero)}
      >
        <span>{action.label}</span>
      </a>
    ) : (
      <LinkScroll
        className="hero-action"
        to={action.target}
        href={`#${action.target}`}
        {...scrollProps}
        onClick={() =>
          trackNavigationClick(action.target, analyticsSource.hero)
        }
      >
        <span>{action.label}</span>
      </LinkScroll>
    )

  return (
    <section id="home" className="home">
      <div className="home-col">
        <p className="current-role">
          <span className="current-role-title">{profile.role}</span>
          <span className="current-role-separator" aria-hidden="true">
            {" "}
            ·{" "}
          </span>
          <span className="current-role-company">
            {profile.employer}, {profile.product}
          </span>
        </p>
        <h1 className="name">
          <span>{profile.firstName}</span> <span>{profile.lastName}</span>
        </h1>
        {useMobileScene && (
          <div className="mobile-planet-container">
            <SpaceFallback mobile />
          </div>
        )}
        <nav className="hero-actions" aria-label="Portfolio actions">
          {heroActions.map((action, index) => (
            <span className="hero-action-group" key={action.target}>
              {index > 0 && (
                <span className="hero-action-separator" aria-hidden="true">
                  ·
                </span>
              )}
              {renderAction(action)}
            </span>
          ))}
        </nav>
      </div>
      {!useMobileScene && (
        <div className="planets-container">
          <WebGLBoundary fallback={<SpaceFallback />}>
            <Suspense fallback={<SpaceFallback />}>
              <Planets />
            </Suspense>
          </WebGLBoundary>
        </div>
      )}
      <FloatingLinks />
    </section>
  )
}

export default HomeModule
