import React, { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Sparkles } from "@react-three/drei"
import * as THREE from "three"
import Planet from "../planet"
import SpaceFallback from "../spaceFallback"
import WebGLBoundary from "../webglBoundary"
import useSceneActivity from "../../hooks/useSceneActivity"
import useWebGLRenderer from "../../hooks/useWebGLRenderer"
import "./styles.scss"

const SCENE_CENTER = [0.65, 0.2, 0]
const YELLOW_ORBIT_ROTATION = [-0.91, -0.1925, -0.154]

const RingGroup = ({ children, segments }) => {
  return (
    <group position={SCENE_CENTER} rotation={[-1.18, -0.35, -0.28]}>
      <mesh>
        <ringGeometry args={[2.42, 2.68, segments]} />
        <meshBasicMaterial color="#8ad9cb" side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <ringGeometry args={[2.79, 2.91, segments]} />
        <meshBasicMaterial color="#5dcab7" side={THREE.DoubleSide} />
      </mesh>
      <mesh>
        <ringGeometry args={[3.02, 3.16, segments]} />
        <meshBasicMaterial color="#a2e0d5" side={THREE.DoubleSide} />
      </mesh>
      {children}
    </group>
  )
}

const CoplanarOrbitingPlanet = ({
  active,
  orbitSpeed,
  phase,
  radius,
  ...planetProps
}) => {
  const ref = useRef(null)

  useFrame((_, delta) => {
    if (active && ref.current) {
      ref.current.rotation.z += orbitSpeed * delta
    }
  })

  return (
    <group ref={ref} rotation={[0, 0, phase]}>
      <Planet {...planetProps} active={active} position={[radius, 0, 0]} />
    </group>
  )
}

const EllipticalOrbitingPlanet = ({
  active,
  orbitScaleY,
  orbitSpeed,
  phase,
  radius,
  ...planetProps
}) => {
  const ref = useRef(null)
  const angle = useRef(phase)

  useFrame((_, delta) => {
    if (active && ref.current) {
      angle.current += orbitSpeed * delta
      ref.current.position.set(
        Math.cos(angle.current) * radius,
        Math.sin(angle.current) * radius * orbitScaleY,
        0,
      )
    }
  })

  return (
    <group
      ref={ref}
      position={[
        Math.cos(phase) * radius,
        Math.sin(phase) * radius * orbitScaleY,
        0,
      ]}
    >
      <Planet {...planetProps} active={active} position={[0, 0, 0]} />
    </group>
  )
}

const OrbitingPlanet = ({
  active,
  inclination,
  orbitSpeed,
  phase,
  radius,
  ...planetProps
}) => {
  const ref = useRef(null)

  useFrame((_, delta) => {
    if (active && ref.current) {
      ref.current.rotation.z += orbitSpeed * delta
    }
  })

  return (
    <group ref={ref} position={SCENE_CENTER} rotation={[inclination, 0, phase]}>
      <Planet {...planetProps} active={active} position={[radius, 0, 0]} />
    </group>
  )
}

const CameraRig = ({ active }) => {
  useFrame(({ camera, pointer }) => {
    if (!active) return

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      pointer.x * 0.35,
      0.025,
    )
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      pointer.y * 0.22,
      0.025,
    )
    camera.lookAt(0, 0, 0)
  })

  return null
}

const PlanetScene = ({ active, compact }) => {
  const sphereSegments = compact ? 24 : 40
  const ringSegments = compact ? 64 : 112

  return (
    <>
      <color attach="background" args={["#121921"]} />
      <ambientLight intensity={0.58} />
      <hemisphereLight args={["#c8fff4", "#121921", 0.75]} />
      <spotLight
        color="#b8fff2"
        intensity={42}
        angle={0.55}
        penumbra={0.9}
        position={[-6, 7, 8]}
      />
      <pointLight color="#7debd8" intensity={8} position={[4, -2, 4]} />
      <pointLight color="#8980f5" intensity={9} position={[-5, 2, -1]} />

      <Sparkles
        color="#d4ddf8"
        count={compact ? 24 : 52}
        opacity={0.42}
        scale={[11, 7, 5]}
        size={compact ? 1.2 : 1.7}
        speed={active ? 0.12 : 0}
      />

      <Planet
        active={active}
        color="#12cbae"
        emissiveIntensity={0.22}
        metalness={0}
        position={SCENE_CENTER}
        roughness={0.9}
        scale={[1.06, 1, 1]}
        segments={sphereSegments}
        size={1.9}
        speed={0.006}
        wobble={0.06}
      />
      <OrbitingPlanet
        active={active}
        color="#ff8798"
        emissiveIntensity={0.1}
        inclination={-0.58}
        metalness={0}
        orbitSpeed={-0.16}
        phase={5.72}
        radius={3.68}
        roughness={0.88}
        scale={[1.06, 1, 1]}
        segments={sphereSegments}
        size={0.34}
        speed={0.014}
        wobble={0.06}
      />
      <group position={SCENE_CENTER} rotation={YELLOW_ORBIT_ROTATION}>
        <EllipticalOrbitingPlanet
          active={active}
          color="#e8bc4f"
          emissiveIntensity={0.18}
          orbitScaleY={0.75}
          orbitSpeed={0.16}
          phase={1.30327}
          radius={4.85}
          scale={[1.04, 1, 1]}
          segments={sphereSegments}
          size={0.41}
          speed={0.01}
          wobble={0.16}
        />
      </group>

      <RingGroup segments={ringSegments}>
        <CoplanarOrbitingPlanet
          active={active}
          color="#9f76e6"
          emissiveIntensity={0.22}
          orbitSpeed={-0.16}
          phase={3.497188}
          radius={3.95}
          scale={[1.08, 1, 1]}
          segments={sphereSegments}
          size={0.52}
          speed={0.008}
          wobble={0.22}
        />
      </RingGroup>
      <CameraRig active={active} />
    </>
  )
}

const PlanetsComponent = () => {
  const { containerRef, isActive, isCompact, reduceMotion } = useSceneActivity()
  const { createRenderer, webGLReady } = useWebGLRenderer({
    alpha: false,
    antialias: !isCompact,
    enabled: !reduceMotion,
    powerPreference: "high-performance",
  })
  const fallback = <SpaceFallback />

  return (
    <div className="planets" id="planets" ref={containerRef}>
      {reduceMotion || !webGLReady ? (
        fallback
      ) : (
        <WebGLBoundary fallback={fallback}>
          <Canvas
            camera={{ fov: 44, position: [0, 0, 10.5] }}
            dpr={isCompact ? [1, 1.15] : [1, 1.5]}
            fallback={fallback}
            frameloop={isActive ? "always" : "demand"}
            gl={createRenderer}
          >
            <Suspense fallback={null}>
              <PlanetScene active={isActive} compact={isCompact} />
            </Suspense>
          </Canvas>
        </WebGLBoundary>
      )}
    </div>
  )
}

export default PlanetsComponent
