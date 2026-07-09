import React from "react"
import ExternalLinkLogo from "../../assets/social/externalLink.svg?react"
import GithubLogo from "../../assets/social/github.svg?react"
import ProjectImage from "../projectImage"
import "./styles.scss"

const ProjectHero = ({ project }) => {
  const {
    title,
    keywords,
    summary,
    description,
    tags,
    palette,
    showPalette,
    repoUrl,
    webUrl,
    webLabel,
  } = project

  return (
    <header className="project-hero">
      <div className="project-hero-content">
        <p className="project-hero-category">{keywords}</p>
        <h1 className="project-hero-title">{title}</h1>
        <p className="project-hero-summary">{summary}</p>
        <p className="project-hero-description">{description}</p>
        <div className="project-hero-technology">
          <p>Built with</p>
          <p>{tags}</p>
        </div>
        {showPalette && (
          <div className="project-hero-palette">
            <p>Visual palette</p>
            <div role="group" aria-label={`${title} color palette`}>
              {palette.map(color => (
                <span
                  key={color.background}
                  title={color.background}
                  style={{ background: color.background }}
                >
                  <span className="sr-only">{color.background}</span>
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="project-hero-actions">
          <a
            className="project-hero-action project-hero-action-primary"
            href={webUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLinkLogo aria-hidden="true" />
            <span>{webLabel}</span>
          </a>
          <a
            className="project-hero-action project-hero-action-secondary"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubLogo aria-hidden="true" />
            <span>View repository</span>
          </a>
        </div>
      </div>

      <div className="project-hero-visual">
        <ProjectImage
          project={project}
          alt={`${title} product screenshot`}
          sizes="(max-width: 850px) calc(100vw - 2rem), 42rem"
        />
      </div>
    </header>
  )
}

export default ProjectHero
