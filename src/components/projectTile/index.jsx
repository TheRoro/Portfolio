import React from "react"
import { Link } from "react-router-dom"
import GithubLogo from "../../assets/social/github.svg?react"
import ExternalLinkLogo from "../../assets/social/externalLink.svg?react"
import ProjectImage from "../projectImage"
import "./styles.scss"

const ProjectTile = ({ project, orientation }) => {
  const { title, name, summary, keywords, tags, repoUrl, webUrl, webLabel } =
    project

  return (
    <article className={`project-tile project-tile-${orientation}`}>
      <Link
        className="image-container"
        to={`/${name}/`}
        aria-label={`View ${title} project details`}
      >
        <span className="text">
          <span className="view-more">View {title}</span>
        </span>
        <ProjectImage project={project} alt="" />
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
            aria-label={webLabel ? `${webLabel} for ${title}` : `Open ${title}`}
          >
            <ExternalLinkLogo className="logo" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectTile
