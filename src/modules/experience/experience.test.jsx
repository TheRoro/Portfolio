import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { experience } from "../../content/career"
import ExperienceModule from "./index"

describe("ExperienceModule", () => {
  beforeEach(() => {
    window.matchMedia = vi.fn(query => ({
      matches: query === "(max-width: 480px)",
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
  })

  it("shows two contributions per role on mobile and expands on request", async () => {
    const user = userEvent.setup()
    const xboxRole = experience[0].roles[0]

    render(<ExperienceModule />)

    expect(screen.getByText("Oct 2023 – Present")).toBeVisible()
    expect(screen.getByText("Oct 2025 – Present")).toBeVisible()
    expect(screen.getByText("Dec 2022")).toBeVisible()
    expect(screen.getByText("Academic foundation")).toBeVisible()
    expect(screen.getByText(xboxRole.highlights[0])).toBeVisible()
    expect(screen.getByText(xboxRole.highlights[1])).toBeVisible()
    expect(screen.queryByText(xboxRole.highlights[2])).not.toBeInTheDocument()

    const expandButtons = screen.getAllByRole("button", {
      name: "Show 2 more contributions",
    })
    expect(
      expandButtons[0].querySelector(".role-highlights-chevron"),
    ).toBeInTheDocument()
    await user.click(expandButtons[0])

    expect(screen.getByText(xboxRole.highlights[2])).toBeVisible()
    expect(screen.getByText(xboxRole.highlights[3])).toBeVisible()
    expect(
      screen.getByRole("button", { name: "Show fewer contributions" }),
    ).toHaveAttribute("aria-expanded", "true")
  })
})
