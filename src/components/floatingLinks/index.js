import React from "react"
import { motion } from "framer-motion"
import GithubLogo from "../../../static/social/github.svg"
import LinkedinLogo from "../../../static/social/linkedin.svg"
import EmailLogo from "../../../static/social/email.svg"
import ResumeLogo from "../../../static/social/resume.svg"
import "./styles.scss"

const FloatingLinks = () => {
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

  return (
    <motion.ul
      className="floating-links"
      id="floating-links"
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
    >
      <motion.li className="logo-item" variants={itemAnimation} key={0}>
        <a
          href="https://www.linkedin.com/in/rodrigoramirezb/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedinLogo className="logo" />
        </a>
      </motion.li>
      <motion.li className="logo-item" variants={itemAnimation} key={1}>
        <a href="mailto:rodrigoramirezbr@outlook.com" aria-label="Email">
          <EmailLogo className="logo" />
        </a>
      </motion.li>
      <motion.li className="logo-item" variants={itemAnimation} key={2}>
        <a
          href="https://github.com/TheRoro"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GithubLogo className="logo" />
        </a>
      </motion.li>
      <motion.li className="logo-item" variants={itemAnimation} key={3}>
        <a
          href="/rodrigo_ramirez_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Resume"
        >
          <ResumeLogo className="logo" />
        </a>
      </motion.li>
    </motion.ul>
  )
}

export default FloatingLinks
