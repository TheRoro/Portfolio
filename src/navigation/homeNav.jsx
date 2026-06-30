import React, { useEffect, useRef, useState } from "react"
import NavLogo from "../components/navLogo"
import { homeNavigation } from "../content/navigation"
import { findActiveSection } from "./activeSection"
import IconScrollLink from "./links/iconLink"
import TextScrollLink from "./links/textLink"
import "./styles.scss"

const HomeNav = () => {
  const [activeSection, setActiveSection] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const menuButtonRef = useRef(null)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    let animationFrame
    const sectionIds = ["home", ...homeNavigation.map(link => link.target)]

    const updateActiveSection = () => {
      animationFrame = undefined
      const sections = sectionIds
        .map(id => {
          const element = document.getElementById(id)

          return element
            ? {
                id,
                top: element.getBoundingClientRect().top + window.scrollY,
              }
            : null
        })
        .filter(Boolean)

      const navbarHeight = navRef.current?.getBoundingClientRect().height ?? 0
      setActiveSection(
        findActiveSection(sections, window.scrollY + navbarHeight + 1),
      )
    }
    const scheduleUpdate = () => {
      if (animationFrame === undefined) {
        animationFrame = window.requestAnimationFrame(updateActiveSection)
      }
    }

    updateActiveSection()
    window.addEventListener("scroll", scheduleUpdate, { passive: true })
    window.addEventListener("resize", scheduleUpdate)

    return () => {
      window.removeEventListener("scroll", scheduleUpdate)
      window.removeEventListener("resize", scheduleUpdate)
      if (animationFrame !== undefined) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return undefined

    const handleKeyDown = event => {
      if (event.key === "Escape") {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }
    const handlePointerDown = event => {
      if (!navRef.current?.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    document.addEventListener("pointerdown", handlePointerDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.removeEventListener("pointerdown", handlePointerDown)
    }
  }, [menuOpen])

  return (
    <nav
      className="nav nav-home"
      aria-label="Primary"
      ref={navRef}
      onBlur={event => {
        if (menuOpen && !event.currentTarget.contains(event.relatedTarget)) {
          setMenuOpen(false)
        }
      }}
    >
      <IconScrollLink
        href="home"
        icon={<NavLogo />}
        ariaLabel="Back to top"
        active={activeSection === "home"}
      />
      <button
        ref={menuButtonRef}
        className="nav-menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="home-navigation-links"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setMenuOpen(open => !open)}
      >
        {menuOpen ? "Close" : "Menu"}
      </button>
      <div
        className={`links${menuOpen ? " links-open" : ""}`}
        id="home-navigation-links"
      >
        {homeNavigation.map(link => (
          <TextScrollLink
            key={link.target}
            href={link.target}
            name={link.label}
            onClick={closeMenu}
            active={activeSection === link.target}
          />
        ))}
      </div>
    </nav>
  )
}

export default HomeNav
