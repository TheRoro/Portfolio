import React from "react"
import Planets from "../../components/planets"
import FloatingLinks from "../../components/floatingLinks"
import "./styles.scss"

const HomeModule = () => {
  return (
    <section id="home" className="home">
      <div className="home-col">
        <h1 className="name">Rodrigo Ramirez</h1>
        <h1 className="job glowing-text">Software Engineer</h1>
      </div>
      <div className="planets-container">
        <Planets />
      </div>
      <FloatingLinks />
    </section>
  )
}

export default HomeModule
