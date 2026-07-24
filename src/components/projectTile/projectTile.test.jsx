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
    expect(screen.getByRole("heading", { name: "Drawly" })).toBeVisible()
    expect(
      screen.getByRole("link", { name: "Explore Project" }),
    ).toHaveAttribute("href", "/drawly/")
    expect(
      screen.getByRole("link", { name: "Drawly code repository" }),
    ).toHaveAttribute("href", drawly.repoUrl)
    expect(screen.getByRole("link", { name: "Play Drawly" })).toHaveAttribute(
      "href",
      drawly.webUrl,
    )
    expect(screen.getByRole("link", { name: "Play Drawly" })).toHaveClass(
      "project-action-product",
    )
    expect(screen.getByText(drawly.summary)).toBeVisible()
    expect(
      screen.getByRole("list", { name: "Drawly technologies" }),
    ).toHaveTextContent("ReactTypeScriptSocket.IOExpress")
    expect(screen.getByText("React")).toHaveClass("technology-react")
    expect(screen.getByText("TypeScript")).toHaveClass("technology-typescript")
    expect(screen.getByText("Socket.IO")).toHaveClass("technology-socket-io")
    expect(screen.getByText("Express")).toHaveClass("technology-express")
  })

  it("supports the compact card layout used by the project index", () => {
    render(
      <MemoryRouter>
        <ProjectTile project={drawly} variant="card" />
      </MemoryRouter>,
    )

    expect(screen.getByRole("article")).toHaveClass("project-tile-card")
    expect(
      screen.getByRole("link", { name: "View Drawly project details" }),
    ).toContainElement(screen.getByRole("heading", { name: "Drawly" }))
  })
})
