import React, { useRef } from "react"
import { motion } from "framer-motion"
import CSharpLogo from "../../assets/tech/csharp_logo.svg?react"
import DotNetLogo from "../../assets/tech/dotnet_logo.svg?react"
import LinuxLogo from "../../assets/tech/linux_logo.svg?react"
import ReactLogo from "../../assets/tech/react_logo.svg?react"
import SqlLogo from "../../assets/tech/sql_logo.svg?react"
import TypeScriptLogo from "../../assets/tech/typescript_logo.svg?react"
import { capabilities } from "../../content/capabilities"
import { profile } from "../../content/profile"
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

const TelemetryIcon = props => (
  <svg viewBox="0 0 32 32" {...props}>
    <path d="M3 17h5l3-8 5 16 4-12 3 4h6" />
  </svg>
)

const ReportingIcon = props => (
  <svg viewBox="0 0 32 32" {...props}>
    <path d="M5 27V15h5v12M14 27V9h5v18M23 27V4h5v23M3 27h27" />
  </svg>
)

const capabilityIcons = {
  csharp: CSharpLogo,
  dotnet: DotNetLogo,
  linux: LinuxLogo,
  react: ReactLogo,
  reporting: ReportingIcon,
  sql: SqlLogo,
  telemetry: TelemetryIcon,
  typescript: TypeScriptLogo,
}

const CapabilityIcon = ({ icon }) => {
  const Icon = capabilityIcons[icon.id]

  if (!Icon) {
    throw new Error(`Unknown capability icon: ${icon.id}`)
  }

  const baseClass = ["reporting", "telemetry"].includes(icon.id)
    ? "line-icon"
    : "tech-logo"
  const className = [baseClass, icon.className].filter(Boolean).join(" ")

  return <Icon className={className} />
}

const AboutModule = () => {
  const capabilitiesRef = useRef(null)
  const reduceMotion = usePrefersReducedMotion()
  const compactCapabilities = useMediaQuery(
    "(max-width: 650px), (pointer: coarse)",
  )
  const disableIconDrag = reduceMotion || compactCapabilities

  return (
    <section className="about" id="about">
      <h2 className="section-title glowing-text mb-5">About</h2>
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
            src={profile.portrait.src}
            alt={profile.portrait.alt}
            className="image"
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
          />
        </picture>
        <div className="text-container">
          <p className="eyebrow">{profile.about.eyebrow}</p>
          <div className="text">
            <p>
              {profile.about.introPrefix}
              <strong className="accent-text glowing-text">
                {profile.firstName}
              </strong>
              {profile.about.introSuffix}
            </p>
            {profile.about.paragraphs.map(paragraph => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="secondary-row">
        <h2 className="capabilities-title">What I work across</h2>
        <div className="capabilities-grid" ref={capabilitiesRef}>
          {capabilities.map(capability => (
            <article
              className={`capability-card capability-card-${capability.id}`}
              key={capability.id}
            >
              <p className="capability-label">{capability.label}</p>
              <div className="capability-icons" aria-hidden="true">
                {capability.icons.map(icon => (
                  <DraggableIcon
                    key={icon.id}
                    constraints={capabilitiesRef}
                    disabled={disableIconDrag}
                  >
                    <CapabilityIcon icon={icon} />
                  </DraggableIcon>
                ))}
              </div>
              <h3>{capability.title}</h3>
              <p className="capability-tools">{capability.tools}</p>
            </article>
          ))}
        </div>
        {!disableIconDrag && (
          <p className="capabilities-hint">you can play with the icons...</p>
        )}
      </div>
    </section>
  )
}

export default AboutModule
