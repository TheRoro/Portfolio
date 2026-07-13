import React from "react"
import SectionHeading from "../../components/sectionHeading"
import { careerIntro, education, experience } from "../../content/career"
import "./styles.scss"

const ExperienceModule = () => {
  return (
    <section className="experience" id="experience">
      <SectionHeading
        eyebrow="Career timeline"
        title="Experience"
        intro={careerIntro}
      />

      <div className="timeline">
        {experience.map(entry => (
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
                {entry.start} – {entry.end}
              </p>
            </header>

            {entry.label && <p className="entry-label">{entry.label}</p>}

            <div className="roles">
              {entry.roles.map(role => (
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
                        {role.start} – {role.end}
                      </p>
                    )}
                  </div>
                  <p className="role-summary">{role.summary}</p>
                  {role.highlights.length > 0 && (
                    <ul>
                      {role.highlights.map(highlight => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="education">
        <h2>Education</h2>
        <div className="education-grid">
          {education.map(item => (
            <article key={item.institution}>
              <p className="education-date">{item.date}</p>
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
