import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Planet from "../planet"
import SpaceFallback from "../spaceFallback"
import WebGLBoundary from "../webglBoundary"
import useSceneActivity from "../../hooks/useSceneActivity"
import useWebGLRenderer from "../../hooks/useWebGLRenderer"
import "./styles.scss"

const SphereComponent = () => {
  const { containerRef, isActive, reduceMotion } = useSceneActivity()
  const { createRenderer, webGLReady } = useWebGLRenderer({
    alpha: true,
    antialias: false,
    enabled: !reduceMotion,
    powerPreference: "low-power",
  })
  const fallback = <SpaceFallback compact />

  return (
    <div className="sphere" id="sphere" ref={containerRef}>
      {reduceMotion || !webGLReady ? (
        fallback
      ) : (
        <WebGLBoundary fallback={fallback}>
          <Canvas
            camera={{ fov: 36, position: [0, 0, 8] }}
            dpr={[1, 1.25]}
            fallback={fallback}
            frameloop={isActive ? "always" : "demand"}
            gl={createRenderer}
          >
            <Suspense fallback={null}>
              <ambientLight intensity={0.55} />
              <spotLight
                color="#d4ddf8"
                intensity={24}
                angle={0.65}
                penumbra={1}
                position={[-4, 5, 6]}
              />
              <Planet
                active={isActive}
                color="#12cbae"
                emissiveIntensity={0.22}
                metalness={0}
                position={[0, 0, 0]}
                roughness={0.9}
                scale={[1.04, 1, 1]}
                segments={24}
                size={1.45}
                speed={0.018}
                wobble={0.08}
              />
            </Suspense>
          </Canvas>
        </WebGLBoundary>
      )}
    </div>
  )
}

export default SphereComponent
