/**
 * @typedef {object} SocialLink
 * @property {"github"|"linkedin"|"email"|"resume"} id
 * @property {string} label
 * @property {string} displayLabel
 * @property {string=} floatingLabel
 * @property {string} href
 * @property {boolean} external
 * @property {boolean} featured
 */

const identity = {
  name: "Rodrigo Ramirez",
  firstName: "Rodrigo",
  role: "Software Engineer",
  employer: "Microsoft",
  product: "Xbox",
  location: "Seattle",
  origin: "Peru",
}

const profile = {
  ...identity,
  heroRole: `${identity.role} · ${identity.employer}, ${identity.product}`,
  siteUrl: "https://rodrigoramirez.dev",
  portrait: {
    src: "/rodrigo/portrait.jpg",
    alt: "Rodrigo Ramirez smiling on a beach",
    socialImage: "/rodrigo/social.jpg",
  },
  resumePath: "/rodrigo_ramirez_resume.pdf",
  about: {
    eyebrow: "From Peru to Seattle",
    introPrefix: "I'm ",
    introSuffix:
      ", a software engineer from Peru now working on Xbox at Microsoft in Seattle. I started coding at 16 with simple websites and games. What began as curiosity gradually became a career I once could only imagine.",
    paragraphs: [
      "That curiosity took me from Peru to studying abroad, a Meta engineering mentorship, Microsoft cloud infrastructure, and now Xbox product engineering. Every step has felt bigger than what my younger self imagined, and each one has reminded me that talent can come from anywhere.",
      "Moving from Peru to Seattle has shaped how I approach both people and problems. It taught me to adapt quickly, listen closely, and value perspectives different from my own, qualities I bring to every team and product I work on.",
    ],
  },
  knowsAbout: [
    "Xbox product engineering",
    "Cloud infrastructure",
    "Diagnostics",
    "Reliable systems",
    "Full-stack development",
  ],
}

/** @type {SocialLink[]} */
const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    displayLabel: "GitHub",
    href: "https://github.com/TheRoro",
    external: true,
    featured: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    displayLabel: "LinkedIn",
    href: "https://www.linkedin.com/in/rodrigoramirezb/",
    external: true,
    featured: true,
  },
  {
    id: "email",
    label: "Email Me",
    displayLabel: "Email",
    floatingLabel: "Email",
    href: "mailto:rodrigoramirezbr@outlook.com",
    external: false,
    featured: true,
  },
  {
    id: "resume",
    label: "Resume CV",
    displayLabel: "Résumé",
    floatingLabel: "Resume",
    href: profile.resumePath,
    external: true,
    featured: true,
  },
]

const floatingSocialIds = ["linkedin", "email", "github", "resume"]

export { floatingSocialIds, profile, socialLinks }
