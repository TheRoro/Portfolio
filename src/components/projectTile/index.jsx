import React from "react"
import { Link } from "react-router-dom"
import GithubLogo from "../../assets/social/github.svg?react"
import ExternalLinkLogo from "../../assets/social/externalLink.svg?react"
import ProjectImage from "../projectImage"
import "./styles.scss"

const ProjectTile = ({ project, orientation, variant = "featured" }) => {
  const { title, name, summary, keywords, tags, repoUrl, webUrl, webLabel } =
    project
  const detailPath = `/${name}/`
  const className =
    variant === "card"
      ? "project-tile project-tile-card"
      : `project-tile project-tile-${orientation}`
  const projectImage = (
    <>
      <span className="text">
        <span className="view-more">View {title}</span>
      </span>
      <ProjectImage
        project={project}
        alt=""
        sizes={
          variant === "card"
            ? "(max-width: 760px) calc(100vw - 2rem), (max-width: 1100px) calc(50vw - 3rem), 24rem"
            : undefined
        }
      />
    </>
  )
  const projectDetails = (
    <>
      <p className="project-category">{keywords}</p>
      <h2 className="project-name">{title}</h2>
      <p className="summary">{summary}</p>
      <p className="tags">{tags}</p>
    </>
  )
  const projectLinks = (
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
  )

  if (variant === "card") {
    return (
      <article className={className}>
        <Link
          className="project-card-primary"
          to={detailPath}
          aria-label={`View ${title} project details`}
        >
          <span className="image-container">{projectImage}</span>
          <div className="details-container">{projectDetails}</div>
        </Link>
        <div className="project-card-links">{projectLinks}</div>
      </article>
    )
  }

  return (
    <article className={className}>
      <Link
        className="image-container"
        to={detailPath}
        aria-label={`View ${title} project details`}
      >
        {projectImage}
      </Link>
      <div className="details-container">
        <p className="project-category">{keywords}</p>
        <h2 className="project-name">
          <Link to={detailPath}>{title}</Link>
        </h2>
        <p className="summary">{summary}</p>
        <p className="tags">{tags}</p>
        {projectLinks}
      </div>
    </article>
  )
}

export default ProjectTile
