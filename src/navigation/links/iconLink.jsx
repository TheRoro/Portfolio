import React from "react"
import { Link as LinkScroll } from "react-scroll"
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion"

const IconLink = ({ href, icon, ariaLabel = "Home" }) => {
  const reduceMotion = usePrefersReducedMotion()

  return (
    <LinkScroll
      activeClass="active"
      to={href}
      href={`#${href}`}
      spy={true}
      smooth={!reduceMotion}
      duration={reduceMotion ? 0 : 1000}
      className="img-link"
      aria-label={ariaLabel}
    >
      {icon}
    </LinkScroll>
  )
}

export default IconLink
