import React from "react"
import { Link as LinkScroll } from "react-scroll"

const IconLink = ({ href, icon }) => {
  return (
    <LinkScroll
      activeClass="active"
      to={href}
      spy={true}
      smooth={true}
      duration={1000}
      className="img-link"
    >
      {icon}
    </LinkScroll>
  )
}

export default IconLink
