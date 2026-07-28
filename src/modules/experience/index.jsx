import React, { useState } from "react"
import SectionHeading from "../../components/sectionHeading"
import { careerIntro, education, experience } from "../../content/career"
import useMediaQuery from "../../hooks/useMediaQuery"
import "./styles.scss"

const abbreviatedMonths = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
}

const abbreviateDate = date =>
  Object.entries(abbreviatedMonths).reduce(
    (formattedDate, [month, abbreviation]) =>
      formattedDate.replace(month, abbreviation),
    date,
  )

const ExperienceModule = () => {
  const compactTimeline = useMediaQuery("(max-width: 480px)")
  const [expandedRoles, setExpandedRoles] = useState(() => new Set())
  const toggleRole = roleId => {
    setExpandedRoles(current => {
      const next = new Set(current)

      if (next.has(roleId)) {
        next.delete(roleId)
      } else {
        next.add(roleId)
      }

      return next
    })
  }

  return (
    <section className="experience" id="experience">
      <SectionHeading
        eyebrow="Career timeline"
        title="Experience"
        intro={careerIntro}
      />

      <div className="timeline">
        {experience.map((entry, entryIndex) => (
          <article className="timeline-entry" key={entry.organization}>
            <div className="timeline-marker" aria-hidden="true" />
            <header className="entry-header">
              <div className="entry-identity">
                <span className="organization-logo-frame" aria-hidden="true">
                  <img
                    className="organization-logo"
                    src={entry.logo}
                    alt=""
                    width="52"
                    height="52"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <div>
                  <h2>{entry.organization}</h2>
                  <p>{entry.location}</p>
                </div>
              </div>
              <p className="entry-dates">
                {compactTimeline ? abbreviateDate(entry.start) : entry.start} –{" "}
                {compactTimeline ? abbreviateDate(entry.end) : entry.end}
              </p>
            </header>

            {entry.label && <p className="entry-label">{entry.label}</p>}

            <div className="roles">
              {entry.roles.map((role, roleIndex) => {
                const roleId = `experience-${entryIndex}-${roleIndex}`
                const isExpanded = expandedRoles.has(roleId)
                const visibleHighlights =
                  compactTimeline && !isExpanded
                    ? role.highlights.slice(0, 2)
                    : role.highlights
                const hiddenHighlightCount =
                  role.highlights.length - visibleHighlights.length

                return (
                  <section className="role" key={role.title}>
                    <div className="role-heading">
                      <div className="role-identity">
                        {role.logo && (
                          <span className="role-logo-frame" aria-hidden="true">
                            <img
                              className="role-logo"
                              src={role.logo}
                              alt=""
                              width="28"
                              height="28"
                              loading="lazy"
                              decoding="async"
                            />
                          </span>
                        )}
                        <h3>{role.title}</h3>
                      </div>
                      {role.start && (
                        <p>
                          {compactTimeline
                            ? abbreviateDate(role.start)
                            : role.start}{" "}
                          –{" "}
                          {compactTimeline
                            ? abbreviateDate(role.end)
                            : role.end}
                        </p>
                      )}
                    </div>
                    <p className="role-summary">{role.summary}</p>
                    {visibleHighlights.length > 0 && (
                      <ul id={`${roleId}-highlights`}>
                        {visibleHighlights.map(highlight => (
                          <li key={highlight}>{highlight}</li>
                        ))}
                      </ul>
                    )}
                    {compactTimeline && role.highlights.length > 2 && (
                      <button
                        className="role-highlights-toggle"
                        type="button"
                        aria-controls={`${roleId}-highlights`}
                        aria-expanded={isExpanded}
                        onClick={() => toggleRole(roleId)}
                      >
                        <span>
                          {isExpanded
                            ? "Show fewer contributions"
                            : `Show ${hiddenHighlightCount} more contributions`}
                        </span>
                        <svg
                          className="role-highlights-chevron"
                          viewBox="0 0 16 16"
                          aria-hidden="true"
                        >
                          <path d="m4 6 4 4 4-4" />
                        </svg>
                      </button>
                    )}
                  </section>
                )
              })}
            </div>
          </article>
        ))}
      </div>

      <div className="education">
        <header className="education-heading">
          <p>Academic foundation</p>
          <h2>Education</h2>
        </header>
        <div className="education-grid">
          {education.map(item => (
            <article key={item.institution}>
              <p className="education-date">
                {compactTimeline ? abbreviateDate(item.date) : item.date}
              </p>
              <div className="education-identity">
                <span className="education-logo-frame" aria-hidden="true">
                  <img
                    className="education-logo"
                    src={item.logo}
                    alt=""
                    width="42"
                    height="42"
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <h3>{item.institution}</h3>
              </div>
              <p className="education-program">{item.program}</p>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceModule
