import React from "react"
import "./styles.scss"

const SpaceFallback = ({ compact = false, mobile = false }) => {
  const classes = [
    "space-fallback",
    compact && "space-fallback-compact",
    mobile && "space-fallback-mobile",
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <div className={classes} aria-hidden="true">
      {!mobile && (
        <>
          <span className="fallback-orbit" aria-hidden="true" />
          <span
            className="fallback-planet fallback-planet-purple"
            aria-hidden="true"
          />
        </>
      )}
      <span
        className="fallback-planet fallback-planet-primary"
        aria-hidden="true"
      />
      {!compact && !mobile && (
        <>
          <span
            className="fallback-planet fallback-planet-red"
            aria-hidden="true"
          />
          <span
            className="fallback-planet fallback-planet-gold"
            aria-hidden="true"
          />
        </>
      )}
    </div>
  )
}

export default SpaceFallback
