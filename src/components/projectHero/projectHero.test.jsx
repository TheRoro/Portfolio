import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { drawly, repoColors } from "../../content/projects"
import ProjectHero from "./index"

describe("ProjectHero", () => {
  it("presents the project value, technology, screenshot, and actions", () => {
    render(<ProjectHero project={drawly} />)

    expect(
      screen.getByRole("heading", { level: 1, name: drawly.title }),
    ).toBeVisible()
    expect(screen.getByText(drawly.keywords)).toBeVisible()
    expect(screen.getByText(drawly.summary)).toBeVisible()
    expect(screen.getByText(drawly.description)).toBeVisible()
    expect(
      screen.getByRole("list", { name: `${drawly.title} technologies` }),
    ).toHaveTextContent("ReactTypeScriptSocket.IOExpress")
    expect(screen.getByText("React")).toHaveClass("technology-react")
    expect(
      screen.getByRole("img", {
        name: `${drawly.title} product screenshot`,
      }),
    ).toBeVisible()
    expect(screen.getByRole("link", { name: drawly.webLabel })).toHaveAttribute(
      "href",
      drawly.webUrl,
    )
    expect(
      screen.getByRole("link", { name: "View repository" }),
    ).toHaveAttribute("href", drawly.repoUrl)
  })

  it("shows a compact palette only when it supports the project story", () => {
    const { rerender } = render(<ProjectHero project={drawly} />)

    expect(
      screen.queryByRole("group", { name: /color palette/i }),
    ).not.toBeInTheDocument()

    rerender(<ProjectHero project={repoColors} />)

    expect(
      screen.getByRole("group", { name: "Repo Colors color palette" }),
    ).toBeVisible()
    expect(screen.getAllByTitle(/^#/)).toHaveLength(repoColors.palette.length)
  })
})
