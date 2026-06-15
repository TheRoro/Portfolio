import React from "react"
import CodepenLogo from "../../assets/social/codepen.svg?react"
import EmailLogo from "../../assets/social/email.svg?react"
import GithubLogo from "../../assets/social/github.svg?react"
import InstagramLogo from "../../assets/social/instagram.svg?react"
import LinkedinLogo from "../../assets/social/linkedin.svg?react"
import ResumeLogo from "../../assets/social/resume.svg?react"

const icons = {
  codepen: CodepenLogo,
  email: EmailLogo,
  github: GithubLogo,
  instagram: InstagramLogo,
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
