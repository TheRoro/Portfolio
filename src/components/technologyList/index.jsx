import React from "react"
import "./styles.scss"

const technologyClassNames = {
  React: "technology-react",
  TypeScript: "technology-typescript",
  "Socket.IO": "technology-socket-io",
  Express: "technology-express",
  Vite: "technology-vite",
  PokeAPI: "technology-pokeapi",
  "VS Code API": "technology-vscode",
  JavaScript: "technology-javascript",
  Nuxt: "technology-nuxt",
  Vue: "technology-vue",
  PWA: "technology-pwa",
  "Chrome MV3": "technology-chrome",
  Playwright: "technology-playwright",
  "Three.js": "technology-three",
  Vuex: "technology-vuex",
  Sass: "technology-sass",
  Archived: "technology-archived",
}

const TechnologyList = ({ technologies, ariaLabel, className = "" }) => (
  <ul
    className={["technology-list", className].filter(Boolean).join(" ")}
    aria-label={ariaLabel}
  >
    {technologies.map(technology => (
      <li className={technologyClassNames[technology]} key={technology}>
        {technology}
      </li>
    ))}
  </ul>
)

export default TechnologyList
