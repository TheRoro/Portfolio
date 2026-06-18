import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect, it, vi } from "vitest"
import HomeNav from "./homeNav"

vi.mock("react-scroll", () => ({
  Link: ({ children, className, onClick, to }) => (
    <a className={className} href={`#${to}`} onClick={onClick}>
      {children}
    </a>
  ),
}))

describe("HomeNav", () => {
  it("opens and closes from a navigation link", async () => {
    const user = userEvent.setup()
    render(<HomeNav />)
    const menuButton = screen.getByRole("button", {
      name: "Open navigation menu",
    })

    await user.click(menuButton)

    expect(menuButton).toHaveAttribute("aria-expanded", "true")
    expect(screen.getByText("Experience").closest("div")).toHaveClass(
      "links-open",
    )

    await user.click(screen.getByRole("link", { name: "Experience" }))

    expect(menuButton).toHaveAttribute("aria-expanded", "false")
  })

  it("closes with Escape and restores focus to the menu button", async () => {
    const user = userEvent.setup()
    render(<HomeNav />)
    const menuButton = screen.getByRole("button", {
      name: "Open navigation menu",
    })

    await user.click(menuButton)
    screen.getByRole("link", { name: "Experience" }).focus()
    fireEvent.keyDown(document, { key: "Escape" })

    expect(menuButton).toHaveAttribute("aria-expanded", "false")
    expect(menuButton).toHaveFocus()
  })

  it("closes when the user points outside the navigation", async () => {
    const user = userEvent.setup()
    render(<HomeNav />)
    const menuButton = screen.getByRole("button", {
      name: "Open navigation menu",
    })

    await user.click(menuButton)
    fireEvent.pointerDown(document.body)

    expect(menuButton).toHaveAttribute("aria-expanded", "false")
  })
})
