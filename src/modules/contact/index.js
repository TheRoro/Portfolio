import React, { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Footer from "../../components/footer/index"
import GithubLogo from "../../../static/social/github.svg"
import LinkedinLogo from "../../../static/social/linkedin.svg"
import EmailLogo from "../../../static/social/email.svg"
import ResumeLogo from "../../../static/social/resume.svg"
import InstagramLogo from "../../../static/social/instagram.svg"
import CodepenLogo from "../../../static/social/codepen.svg"
import "./styles.scss"

const ContactModule = () => {
  const [logoName, setLogoName] = React.useState("")
  const [activeHover, setActiveHover] = React.useState([
    "inactive",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
    "inactive",
  ])

  const openLink = link => {
    window.open(link, "_blank", "noopener,noreferrer")
  }

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
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

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
      <h1 className="section-title glowing-text mb-5">Get In Touch</h1>
      <div className="contact-container">
        <motion.ul
          className="contact-grid"
          variants={containerAnimation}
          initial="hidden"
          animate={controls}
          ref={ref}
        >
          <motion.li className="logo-item" variants={itemAnimation} key={0}>
            <GithubLogo
              className={`logo ${activeHover[0]}`}
              onClick={() => openLink("https://github.com/TheRoro")}
              onMouseEnter={() => mouseEnterFunction("GitHub", 0)}
              onMouseLeave={() => mouseLeaveFunction(0)}
            />
          </motion.li>
          <motion.li className="logo-item" variants={itemAnimation} key={1}>
            <LinkedinLogo
              className={`logo ${activeHover[1]}`}
              onClick={() =>
                openLink("https://www.linkedin.com/in/rodrigoramirezb/")
              }
              onMouseEnter={() => mouseEnterFunction("LinkedIn", 1)}
              onMouseLeave={() => mouseLeaveFunction(1)}
            />
          </motion.li>
          <motion.li className="logo-item" variants={itemAnimation} key={2}>
            <EmailLogo
              className={`logo ${activeHover[2]}`}
              onClick={() => {
                window.location.href = "mailto:rodrigoramirezbr@outlook.com"
              }}
              onMouseEnter={() => mouseEnterFunction("Email Me", 2)}
              onMouseLeave={() => mouseLeaveFunction(2)}
              variants={itemAnimation}
            />
          </motion.li>
          <motion.li className="logo-item" variants={itemAnimation} key={3}>
            <ResumeLogo
              className={`logo ${activeHover[3]}`}
              onClick={() => openLink("/rodrigo_ramirez_resume.pdf")}
              onMouseEnter={() => mouseEnterFunction("Resume CV", 3)}
              onMouseLeave={() => mouseLeaveFunction(3)}
              variants={itemAnimation}
            />
          </motion.li>
          <motion.li className="logo-item" variants={itemAnimation} key={4}>
            <CodepenLogo
              className={`logo ${activeHover[4]}`}
              onClick={() => openLink("https://codepen.io/theroro")}
              onMouseEnter={() => mouseEnterFunction("CodePen", 4)}
              onMouseLeave={() => mouseLeaveFunction(4)}
              variants={itemAnimation}
            />
          </motion.li>
          <motion.li className="logo-item" variants={itemAnimation} key={5}>
            <InstagramLogo
              className={`logo ${activeHover[5]}`}
              onClick={() => openLink("https://www.instagram.com/rorocodes/")}
              onMouseEnter={() => mouseEnterFunction("Instagram", 5)}
              onMouseLeave={() => mouseLeaveFunction(5)}
              variants={itemAnimation}
            />
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
