import React from "react"
import "./styles.scss"

const SectionHeading = ({ eyebrow, title, intro }) => (
  <header className="section-heading">
    <p className="section-heading-eyebrow">{eyebrow}</p>
    <h2 className="section-title glowing-text">{title}</h2>
    <p className="section-heading-intro">{intro}</p>
  </header>
)

export default SectionHeading
