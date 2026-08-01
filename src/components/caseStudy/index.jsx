import React from "react"
import "./styles.scss"

const CaseStudyList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

const CaseStudy = ({ project }) => {
  const { caseStudy } = project

  if (!caseStudy) return null

  const headingId = `${project.name}-case-study`

  return (
    <section className="case-study" aria-labelledby={headingId}>
      <header className="case-study-heading">
        <p className="case-study-eyebrow">Engineering case study</p>
        <h2 id={headingId}>{caseStudy.title}</h2>
      </header>

      <div className="case-study-challenge">
        <article>
          <div>
            <p className="case-study-step">01 / Context</p>
            <h3>The challenge</h3>
            <p>{caseStudy.problem}</p>
          </div>
          <div>
            <p className="case-study-label">Constraints</p>
            <CaseStudyList items={caseStudy.constraints} />
          </div>
        </article>
      </div>

      <div className="case-study-section">
        <header className="case-study-section-heading">
          <p className="case-study-step">02 / Architecture</p>
          <h3>Key decisions</h3>
        </header>
        <div className="decision-grid">
          {caseStudy.decisions.map((decision, index) => (
            <article key={decision.title}>
              <p className="decision-number">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h4>{decision.title}</h4>
              <p>{decision.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="case-study-section case-study-highlights">
        <header className="case-study-section-heading">
          <p className="case-study-step">03 / Execution</p>
          <h3>Engineering highlights</h3>
        </header>
        <article>
          <CaseStudyList items={project.highlights} />
        </article>
      </div>

      <div className="case-study-closing">
        <header className="case-study-section-heading">
          <p className="case-study-step">04 / Results</p>
          <h3>Outcome and takeaway</h3>
        </header>
        <article>
          <div>
            <p className="case-study-label">Outcome</p>
            <p>{caseStudy.outcome}</p>
          </div>
          <div>
            <p className="case-study-label">Takeaway</p>
            <p>{caseStudy.lesson}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default CaseStudy
