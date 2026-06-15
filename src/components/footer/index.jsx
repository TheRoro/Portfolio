import React from "react"
import { profile } from "../../content/profile"
import "./styles.scss"

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <p className="text">
        <span>Designed & Developed by</span>{" "}
        <span className="name">{profile.name}</span>
      </p>
    </footer>
  )
}

export default Footer
