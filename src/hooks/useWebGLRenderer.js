import { useCallback, useEffect, useRef, useState } from "react"
import * as THREE from "three"

const hasWebGLSupport = () => {
  try {
    const canvas = document.createElement("canvas")
    const context =
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl"))

    context?.getExtension("WEBGL_lose_context")?.loseContext()
    return Boolean(context)
  } catch {
    return false
  }
}

const useWebGLRenderer = ({ alpha, antialias, enabled, powerPreference }) => {
  const cleanupRef = useRef(null)
  const [status, setStatus] = useState({ checked: false, failed: false })

  useEffect(() => {
    if (!enabled) return
    setStatus({ checked: true, failed: !hasWebGLSupport() })
  }, [enabled])

  useEffect(
    () => () => {
      cleanupRef.current?.()
    },
    [],
  )

  const createRenderer = useCallback(
    canvasProps => {
      try {
        const renderer = new THREE.WebGLRenderer({
          ...canvasProps,
          alpha,
          antialias,
          powerPreference,
        })
        const handleContextLost = event => {
          event.preventDefault()
          setStatus({ checked: true, failed: true })
        }

        renderer.domElement.addEventListener(
          "webglcontextlost",
          handleContextLost,
        )
        cleanupRef.current?.()
        cleanupRef.current = () =>
          renderer.domElement.removeEventListener(
            "webglcontextlost",
            handleContextLost,
          )

        return renderer
      } catch (error) {
        setStatus({ checked: true, failed: true })
        if (import.meta.env.DEV) {
          console.error("WebGL renderer initialization failed", error)
        }

        // R3F does not catch a rejected async renderer configuration. Keep its
        // setup pending while React replaces the canvas with the static fallback.
        return new Promise(() => {})
      }
    },
    [alpha, antialias, powerPreference],
  )

  return {
    createRenderer,
    webGLReady: status.checked && !status.failed,
  }
}

export default useWebGLRenderer
