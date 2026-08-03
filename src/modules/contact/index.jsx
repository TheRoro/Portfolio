import React, { useEffect } from "react"
import { useAnimation, motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { analyticsSource, trackProfileLinkOpened } from "../../analytics/events"
import usePrefersReducedMotion from "../../hooks/usePrefersReducedMotion"
import Footer from "../../components/footer/index"
import SectionHeading from "../../components/sectionHeading"
import SocialIcon from "../../components/socialIcon"
import { socialLinks } from "../../content/profile"
import "./styles.scss"

const ContactModule = () => {
  const reduceMotion = usePrefersReducedMotion()
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
      <SectionHeading
        eyebrow="Let's connect"
        title="Get In Touch"
        intro="Explore my work, connect professionally, send me a note, or download my résumé."
      />
      <div className="contact-container">
        <div className="contact-system">
          <div className="contact-core" aria-hidden="true">
            <span>Let&apos;s</span>
            <strong>Connect</strong>
          </div>
          <motion.ul
            className="contact-grid"
            variants={containerAnimation}
            initial={reduceMotion ? false : "hidden"}
            animate={controls}
            ref={ref}
          >
            {socialLinks.map(link => (
              <motion.li
                className={`contact-item contact-item--${link.id}`}
                variants={itemAnimation}
                key={link.id}
              >
                <a
                  className="contact-action"
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  aria-label={link.label}
                  onClick={() =>
                    trackProfileLinkOpened(link.id, analyticsSource.contact)
                  }
                >
                  <span className="contact-icon" aria-hidden="true">
                    <SocialIcon id={link.id} className="logo" />
                  </span>
                  <span className="contact-copy">
                    <span className="contact-label">{link.displayLabel}</span>
                    <span className="contact-hint">{link.contactHint}</span>
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>

      <Footer />
    </section>
  )
}

export default ContactModule
