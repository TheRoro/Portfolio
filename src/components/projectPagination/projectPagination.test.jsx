import React from "react"
import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { describe, expect, it } from "vitest"
import { allProjects, drawly } from "../../content/projects"
import ProjectPagination, { getAdjacentProjects } from "./index"

describe("ProjectPagination", () => {
  it("wraps through the canonical project order", () => {
    const adjacentProjects = getAdjacentProjects(allProjects, drawly.name)

    expect(adjacentProjects.previous.name).toBe("bodega")
    expect(adjacentProjects.next.name).toBe("pokeapp")
  })

  it("links to the previous and next project", () => {
    render(
      <MemoryRouter>
        <ProjectPagination currentProject={drawly} projects={allProjects} />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole("link", { name: /Previous project Bodega/i }),
    ).toHaveAttribute("href", "/bodega/")
    expect(
      screen.getByRole("link", { name: /Next project PokeApp/i }),
    ).toHaveAttribute("href", "/pokeapp/")
  })
})
