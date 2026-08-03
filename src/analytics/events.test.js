import { beforeEach, describe, expect, it, vi } from "vitest"
import { captureAnalyticsEvent } from "./client"
import {
  trackProfileLinkOpened,
  trackProjectDetailsOpened,
  trackProjectProductOpened,
} from "./events"

vi.mock("./client", () => ({
  captureAnalyticsEvent: vi.fn(),
}))

describe("portfolio analytics events", () => {
  beforeEach(() => {
    captureAnalyticsEvent.mockReset()
  })

  it("records project engagement using stable identifiers", () => {
    trackProjectDetailsOpened("drawly", "featured-projects")
    trackProjectProductOpened("drawly", "project-hero")

    expect(captureAnalyticsEvent).toHaveBeenNthCalledWith(
      1,
      "project_details_opened",
      {
        project: "drawly",
        source: "featured-projects",
      },
    )
    expect(captureAnalyticsEvent).toHaveBeenNthCalledWith(
      2,
      "project_product_opened",
      {
        project: "drawly",
        source: "project-hero",
      },
    )
  })

  it("uses distinct conversion events for resume and contact actions", () => {
    trackProfileLinkOpened("resume", "hero")
    trackProfileLinkOpened("email", "contact")
    trackProfileLinkOpened("linkedin", "contact")

    expect(captureAnalyticsEvent).toHaveBeenNthCalledWith(1, "resume_opened", {
      channel: "resume",
      source: "hero",
    })
    expect(captureAnalyticsEvent).toHaveBeenNthCalledWith(2, "contact_opened", {
      channel: "email",
      source: "contact",
    })
    expect(captureAnalyticsEvent).toHaveBeenNthCalledWith(3, "profile_opened", {
      channel: "linkedin",
      source: "contact",
    })
  })
})
