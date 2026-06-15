import React, { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion"
import Footer from "../../components/footer/index"
import SocialIcon from "../../components/socialIcon"
import { socialLinks } from "../../content/profile"
import "./styles.scss"

const ContactModule = () => {
  const reduceMotion = usePrefersReducedMotion()
  const [hoveredLink, setHoveredLink] = React.useState("")
  const [focusedLink, setFocusedLink] = React.useState("")
  const activeLink = hoveredLink || focusedLink
  const logoName = socialLinks.find(link => link.id === activeLink)?.label ?? ""

  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView || reduceMotion) {
      controls.start("visible")
    }
  }, [controls, inView, reduceMotion])

  const containerAnimation = {
    hidden: { opacity: 1, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemAnimation = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <section className="contact" id="contact">
      <h2 className="section-title glowing-text mb-5">Get In Touch</h2>
      <div className="contact-container">
        <motion.ul
          className="contact-grid"
          variants={containerAnimation}
          initial={reduceMotion ? false : "hidden"}
          animate={controls}
          ref={ref}
        >
          {socialLinks.map(link => (
            <motion.li
              className={`logo-item${link.secondary ? " secondary" : ""}`}
              variants={itemAnimation}
              key={link.id}
            >
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={link.label}
                onMouseEnter={() => setHoveredLink(link.id)}
                onMouseLeave={() => setHoveredLink("")}
                onFocus={() => setFocusedLink(link.id)}
                onBlur={() => setFocusedLink("")}
              >
                <SocialIcon
                  id={link.id}
                  className={`logo ${
                    activeLink === link.id ? "active" : "inactive"
                  }`}
                />
                <span className="contact-label">{link.displayLabel}</span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
        <div className="name-container">
          <p className="name-text">{logoName}</p>
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default ContactModule
