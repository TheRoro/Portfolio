import { describe, expect, it } from "vitest"
import { findActiveSection } from "./activeSection"

const sections = [
  { id: "home", top: 0 },
  { id: "experience", top: 900 },
  { id: "main-projects", top: 3300 },
  { id: "about", top: 4600 },
  { id: "contact", top: 5600 },
]

describe("findActiveSection", () => {
  it("selects the section containing the navigation probe", () => {
    expect(findActiveSection(sections, 80)).toBe("home")
    expect(findActiveSection(sections, 980)).toBe("experience")
    expect(findActiveSection(sections, 4680)).toBe("about")
  })

  it("selects a destination exactly at its boundary", () => {
    expect(findActiveSection(sections, 4600)).toBe("about")
  })

  it("uses the final section after its boundary", () => {
    expect(findActiveSection(sections, 7000)).toBe("contact")
  })
})
