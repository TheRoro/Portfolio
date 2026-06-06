import React from "react"
import "./styles.scss"

const SpaceFallback = ({ compact = false }) => {
  return (
    <div
      className={`space-fallback${compact ? " space-fallback-compact" : ""}`}
      aria-hidden="true"
    >
      <span className="fallback-orbit" aria-hidden="true" />
      <span
        className="fallback-planet fallback-planet-purple"
        aria-hidden="true"
      />
      <span
        className="fallback-planet fallback-planet-primary"
        aria-hidden="true"
      />
      {!compact && (
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
