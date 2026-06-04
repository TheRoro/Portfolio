import React from "react"
import { Link } from "react-router-dom"
import GithubLogo from "../../assets/social/github.svg?react"
import ExternalLinkLogo from "../../assets/social/externalLink.svg?react"
import "./styles.scss"

const ProjectTile = ({
  project: {
    title,
    name,
    summary,
    keywords,
    tags,
    imgUrl,
    repoUrl,
    webUrl,
    webLabel,
  },
  orientation,
}) => {
  return (
    <div className={`project-tile project-tile-${orientation}`}>
      <Link className="image-container" to={`/${name}/`}>
        <span className="text">
          <h1>View More</h1>
        </span>
        <img
          className="image"
          src={`/projects/${imgUrl}`}
          alt={`${title} · ${summary}`}
        />
      </Link>
      <div className="details-container">
        <h2 className="keywords">{keywords}</h2>
        <p className="summary">{summary}</p>
        <p className="tags">{tags}</p>
        <div className="links">
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} code repository`}
          >
            <GithubLogo className="logo" />
          </a>
          <a
            href={webUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={webLabel || `Open ${title}`}
          >
            <ExternalLinkLogo className="logo" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectTile
