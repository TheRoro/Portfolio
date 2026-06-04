import React from "react"
import GithubLogo from "../../assets/social/github.svg?react"
import ExternalLinkLogo from "../../assets/social/externalLink.svg?react"
import "./styles.scss"

const LinksComponent = ({ repoUrl, webUrl, webLabel = "Live Website" }) => {
  return (
    <div className="links-row">
      <div className="repo-link-col">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Code Repository"
        >
          <GithubLogo className="logo" />
        </a>
        <p className="logo-label">Code Repository</p>
      </div>
      <div className="web-link-col">
        <a
          href={webUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={webLabel}
        >
          <ExternalLinkLogo className="logo" />
        </a>
        <p className="logo-label">{webLabel}</p>
      </div>
    </div>
  )
}

export default LinksComponent
