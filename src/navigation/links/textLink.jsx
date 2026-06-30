import React from "react"
import { Link as LinkScroll } from "react-scroll"
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
      onClick={onClick}
    >
      {name}
    </LinkScroll>
  )
}

export default TextLink
