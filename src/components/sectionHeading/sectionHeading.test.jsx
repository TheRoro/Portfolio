import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import SectionHeading from "./index"

describe("SectionHeading", () => {
  it("presents a consistent section hierarchy", () => {
    render(
      <SectionHeading
        eyebrow="Featured work"
        title="Selected Projects"
        intro="A concise section introduction."
      />,
    )

    expect(screen.getByText("Featured work")).toBeVisible()
    expect(
      screen.getByRole("heading", { level: 2, name: "Selected Projects" }),
    ).toBeVisible()
    expect(screen.getByText("A concise section introduction.")).toBeVisible()
  })
})
