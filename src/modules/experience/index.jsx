import React from "react"
import { education, experience } from "../../components/experienceInfo"
import "./styles.scss"

const ExperienceModule = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-heading">
        <p className="experience-eyebrow">Career timeline</p>
        <h2 className="section-title glowing-text">Experience</h2>
        <p className="experience-intro">
          Building reliable systems across cloud infrastructure, diagnostics,
          and Xbox product experiences.
        </p>
      </div>

      <div className="timeline">
        {experience.map(entry => (
          <article className="timeline-entry" key={entry.organization}>
            <div className="timeline-marker" aria-hidden="true" />
            <header className="entry-header">
              <div>
                <h2>{entry.organization}</h2>
                <p>{entry.location}</p>
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
                    <h3>{role.title}</h3>
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
              <h3>{item.institution}</h3>
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
