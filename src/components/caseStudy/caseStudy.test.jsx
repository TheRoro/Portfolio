import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { bodega, drawly } from "../../content/projects"
import CaseStudy from "./index"

describe("CaseStudy", () => {
  it("renders the structured engineering narrative", () => {
    render(<CaseStudy project={drawly} />)

    expect(
      screen.getByRole("heading", {
        name: "Making real-time play feel dependable",
      }),
    ).toBeVisible()
    expect(screen.getByRole("heading", { name: "The challenge" })).toBeVisible()
    expect(screen.getAllByText(/authoritative/i).length).toBeGreaterThan(0)
    expect(screen.getByText(drawly.caseStudy.outcome)).toBeVisible()
    expect(screen.getByText(drawly.caseStudy.lesson)).toBeVisible()
  })

  it("renders nothing for projects without a case study", () => {
    const { container } = render(<CaseStudy project={bodega} />)

    expect(container).toBeEmptyDOMElement()
  })
})
