import React, { useRef } from "react"
import { motion } from "framer-motion"
import MyReactLogo from "../../assets/tech/react_logo.svg?react"
import TypeScriptLogo from "../../assets/tech/typescript_logo.svg?react"
import SassLogo from "../../assets/tech/sass_logo.svg?react"
import NextLogo from "../../assets/tech/next_logo.svg?react"
import "./styles.scss"

const AboutModule = () => {
  const constraintsRef = useRef(null)

  return (
    <section className="about" id="about" ref={constraintsRef}>
      <h1 className="section-title glowing-text mb-5">About Me</h1>
      <div className="content-row">
        <img src="/rodrigo.jpg" alt="rodrigo ramirez" className="image" />
        <div className="text-container">
          <p className="text">
            Hello! my name is{" "}
            <b className="accent-text glowing-text">Rodrigo</b>, and I'm a
            passionate software developer from Peru. I started programming at 16
            years old, creating very simple websites and games.
          </p>
        </div>
      </div>
      <div className="secondary-row">
        <p className="phrase">
          "Desire for building creative and innovative software"
        </p>
        <div className="tech-row">
          <p className="favs-title">my favs:</p>
          <div className="logos-row">
            <motion.div
              className="logo-item"
              drag
              dragConstraints={constraintsRef}
            >
              <MyReactLogo className="logo" />
            </motion.div>
            <motion.div
              className="logo-item"
              drag
              dragConstraints={constraintsRef}
            >
              <TypeScriptLogo className="logo" />
            </motion.div>
            <motion.div
              className="logo-item"
              drag
              dragConstraints={constraintsRef}
            >
              <SassLogo className="logo" />
            </motion.div>
            <motion.div
              className="logo-item"
              drag
              dragConstraints={constraintsRef}
            >
              <NextLogo className="logo" />
            </motion.div>
          </div>
          <p className="instruction-text">you can play with the icons!</p>
        </div>
      </div>
    </section>
  )
}

export default AboutModule
