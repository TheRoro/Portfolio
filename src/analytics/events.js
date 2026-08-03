import { captureAnalyticsEvent } from "./client"

const analyticsSource = {
  contact: "contact",
  featuredProjects: "featured-projects",
  floatingLinks: "floating-links",
  hero: "hero",
  primaryNavigation: "primary-navigation",
  projectHero: "project-hero",
  projectPagination: "project-pagination",
  projectsGrid: "projects-grid",
}

const trackPageView = path =>
  captureAnalyticsEvent("$pageview", {
    $current_url: `${window.location.origin}${path}`,
    $pathname: path,
  })

const trackNavigationClick = (destination, source) =>
  captureAnalyticsEvent("navigation_clicked", { destination, source })

const trackProjectDetailsOpened = (project, source, direction) =>
  captureAnalyticsEvent("project_details_opened", {
    project,
    source,
    ...(direction ? { direction } : {}),
  })

const trackProjectProductOpened = (project, source) =>
  captureAnalyticsEvent("project_product_opened", { project, source })

const trackProjectRepositoryOpened = (project, source) =>
  captureAnalyticsEvent("project_repository_opened", { project, source })

const trackProfileLinkOpened = (channel, source) => {
  const event =
    channel === "resume"
      ? "resume_opened"
      : channel === "email"
        ? "contact_opened"
        : "profile_opened"

  return captureAnalyticsEvent(event, { channel, source })
}

export {
  analyticsSource,
  trackNavigationClick,
  trackPageView,
  trackProfileLinkOpened,
  trackProjectDetailsOpened,
  trackProjectProductOpened,
  trackProjectRepositoryOpened,
}
