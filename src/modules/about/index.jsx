import React, { useRef } from "react"
import { motion } from "framer-motion"
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion"
import MyReactLogo from "../../assets/tech/react_logo.svg?react"
import TypeScriptLogo from "../../assets/tech/typescript_logo.svg?react"
import SassLogo from "../../assets/tech/sass_logo.svg?react"
import NextLogo from "../../assets/tech/next_logo.svg?react"
import "./styles.scss"

const AboutModule = () => {
  const constraintsRef = useRef(null)
  const reduceMotion = usePrefersReducedMotion()

  return (
    <section className="about" id="about" ref={constraintsRef}>
      <h1 className="section-title glowing-text mb-5">About</h1>
      <div className="content-row">
        <picture className="portrait">
          <source
            type="image/avif"
            srcSet="/rodrigo/portrait-320w.avif 320w, /rodrigo/portrait-640w.avif 640w"
            sizes="(max-width: 768px) 80vw, 320px"
          />
          <source
            type="image/webp"
            srcSet="/rodrigo/portrait-320w.webp 320w, /rodrigo/portrait-640w.webp 640w"
            sizes="(max-width: 768px) 80vw, 320px"
          />
          <img
            src="/rodrigo/portrait.jpg"
            alt="Rodrigo Ramirez smiling on a beach"
            className="image"
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="text-container">
          <p className="eyebrow">From Peru to Seattle</p>
          <div className="text">
            <p>
              I&apos;m{" "}
              <strong className="accent-text glowing-text">Rodrigo</strong>, a
              software engineer from Peru now working on Xbox at Microsoft in
              Seattle. I started coding at 16 with simple websites and games.
              What began as curiosity gradually became a career I once could
              only imagine.
            </p>
            <p>
              That curiosity took me from Peru to studying abroad, a Meta
              engineering mentorship, Microsoft cloud infrastructure, and now
              Xbox product engineering. Every step has felt bigger than what my
              younger self imagined, and each one has reminded me that talent
              can come from anywhere.
            </p>
            <p>
              Moving from Peru to Seattle has shaped how I approach both people
              and problems. It taught me to adapt quickly, listen closely, and
              value perspectives different from my own, qualities I bring to
              every team and product I work on.
            </p>
          </div>
        </div>
      </div>
      <div className="secondary-row">
        <div className="tech-row">
          <p className="favs-title">tools I enjoy:</p>
          <div className="logos-row">
            <motion.div
              className="logo-item"
              drag={!reduceMotion}
              dragConstraints={constraintsRef}
            >
              <MyReactLogo className="logo" />
            </motion.div>
            <motion.div
              className="logo-item"
              drag={!reduceMotion}
              dragConstraints={constraintsRef}
            >
              <TypeScriptLogo className="logo" />
            </motion.div>
            <motion.div
              className="logo-item"
              drag={!reduceMotion}
              dragConstraints={constraintsRef}
            >
              <SassLogo className="logo" />
            </motion.div>
            <motion.div
              className="logo-item"
              drag={!reduceMotion}
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
