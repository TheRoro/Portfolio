import React from "react"
import { Helmet } from "react-helmet"

const HomeHelmet = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>Rodrigo Ramirez · Web Developer Portfolio</title>
      <meta name="theme-color" content="#16ffd8" />
      <link rel="canonical" href="https://rodrigoramirez.dev" />
      <meta property="og:title" content="Web Development Portfolio" />
      <meta property="og:url" content="https://rodrigoramirez.dev" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/TheRoro/Portfolio/main/static/projects/portfolio.png"
      />
      <meta
        property="og:image:secure_url"
        content="https://raw.githubusercontent.com/TheRoro/Portfolio/main/static/projects/portfolio.png"
      />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:alt" content="Portfolio Image" />
      <meta property="og:type" content="website" />
      <meta
        property="og:description"
        content="Front End Development portfolio of Rodrigo Ramirez"
      />
      <meta
        name="description"
        content="Web Development Portfolio of Rodrigo Ramirez. Front End Developer specialized in JavaScript Frameworks like React and Vue."
      />
      <meta name="image" content="/sphere.png" />
    </Helmet>
  )
}

export default HomeHelmet
