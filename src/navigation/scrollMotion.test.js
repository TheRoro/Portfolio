import { describe, expect, it } from "vitest"
import {
  ADDITIONAL_DISTANCE_DURATION_MS,
  calculateScrollDuration,
  getScrollMotionProps,
  MAXIMUM_DURATION_MS,
  MINIMUM_DURATION_MS,
  REFERENCE_DURATION_MS,
} from "./scrollMotion"

describe("calculateScrollDuration", () => {
  const referenceDistance = 900

  it("preserves the one second reference journey", () => {
    expect(calculateScrollDuration(referenceDistance, referenceDistance)).toBe(
      REFERENCE_DURATION_MS,
    )
  })

  it("compresses additional distance after the reference journey", () => {
    expect(
      calculateScrollDuration(referenceDistance * 3, referenceDistance),
    ).toBe(REFERENCE_DURATION_MS + ADDITIONAL_DISTANCE_DURATION_MS * 2)
  })

  it("treats upward and downward journeys equally", () => {
    expect(calculateScrollDuration(-1800, referenceDistance)).toBe(1350)
    expect(calculateScrollDuration(1800, referenceDistance)).toBe(1350)
  })

  it("keeps nearby journeys smooth and skips zero distance", () => {
    expect(calculateScrollDuration(45, referenceDistance)).toBe(
      MINIMUM_DURATION_MS,
    )
    expect(calculateScrollDuration(0, referenceDistance)).toBe(0)
  })

  it("caps very long journeys", () => {
    expect(calculateScrollDuration(18000, referenceDistance)).toBe(
      MAXIMUM_DURATION_MS,
    )
  })

  it("falls back to the previous duration without a reference distance", () => {
    expect(calculateScrollDuration(1800, 0)).toBe(REFERENCE_DURATION_MS)
  })

  it("configures animated and reduced motion links", () => {
    expect(getScrollMotionProps(false)).toMatchObject({ smooth: true })
    expect(getScrollMotionProps(true)).toEqual({
      smooth: false,
      duration: 0,
    })
  })
})
