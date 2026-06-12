import React, { useState } from "react"
import NavLogo from "../components/navLogo"
import IconScrollLink from "./links/iconLink"
import TextScrollLink from "./links/textLink"
import "./styles.scss"

const HomeNav = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className="nav nav-home">
      <IconScrollLink href="home" icon={<NavLogo />} />
      <button
        className="nav-menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="home-navigation-links"
        onClick={() => setMenuOpen(open => !open)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
      <div
        className={`links${menuOpen ? " links-open" : ""}`}
        id="home-navigation-links"
      >
        <TextScrollLink
          href="experience"
          name="Experience"
          onClick={closeMenu}
        />
        <TextScrollLink href="main-projects" name="Work" onClick={closeMenu} />
        <TextScrollLink href="about" name="About" onClick={closeMenu} />
        <TextScrollLink href="contact" name="Contact" onClick={closeMenu} />
      </div>
    </nav>
  )
}

export default HomeNav
