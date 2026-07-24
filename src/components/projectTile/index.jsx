import React from "react"
import { Link } from "react-router-dom"
import GithubLogo from "../../assets/social/github.svg?react"
import ExternalLinkLogo from "../../assets/social/externalLink.svg?react"
import ProjectImage from "../projectImage"
import "./styles.scss"

const technologyClassNames = {
  React: "technology-react",
  TypeScript: "technology-typescript",
  "Socket.IO": "technology-socket-io",
  Express: "technology-express",
  Vite: "technology-vite",
  PokeAPI: "technology-pokeapi",
  "VS Code API": "technology-vscode",
  JavaScript: "technology-javascript",
}

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
        className="project-spotlight-link"
        to={detailPath}
        aria-label={`View ${title} project details`}
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
        <ul
          className="project-technologies"
          aria-label={`${title} technologies`}
        >
          {technologies.map(technology => (
            <li className={technologyClassNames[technology]} key={technology}>
              {technology}
            </li>
          ))}
        </ul>
        <div className="project-actions">
          <Link
            className="project-action project-action-primary"
            to={detailPath}
          >
            Explore Project
          </Link>
          <a
            className="project-action project-action-secondary project-action-product"
            href={webUrl}
            target="_blank"
            rel="noopener noreferrer"
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
