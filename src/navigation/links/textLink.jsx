import React from "react"
import { Link as LinkScroll } from "react-scroll"
import { analyticsSource, trackNavigationClick } from "../../analytics/events"
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion"
import { getScrollMotionProps } from "../scrollMotion"

const TextLink = ({ active, href, name, onClick }) => {
  const reduceMotion = usePrefersReducedMotion()

  return (
    <LinkScroll
      className={`navigation-link${active ? " active" : ""}`}
      to={href}
      href={`#${href}`}
      {...getScrollMotionProps(reduceMotion)}
      onClick={() => {
        trackNavigationClick(href, analyticsSource.primaryNavigation)
        onClick?.()
      }}
    >
      {name}
    </LinkScroll>
  )
}

export default TextLink
