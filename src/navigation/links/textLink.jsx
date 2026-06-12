import React from "react"
import { Link as LinkScroll } from "react-scroll"
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion"

const TextLink = ({ href, name, onClick }) => {
  const reduceMotion = usePrefersReducedMotion()

  return (
    <LinkScroll
      activeClass="active"
      className="navigation-link"
      to={href}
      href={`#${href}`}
      spy={true}
      smooth={!reduceMotion}
      duration={reduceMotion ? 0 : 1000}
      onClick={onClick}
    >
      {name}
    </LinkScroll>
  )
}

export default TextLink
