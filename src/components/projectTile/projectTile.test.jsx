import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import { drawly } from "../../content/projects"
import ProjectTile from "./index"

describe("ProjectTile", () => {
  it("exposes project details and outbound destinations with useful names", () => {
    render(
      <MemoryRouter>
        <ProjectTile project={drawly} orientation="right" />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole("link", { name: "View Drawly project details" }),
    ).toHaveAttribute("href", "/drawly/")
    expect(screen.getByRole("link", { name: "Drawly" })).toHaveAttribute(
      "href",
      "/drawly/",
    )
    expect(
      screen.getByRole("link", { name: "Drawly code repository" }),
    ).toHaveAttribute("href", drawly.repoUrl)
    expect(
      screen.getByRole("link", { name: "Play Drawly for Drawly" }),
    ).toHaveAttribute("href", drawly.webUrl)
    expect(screen.getByText(drawly.summary)).toBeVisible()
    expect(screen.getByText(drawly.tags)).toBeVisible()
  })
})
