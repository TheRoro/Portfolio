import React from "react"
import EmailLogo from "../../assets/social/email.svg?react"
import GithubLogo from "../../assets/social/github.svg?react"
import LinkedinLogo from "../../assets/social/linkedin.svg?react"
import ResumeLogo from "../../assets/social/resume.svg?react"

const icons = {
  email: EmailLogo,
  github: GithubLogo,
  linkedin: LinkedinLogo,
  resume: ResumeLogo,
}

const SocialIcon = ({ id, className }) => {
  const Icon = icons[id]

  if (!Icon) {
    throw new Error(`Unknown social icon: ${id}`)
  }

  return <Icon className={className} />
}

export default SocialIcon
