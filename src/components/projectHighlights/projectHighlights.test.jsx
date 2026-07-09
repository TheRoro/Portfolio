import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { upspell } from "../../content/projects"
import ProjectHighlights from "./index"

describe("ProjectHighlights", () => {
  it("renders the concise highlights for a smaller project", () => {
    render(<ProjectHighlights project={upspell} />)

    expect(
      screen.getByRole("heading", { name: "What it includes" }),
    ).toBeVisible()
    for (const highlight of upspell.highlights) {
      expect(screen.getByText(highlight)).toBeVisible()
    }
  })
})
