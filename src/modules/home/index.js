import React from "react"
import Planets from "../../components/planets"
import FloatingLinks from "../../components/floatingLinks"
import "./styles.scss"

const HomeModule = () => {
  return (
    <div id="home" className="home">
      <div className="home-col">
        <h1 className="name">Rodrigo Ramirez</h1>
        <h1 className="job glowing-text">Frontend Developer</h1>
      </div>
      <div className="planets-container">
        <Planets />
      </div>
      <FloatingLinks />
    </div>
  )
}

export default HomeModule