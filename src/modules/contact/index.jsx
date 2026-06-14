import React, { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion"
import Footer from "../../components/footer/index"
import GithubLogo from "../../assets/social/github.svg?react"
import LinkedinLogo from "../../assets/social/linkedin.svg?react"
import EmailLogo from "../../assets/social/email.svg?react"
import ResumeLogo from "../../assets/social/resume.svg?react"
import InstagramLogo from "../../assets/social/instagram.svg?react"
import CodepenLogo from "../../assets/social/codepen.svg?react"
import "./styles.scss"

const ContactModule = () => {
  const reduceMotion = usePrefersReducedMotion()
  const [logoName, setLogoName] = React.useState("")
  const [activeHover, setActiveHover] = React.useState([
    "inactive",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
  ])

  const mouseEnterFunction = (name, index) => {
    setLogoName(name)
    let temp = [...activeHover]
    temp[index] = "active"
    setActiveHover(temp)
  }

  const mouseLeaveFunction = index => {
    setLogoName("")
    let temp = [...activeHover]
    temp[index] = "inactive"
    setActiveHover(temp)
  }

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
          <motion.li className="logo-item" variants={itemAnimation} key={0}>
            <a
              href="https://github.com/TheRoro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              onMouseEnter={() => mouseEnterFunction("GitHub", 0)}
              onMouseLeave={() => mouseLeaveFunction(0)}
              onFocus={() => mouseEnterFunction("GitHub", 0)}
              onBlur={() => mouseLeaveFunction(0)}
            >
              <GithubLogo className={`logo ${activeHover[0]}`} />
              <span className="contact-label">GitHub</span>
            </a>
          </motion.li>
          <motion.li className="logo-item" variants={itemAnimation} key={1}>
            <a
              href="https://www.linkedin.com/in/rodrigoramirezb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              onMouseEnter={() => mouseEnterFunction("LinkedIn", 1)}
              onMouseLeave={() => mouseLeaveFunction(1)}
              onFocus={() => mouseEnterFunction("LinkedIn", 1)}
              onBlur={() => mouseLeaveFunction(1)}
            >
              <LinkedinLogo className={`logo ${activeHover[1]}`} />
              <span className="contact-label">LinkedIn</span>
            </a>
          </motion.li>
          <motion.li className="logo-item" variants={itemAnimation} key={2}>
            <a
              href="mailto:rodrigoramirezbr@outlook.com"
              aria-label="Email Me"
              onMouseEnter={() => mouseEnterFunction("Email Me", 2)}
              onMouseLeave={() => mouseLeaveFunction(2)}
              onFocus={() => mouseEnterFunction("Email Me", 2)}
              onBlur={() => mouseLeaveFunction(2)}
            >
              <EmailLogo className={`logo ${activeHover[2]}`} />
              <span className="contact-label">Email</span>
            </a>
          </motion.li>
          <motion.li className="logo-item" variants={itemAnimation} key={3}>
            <a
              href="/rodrigo_ramirez_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume CV"
              onMouseEnter={() => mouseEnterFunction("Resume CV", 3)}
              onMouseLeave={() => mouseLeaveFunction(3)}
              onFocus={() => mouseEnterFunction("Resume CV", 3)}
              onBlur={() => mouseLeaveFunction(3)}
            >
              <ResumeLogo className={`logo ${activeHover[3]}`} />
              <span className="contact-label">Résumé</span>
            </a>
          </motion.li>
          <motion.li
            className="logo-item secondary"
            variants={itemAnimation}
            key={4}
          >
            <a
              href="https://codepen.io/theroro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CodePen"
              onMouseEnter={() => mouseEnterFunction("CodePen", 4)}
              onMouseLeave={() => mouseLeaveFunction(4)}
              onFocus={() => mouseEnterFunction("CodePen", 4)}
              onBlur={() => mouseLeaveFunction(4)}
            >
              <CodepenLogo className={`logo ${activeHover[4]}`} />
              <span className="contact-label">CodePen</span>
            </a>
          </motion.li>
          <motion.li
            className="logo-item secondary"
            variants={itemAnimation}
            key={5}
          >
            <a
              href="https://www.instagram.com/rorocodes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              onMouseEnter={() => mouseEnterFunction("Instagram", 5)}
              onMouseLeave={() => mouseLeaveFunction(5)}
              onFocus={() => mouseEnterFunction("Instagram", 5)}
              onBlur={() => mouseLeaveFunction(5)}
            >
              <InstagramLogo className={`logo ${activeHover[5]}`} />
              <span className="contact-label">Instagram</span>
            </a>
          </motion.li>
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
