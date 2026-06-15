/**
 * @typedef {object} NavigationLink
 * @property {string} target
 * @property {string} label
 *
 * @typedef {NavigationLink & {type: "section"|"resume"}} HeroAction
 */

/** @type {NavigationLink[]} */
const homeNavigation = [
  { target: "experience", label: "Experience" },
  { target: "main-projects", label: "Work" },
  { target: "about", label: "About" },
  { target: "contact", label: "Contact" },
]

/** @type {HeroAction[]} */
const heroActions = [
  { target: "experience", label: "Experience", type: "section" },
  { target: "main-projects", label: "Selected work", type: "section" },
  { target: "resume", label: "Résumé", type: "resume" },
  { target: "contact", label: "Contact", type: "section" },
]

export { heroActions, homeNavigation }
