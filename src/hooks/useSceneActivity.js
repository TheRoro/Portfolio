import { useEffect, useRef, useState } from "react"
import usePrefersReducedMotion from "./usePrefersReducedMotion"

const useSceneActivity = () => {
  const containerRef = useRef(null)
  const reduceMotion = usePrefersReducedMotion()
  const [isVisible, setIsVisible] = useState(true)
  const [isOnScreen, setIsOnScreen] = useState(true)
  const [isCompact, setIsCompact] = useState(false)

  useEffect(() => {
    const updateVisibility = () => setIsVisible(!document.hidden)
    document.addEventListener("visibilitychange", updateVisibility)
    updateVisibility()

    return () =>
      document.removeEventListener("visibilitychange", updateVisibility)
  }, [])

  useEffect(() => {
    const element = containerRef.current
    if (!element || !("IntersectionObserver" in window)) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      { rootMargin: "100px", threshold: 0.01 },
    )
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const query = window.matchMedia("(max-width: 700px)")
    const updateCompactMode = event => setIsCompact(event.matches)

    setIsCompact(query.matches)
    query.addEventListener("change", updateCompactMode)

    return () => query.removeEventListener("change", updateCompactMode)
  }, [])

  return {
    containerRef,
    isActive: isVisible && isOnScreen && !reduceMotion,
    isCompact,
    reduceMotion,
  }
}

export default useSceneActivity
