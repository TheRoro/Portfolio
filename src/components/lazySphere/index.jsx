import React, { lazy, Suspense } from "react"
import SpaceFallback from "../spaceFallback"
import WebGLBoundary from "../webglBoundary"

const Sphere = lazy(() => import("../sphere"))

const LazySphere = () => {
  return (
    <WebGLBoundary
      fallback={
        <div className="sphere">
          <SpaceFallback compact />
        </div>
      }
    >
      <Suspense
        fallback={
          <div className="sphere">
            <SpaceFallback compact />
          </div>
        }
      >
        <Sphere />
      </Suspense>
    </WebGLBoundary>
  )
}

export default LazySphere
