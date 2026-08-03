import React from "react"
import { Link as LinkScroll } from "react-scroll"
import { analyticsSource, trackNavigationClick } from "../../analytics/events"
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion"
import { getScrollMotionProps } from "../scrollMotion"

const IconLink = ({ active, href, icon, ariaLabel = "Home" }) => {
  const reduceMotion = usePrefersReducedMotion()

  return (
    <LinkScroll
      to={href}
      href={`#${href}`}
      {...getScrollMotionProps(reduceMotion)}
      className={`img-link${active ? " active" : ""}`}
      aria-label={ariaLabel}
      onClick={() =>
        trackNavigationClick(href, analyticsSource.primaryNavigation)
      }
    >
      {icon}
    </LinkScroll>
  )
}

export default IconLink
