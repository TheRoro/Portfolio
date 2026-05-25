import React from "react"
import { motion } from "framer-motion"
import GithubLogo from "../../../static/social/github.svg"
import LinkedinLogo from "../../../static/social/linkedin.svg"
import EmailLogo from "../../../static/social/email.svg"
import ResumeLogo from "../../../static/social/resume.svg"
import "./styles.scss"

const FloatingLinks = () => {
  const openLink = link => {
    window.open(link, "_blank", "noopener,noreferrer")
  }

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
        <LinkedinLogo
          className="logo"
          onClick={() =>
            openLink("https://www.linkedin.com/in/rodrigoramirezb/")
          }
        />
      </motion.li>
      <motion.li className="logo-item" variants={itemAnimation} key={1}>
        <EmailLogo
          className="logo"
          onClick={() => {
            window.location.href = "mailto:rodrigoramirezbr@outlook.com"
          }}
        />
      </motion.li>
      <motion.li className="logo-item" variants={itemAnimation} key={2}>
        <GithubLogo
          className="logo"
          onClick={() => openLink("https://github.com/TheRoro")}
        />
      </motion.li>
      <motion.li className="logo-item" variants={itemAnimation} key={3}>
        <ResumeLogo
          className="logo"
          onClick={() => openLink("/rodrigo_ramirez_resume.pdf")}
        />
      </motion.li>
    </motion.ul>
  )
}

export default FloatingLinks
