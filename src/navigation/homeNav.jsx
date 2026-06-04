import React from "react"
import Sphere from "../components/sphere"
import IconScrollLink from "./links/iconLink"
import TextScrollLink from "./links/textLink"
import "./styles.scss"

const HomeNav = () => {
  return (
    <nav className="nav">
      <IconScrollLink href="home" icon={<Sphere className="brand-sphere" />} />
      <div className="links">
        <TextScrollLink href="main-projects" name="Projects" />
        <TextScrollLink href="about" name="About" />
        <TextScrollLink href="contact" name="Contact" />
      </div>
    </nav>
  )
}

export default HomeNav
