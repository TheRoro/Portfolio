const POSTHOG_HOST = "https://us.i.posthog.com"
const POSTHOG_UI_HOST = "https://us.posthog.com"
const CAMPAIGN_PROPERTIES = [
  "_kx",
  "dclid",
  "epik",
  "fbclid",
  "gad_source",
  "gbraid",
  "gclid",
  "gclsrc",
  "igshid",
  "irclid",
  "li_fat_id",
  "mc_cid",
  "msclkid",
  "qclid",
  "rdt_cid",
  "sccid",
  "ttclid",
  "twclid",
  "utm_campaign",
  "utm_content",
  "utm_medium",
  "utm_source",
  "utm_term",
  "wbraid",
]
const URL_PROPERTIES = [
  "$current_url",
  "$initial_current_url",
  "$initial_referrer",
  "$referrer",
  "$session_entry_url",
]

let analyticsClientPromise

const sanitizeUrl = value => {
  if (typeof value !== "string" || !value) return value

  try {
    const url = new URL(value, window.location.origin)

    return `${url.origin}${url.pathname}`
  } catch {
    return undefined
  }
}

const sanitizeCaptureResult = captureResult => {
  if (!captureResult) return null

  const properties = { ...captureResult.properties }

  CAMPAIGN_PROPERTIES.forEach(property => {
    delete properties[property]
  })

  URL_PROPERTIES.forEach(property => {
    if (!(property in properties)) return

    const sanitizedValue = sanitizeUrl(properties[property])

    if (sanitizedValue) {
      properties[property] = sanitizedValue
    } else {
      delete properties[property]
    }
  })

  return { ...captureResult, properties }
}

const analyticsConfigured = () =>
  import.meta.env.PROD && Boolean(import.meta.env.VITE_POSTHOG_KEY)

const createAnalyticsClient = async () => {
  const { default: posthog } =
    await import("posthog-js/dist/module.slim.no-external")

  posthog.init(import.meta.env.VITE_POSTHOG_KEY, {
    api_host: POSTHOG_HOST,
    ui_host: POSTHOG_UI_HOST,
    defaults: "2026-06-25",
    advanced_disable_flags: true,
    autocapture: false,
    before_send: sanitizeCaptureResult,
    capture_dead_clicks: false,
    capture_exceptions: false,
    capture_heatmaps: false,
    capture_pageleave: false,
    capture_pageview: false,
    capture_performance: false,
    disable_external_dependency_loading: true,
    disable_session_recording: true,
    disable_surveys: true,
    disable_web_experiments: true,
    disableDeviceModel: true,
    persistence: "memory",
    person_profiles: "never",
    respect_dnt: true,
    save_campaign_params: false,
  })

  return posthog
}

const getAnalyticsClient = () => {
  if (!analyticsConfigured()) return Promise.resolve(null)

  analyticsClientPromise ??= createAnalyticsClient()

  return analyticsClientPromise
}

const captureAnalyticsEvent = async (event, properties = {}) => {
  const client = await getAnalyticsClient()

  client?.capture(event, properties)
}

export {
  POSTHOG_HOST,
  captureAnalyticsEvent,
  sanitizeCaptureResult,
  sanitizeUrl,
}
