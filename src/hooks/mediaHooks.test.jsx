import { act, renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import useMediaQuery from "./useMediaQuery"
import usePrefersReducedMotion from "./usePrefersReducedMotion"

const installMatchMedia = initialMatches => {
  const listeners = new Set()
  const mediaQuery = {
    matches: initialMatches,
    media: "",
    onchange: null,
    addEventListener: vi.fn((_, listener) => listeners.add(listener)),
    removeEventListener: vi.fn((_, listener) => listeners.delete(listener)),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }

  window.matchMedia = vi.fn(query => {
    mediaQuery.media = query
    return mediaQuery
  })

  return {
    mediaQuery,
    setMatches(matches) {
      mediaQuery.matches = matches
      for (const listener of listeners) {
        listener({ matches, media: mediaQuery.media })
      }
    },
  }
}

describe("responsive media hooks", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("updates a media-query subscription when the browser match changes", () => {
    const controller = installMatchMedia(false)
    const { result } = renderHook(() => useMediaQuery("(max-width: 650px)"))

    expect(result.current).toBe(false)
    expect(window.matchMedia).toHaveBeenCalledWith("(max-width: 650px)")

    act(() => controller.setMatches(true))

    expect(result.current).toBe(true)
  })

  it("reports the reduced-motion preference", () => {
    const controller = installMatchMedia(true)
    const { result } = renderHook(() => usePrefersReducedMotion())

    expect(result.current).toBe(true)
    expect(controller.mediaQuery.media).toBe("(prefers-reduced-motion: reduce)")
  })
})
