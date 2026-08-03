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
      <p className="analytics-note">
        Anonymous usage analytics · No session recordings or personal profiles
      </p>
    </footer>
  )
}

export default Footer
