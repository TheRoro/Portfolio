import React from "react"
import { navigate } from "gatsby"
import GithubLogo from "../../../static/social/github.svg"
import ExternalLinkLogo from "../../../static/social/externalLink.svg"
import "./styles.scss"

const ProjectTile = ({
  project: { title, name, summary, keywords, tags, imgUrl, repoUrl, webUrl },
  orientation,
}) => {
  const openLink = link => {
    window.open(link, "_blank", "noopener,noreferrer")
  }
  return (
    <div className={`project-tile project-tile-${orientation}`}>
      <div
        className="image-container"
        onClick={() => {
          navigate(`/${name}/`)
        }}
        onKeyDown={() => {
          navigate(`/${name}/`)
        }}
        role="link"
        tabIndex={0}
      >
        <span className="text">
          <h1>View More</h1>
        </span>
        <img
          className="image"
          src={`/projects/${imgUrl}`}
          alt={`${title} · ${summary}`}
        />
      </div>
      <div className="details-container">
        <h2 className="keywords">{keywords}</h2>
        <p className="summary">{summary}</p>
        <p className="tags">{tags}</p>
        <div className="links">
          <GithubLogo className="logo" onClick={() => openLink(repoUrl)} />
          <ExternalLinkLogo className="logo" onClick={() => openLink(webUrl)} />
        </div>
      </div>
    </div>
  )
}

export default ProjectTile
