import { describe, expect, it } from "vitest"
import { allProjects } from "../../content/projects"
import { profile } from "../../content/profile"
import {
  HOME_SEO,
  SITE_URL,
  absoluteUrl,
  homeStructuredData,
  projectSeo,
  projectStructuredData,
  projectsStructuredData,
} from "./siteMetadata"

describe("site metadata", () => {
  it("builds canonical project metadata from structured content", () => {
    for (const project of allProjects) {
      const seo = projectSeo(project)
      const structuredData = projectStructuredData(project)

      expect(seo.path).toBe(`/${project.name}/`)
      expect(seo.imagePath).toBe(`/projects/optimized/${project.name}-og.jpg`)
      expect(structuredData.url).toBe(absoluteUrl(seo.path))
      expect(structuredData.codeRepository).toBe(project.repoUrl)
      expect(structuredData.sameAs).toEqual([project.repoUrl, project.webUrl])
    }
  })

  it("keeps home identity and project collection schema aligned", () => {
    const person = homeStructuredData["@graph"].find(
      entry => entry["@type"] === "Person",
    )
    const collection = projectsStructuredData(allProjects)

    expect(SITE_URL).toBe(profile.siteUrl)
    expect(HOME_SEO.title).toContain(profile.name)
    expect(person.name).toBe(profile.name)
    expect(person.jobTitle).toBe(profile.role)
    expect(collection.mainEntity.itemListElement).toHaveLength(
      allProjects.length,
    )
    expect(
      collection.mainEntity.itemListElement.map(item => item.position),
    ).toEqual(allProjects.map((_, index) => index + 1))
  })
})
