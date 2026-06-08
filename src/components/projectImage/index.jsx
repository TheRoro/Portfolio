import React from "react"

const RESPONSIVE_WIDTHS = [480, 960, 1200]
const DEFAULT_SIZES = "(max-width: 900px) calc(100vw - 2rem), 28rem"

const ProjectImage = ({ project, alt, sizes = DEFAULT_SIZES }) => {
  const baseName = project.imgUrl.replace(/\.[^.]+$/, "")
  const optimizedPath = `/projects/optimized/${baseName}`
  const srcSet = extension =>
    RESPONSIVE_WIDTHS.map(
      width => `${optimizedPath}-${width}w.${extension} ${width}w`,
    ).join(", ")

  return (
    <picture className="project-image">
      <source type="image/avif" srcSet={srcSet("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={srcSet("webp")} sizes={sizes} />
      <img
        className="image"
        src={`${optimizedPath}-og.jpg`}
        alt={alt}
        width="1200"
        height={project.imgHeight}
        loading="lazy"
        decoding="async"
      />
    </picture>
  )
}

export default ProjectImage
