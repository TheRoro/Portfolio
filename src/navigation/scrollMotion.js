const REFERENCE_DURATION_MS = 1000
const MINIMUM_DURATION_MS = 250
const ADDITIONAL_DISTANCE_DURATION_MS = 350
const MAXIMUM_DURATION_MS = 2200

const calculateScrollDuration = (distance, referenceDistance) => {
  const travelDistance = Math.abs(Number(distance) || 0)
  const baselineDistance = Math.abs(Number(referenceDistance) || 0)

  if (travelDistance === 0) return 0
  if (baselineDistance === 0) return REFERENCE_DURATION_MS

  const distanceRatio = travelDistance / baselineDistance
  const duration =
    distanceRatio <= 1
      ? distanceRatio * REFERENCE_DURATION_MS
      : REFERENCE_DURATION_MS +
        (distanceRatio - 1) * ADDITIONAL_DISTANCE_DURATION_MS

  return Math.min(
    MAXIMUM_DURATION_MS,
    Math.max(MINIMUM_DURATION_MS, Math.round(duration)),
  )
}

const getReferenceDistance = () => {
  const fallbackDistance =
    typeof window === "undefined" ? 0 : window.innerHeight

  if (typeof document === "undefined") return fallbackDistance

  const home = document.getElementById("home")
  const experience = document.getElementById("experience")

  if (!home || !experience) return fallbackDistance

  const distance = Math.abs(
    experience.getBoundingClientRect().top - home.getBoundingClientRect().top,
  )

  return distance || fallbackDistance
}

const getScrollDuration = distance =>
  calculateScrollDuration(distance, getReferenceDistance())

const getScrollMotionProps = reduceMotion => ({
  smooth: !reduceMotion,
  duration: reduceMotion ? 0 : getScrollDuration,
})

export {
  ADDITIONAL_DISTANCE_DURATION_MS,
  calculateScrollDuration,
  getReferenceDistance,
  getScrollDuration,
  getScrollMotionProps,
  MAXIMUM_DURATION_MS,
  MINIMUM_DURATION_MS,
  REFERENCE_DURATION_MS,
}
