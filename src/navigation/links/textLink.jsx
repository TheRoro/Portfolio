import React from "react"
import { Link as LinkScroll } from "react-scroll"

const TextLink = ({ href, name }) => {
  return (
    <LinkScroll
      activeClass="active"
      className="navigation-link"
      to={href}
      spy={true}
      smooth={true}
      duration={1000}
    >
      {name}
    </LinkScroll>
  )
}

export default TextLink
