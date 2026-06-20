import { describe, expect, it } from "vitest"
import { capabilities } from "./capabilities"
import { heroActions, homeNavigation } from "./navigation"
import { allProjects, selectedProjects } from "./projects"
import { floatingSocialIds, profile, socialLinks } from "./profile"

describe("portfolio content", () => {
  it("defines unique, routable projects with complete media and links", () => {
    const names = allProjects.map(project => project.name)

    expect(new Set(names).size).toBe(names.length)
    expect(selectedProjects.map(project => project.name)).toEqual([
      "drawly",
      "pokeapp",
      "vsquote",
    ])

    for (const project of allProjects) {
      expect(project.title).toBeTruthy()
      expect(project.summary).toBeTruthy()
      expect(project.description).toBeTruthy()
      expect(project.imgUrl).toMatch(/\.png$/)
      expect(project.imgHeight).toBeGreaterThan(0)
      expect(project.repoUrl).toMatch(/^https:\/\/github\.com\//)
      expect(project.webUrl).toMatch(/^https:\/\//)
      expect(project.palette.length).toBeGreaterThanOrEqual(5)
    }
  })

  it("keeps navigation targets and social references internally consistent", () => {
    const sectionTargets = new Set(homeNavigation.map(link => link.target))
    const socialIds = new Set(socialLinks.map(link => link.id))

    expect(sectionTargets).toEqual(
      new Set(["experience", "main-projects", "about", "contact"]),
    )
    expect(
      heroActions
        .filter(action => action.type === "section")
        .every(action => sectionTargets.has(action.target)),
    ).toBe(true)
    expect(heroActions.find(action => action.type === "resume")).toBeTruthy()
    expect(floatingSocialIds.every(id => socialIds.has(id))).toBe(true)
    expect(profile.resumePath).toMatch(/\.pdf$/)
  })

  it("defines every capability icon exactly once", () => {
    const iconIds = capabilities.flatMap(capability =>
      capability.icons.map(icon => icon.id),
    )

    expect(capabilities.map(capability => capability.id)).toEqual([
      "product",
      "services",
      "infrastructure",
      "data",
    ])
    expect(new Set(iconIds).size).toBe(iconIds.length)
    expect(iconIds).toHaveLength(8)
  })

  it("provides complete case studies for every selected project", () => {
    for (const project of selectedProjects) {
      expect(project.caseStudy).toBeDefined()
      expect(project.caseStudy.decisions).toHaveLength(3)
      expect(project.caseStudy.constraints.length).toBeGreaterThanOrEqual(3)
      expect(project.caseStudy.capabilities.length).toBeGreaterThanOrEqual(3)
      expect(project.caseStudy.quality.length).toBeGreaterThanOrEqual(3)
      expect(project.caseStudy.outcome).toBeTruthy()
      expect(project.caseStudy.lesson).toBeTruthy()
    }
  })
})
