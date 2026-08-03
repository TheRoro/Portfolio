import React from "react"
import { Link } from "react-router-dom"
import {
  analyticsSource,
  trackProjectDetailsOpened,
  trackProjectProductOpened,
  trackProjectRepositoryOpened,
} from "../../analytics/events"
import GithubLogo from "../../assets/social/github.svg?react"
import ExternalLinkLogo from "../../assets/social/externalLink.svg?react"
import ProjectImage from "../projectImage"
import TechnologyList from "../technologyList"
import "./styles.scss"

const ProjectTile = ({
  project,
  orientation,
  variant = "featured",
  index = 0,
}) => {
  const { title, name, summary, keywords, tags, repoUrl, webUrl, webLabel } =
    project
  const detailPath = `/${name}/`
  const className =
    variant === "card"
      ? "project-tile project-tile-card"
      : `project-tile project-tile-featured project-tile-${orientation}`
  const technologies = tags.split(" · ")
  const source =
    variant === "card"
      ? analyticsSource.projectsGrid
      : analyticsSource.featuredProjects

  if (variant === "card") {
    return (
      <article className={className}>
        <Link
          className="project-card-primary"
          to={detailPath}
          aria-label={`View ${title} project details`}
          onClick={() => trackProjectDetailsOpened(name, source)}
        >
          <span className="image-container">
            <ProjectImage
              project={project}
              alt=""
              sizes="(max-width: 700px) calc(100vw - 2rem), (max-width: 1100px) calc(50vw - 3rem), 24rem"
            />
          </span>
          <div className="details-container">
            <p className="project-category">{keywords}</p>
            <h2 className="project-name">{title}</h2>
            <p className="summary">{summary}</p>
          </div>
        </Link>
        <div className="project-card-actions">
          <a
            className="project-card-action project-card-action-product"
            href={webUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={webLabel ? `${webLabel} for ${title}` : `Open ${title}`}
            onClick={() => trackProjectProductOpened(name, source)}
          >
            <ExternalLinkLogo />
            Product
          </a>
          <a
            className="project-card-action project-card-action-repository"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} code repository`}
            onClick={() => trackProjectRepositoryOpened(name, source)}
          >
            <GithubLogo />
            Repository
          </a>
        </div>
      </article>
    )
  }

  return (
    <article className={className}>
      <Link
        className="project-spotlight-link"
        to={detailPath}
        aria-label={`View ${title} project details`}
        onClick={() => trackProjectDetailsOpened(name, source)}
      />
      <span className="image-container">
        <ProjectImage
          project={project}
          alt={`${title} product interface`}
          sizes="(max-width: 900px) calc(100vw - 4rem), 50vw"
        />
      </span>
      <div className="details-container">
        <div className="project-meta">
          <span className="project-number" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <p className="project-category">{keywords}</p>
        </div>
        <h2 className="project-name">{title}</h2>
        <p className="summary">{summary}</p>
        <TechnologyList
          className="project-technologies"
          ariaLabel={`${title} technologies`}
          technologies={technologies}
        />
        <div className="project-actions">
          <Link
            className="project-action project-action-primary"
            to={detailPath}
            onClick={() => trackProjectDetailsOpened(name, source)}
          >
            Explore Project
          </Link>
          <a
            className="project-action project-action-secondary project-action-product"
            href={webUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackProjectProductOpened(name, source)}
          >
            <ExternalLinkLogo />
            {webLabel}
          </a>
          <a
            className="project-action project-action-secondary project-action-repository"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} code repository`}
            onClick={() => trackProjectRepositoryOpened(name, source)}
          >
            <GithubLogo />
            Repository
          </a>
        </div>
      </div>
    </article>
  )
}

export default ProjectTile
