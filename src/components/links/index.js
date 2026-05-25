import React from "react"
import GithubLogo from "../../../static/social/github.svg"
import ExternalLinkLogo from "../../../static/social/externalLink.svg"
import "./styles.scss"

const LinksComponent = ({ repoUrl, webUrl }) => {
  const openLink = link => {
    window.open(link, "_blank", "noopener,noreferrer")
  }
  return (
    <div className="links-row">
      <div className="repo-link-col">
        <GithubLogo className="logo" onClick={() => openLink(repoUrl)} />
        <p className="logo-label">Code Repository</p>
      </div>
      <div className="web-link-col">
        <ExternalLinkLogo className="logo" onClick={() => openLink(webUrl)} />
        <p className="logo-label">Live Website</p>
      </div>
    </div>
  )
}

export default LinksComponent
