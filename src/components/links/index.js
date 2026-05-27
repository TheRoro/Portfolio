import React from "react"
import GithubLogo from "../../../static/social/github.svg"
import ExternalLinkLogo from "../../../static/social/externalLink.svg"
import "./styles.scss"

const LinksComponent = ({ repoUrl, webUrl }) => {
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
          aria-label="Live Website"
        >
          <ExternalLinkLogo className="logo" />
        </a>
        <p className="logo-label">Live Website</p>
      </div>
    </div>
  )
}

export default LinksComponent
