import React from "react"
import { motion } from "framer-motion"
import SocialIcon from "../socialIcon"
import { floatingSocialIds, socialLinks } from "../../content/profile"
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion"
import "./styles.scss"

const FloatingLinks = () => {
  const reduceMotion = usePrefersReducedMotion()
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
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }
  const floatingLinks = floatingSocialIds.map(id => {
    const link = socialLinks.find(item => item.id === id)

    if (!link) {
      throw new Error(`Unknown floating social link: ${id}`)
    }

    return link
  })

  return (
    <motion.ul
      className="floating-links"
      id="floating-links"
      variants={containerAnimation}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
    >
      {floatingLinks.map(link => (
        <motion.li className="logo-item" variants={itemAnimation} key={link.id}>
          <a
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            aria-label={link.floatingLabel ?? link.label}
          >
            <SocialIcon id={link.id} className="logo" />
          </a>
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default FloatingLinks
