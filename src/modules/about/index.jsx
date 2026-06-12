import React, { useRef } from "react"
import { motion } from "framer-motion"
import CSharpLogo from "../../assets/tech/csharp_logo.svg?react"
import DotNetLogo from "../../assets/tech/dotnet_logo.svg?react"
import LinuxLogo from "../../assets/tech/linux_logo.svg?react"
import ReactLogo from "../../assets/tech/react_logo.svg?react"
import SqlLogo from "../../assets/tech/sql_logo.svg?react"
import TypeScriptLogo from "../../assets/tech/typescript_logo.svg?react"
import useMediaQuery from "../../hooks/useMediaQuery"
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion"
import "./styles.scss"

const DraggableIcon = ({ children, constraints, disabled }) => (
  <motion.div
    className={`draggable-icon${disabled ? " drag-disabled" : ""}`}
    drag={!disabled}
    dragConstraints={constraints}
  >
    {children}
  </motion.div>
)

const AboutModule = () => {
  const capabilitiesRef = useRef(null)
  const reduceMotion = usePrefersReducedMotion()
  const compactCapabilities = useMediaQuery(
    "(max-width: 650px), (pointer: coarse)",
  )
  const disableIconDrag = reduceMotion || compactCapabilities

  return (
    <section className="about" id="about">
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
        <h2 className="capabilities-title">What I work across</h2>
        <div className="capabilities-grid" ref={capabilitiesRef}>
          <article className="capability-card">
            <p className="capability-label">Product</p>
            <div className="capability-icons" aria-hidden="true">
              <DraggableIcon
                constraints={capabilitiesRef}
                disabled={disableIconDrag}
              >
                <ReactLogo className="tech-logo" />
              </DraggableIcon>
              <DraggableIcon
                constraints={capabilitiesRef}
                disabled={disableIconDrag}
              >
                <TypeScriptLogo className="tech-logo" />
              </DraggableIcon>
            </div>
            <h3>Product interfaces</h3>
            <p className="capability-tools">React · TypeScript</p>
          </article>
          <article className="capability-card">
            <p className="capability-label">Services</p>
            <div className="capability-icons" aria-hidden="true">
              <DraggableIcon
                constraints={capabilitiesRef}
                disabled={disableIconDrag}
              >
                <CSharpLogo className="tech-logo" />
              </DraggableIcon>
              <DraggableIcon
                constraints={capabilitiesRef}
                disabled={disableIconDrag}
              >
                <DotNetLogo className="tech-logo" />
              </DraggableIcon>
            </div>
            <h3>Backend systems</h3>
            <p className="capability-tools">C# · .NET</p>
          </article>
          <article className="capability-card">
            <p className="capability-label">Infrastructure</p>
            <div className="capability-icons" aria-hidden="true">
              <DraggableIcon
                constraints={capabilitiesRef}
                disabled={disableIconDrag}
              >
                <LinuxLogo className="tech-logo monochrome-logo" />
              </DraggableIcon>
              <DraggableIcon
                constraints={capabilitiesRef}
                disabled={disableIconDrag}
              >
                <svg className="line-icon" viewBox="0 0 32 32">
                  <path d="M3 17h5l3-8 5 16 4-12 3 4h6" />
                </svg>
              </DraggableIcon>
            </div>
            <h3>Cloud diagnostics</h3>
            <p className="capability-tools">Linux · Telemetry</p>
          </article>
          <article className="capability-card">
            <p className="capability-label">Data</p>
            <div className="capability-icons" aria-hidden="true">
              <DraggableIcon
                constraints={capabilitiesRef}
                disabled={disableIconDrag}
              >
                <SqlLogo className="tech-logo" />
              </DraggableIcon>
              <DraggableIcon
                constraints={capabilitiesRef}
                disabled={disableIconDrag}
              >
                <svg className="line-icon" viewBox="0 0 32 32">
                  <path d="M5 27V15h5v12M14 27V9h5v18M23 27V4h5v23M3 27h27" />
                </svg>
              </DraggableIcon>
            </div>
            <h3>Insights &amp; automation</h3>
            <p className="capability-tools">SQL · Reporting</p>
          </article>
        </div>
        {!disableIconDrag && (
          <p className="capabilities-hint">you can play with the icons...</p>
        )}
      </div>
    </section>
  )
}

export default AboutModule
