import React, { Suspense, useRef, useState } from "react"
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
      <mesh position={[0, 0, -0.012]}>
        <ringGeometry args={[2.42, 2.68, segments]} />
        <meshBasicMaterial
          color="#8ad9cb"
          depthWrite={false}
          opacity={0.78}
          side={THREE.DoubleSide}
          toneMapped={false}
          transparent
        />
      </mesh>
      <mesh>
        <ringGeometry args={[2.79, 2.91, segments]} />
        <meshBasicMaterial
          color="#5dcab7"
          depthWrite={false}
          opacity={0.62}
          side={THREE.DoubleSide}
          toneMapped={false}
          transparent
        />
      </mesh>
      <mesh position={[0, 0, 0.012]}>
        <ringGeometry args={[3.02, 3.16, segments]} />
        <meshBasicMaterial
          color="#a2e0d5"
          depthWrite={false}
          opacity={0.68}
          side={THREE.DoubleSide}
          toneMapped={false}
          transparent
        />
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

const CameraRig = ({ active, pointerEngaged }) => {
  useFrame(({ camera, pointer }, delta) => {
    if (!active) return

    const pointerDepth = Math.abs(pointer.x) + Math.abs(pointer.y)
    camera.position.x = THREE.MathUtils.damp(
      camera.position.x,
      pointerEngaged ? pointer.x * 0.24 : 0,
      3.2,
      delta,
    )
    camera.position.y = THREE.MathUtils.damp(
      camera.position.y,
      pointerEngaged ? pointer.y * 0.16 : 0,
      3.2,
      delta,
    )
    camera.position.z = THREE.MathUtils.damp(
      camera.position.z,
      pointerEngaged ? 10.5 + pointerDepth * 0.06 : 10.5,
      3.2,
      delta,
    )
    camera.lookAt(0.35, 0.1, 0)
  })

  return null
}

const PlanetScene = ({ active, compact, pointerEngaged }) => {
  const sphereSegments = compact ? 24 : 40
  const ringSegments = compact ? 64 : 112

  return (
    <>
      <fog attach="fog" args={["#121921", 10, 18]} />
      <ambientLight intensity={0.5} />
      <hemisphereLight args={["#d8fff8", "#121921", 0.78]} />
      <spotLight
        color="#b8fff2"
        intensity={48}
        angle={0.55}
        penumbra={0.9}
        position={[-6, 7, 8]}
      />
      <pointLight color="#7debd8" intensity={7} position={[4, -2, 4]} />
      <pointLight color="#8980f5" intensity={8} position={[-5, 2, -1]} />
      <pointLight color="#d8fff8" intensity={5} position={[2, 3, 6]} />

      <Sparkles
        color="#c7d4f3"
        count={compact ? 18 : 42}
        opacity={0.28}
        position={[0, 0, -2.5]}
        scale={[14, 9, 4]}
        size={compact ? 0.7 : 0.9}
        speed={active ? 0.035 : 0}
      />
      <Sparkles
        color="#d4ddf8"
        count={compact ? 8 : 16}
        opacity={0.36}
        position={[0, 0, 1.5]}
        scale={[10, 6, 2]}
        size={compact ? 1.15 : 1.55}
        speed={active ? 0.09 : 0}
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
        size={1.8}
        speed={0.006}
        wobble={0.06}
      />
      <OrbitingPlanet
        active={active}
        color="#ff8798"
        emissiveIntensity={0.1}
        inclination={-0.58}
        metalness={0}
        orbitSpeed={-0.11}
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
          orbitSpeed={0.07}
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
          orbitSpeed={-0.045}
          phase={3.497188}
          radius={3.95}
          scale={[1.08, 1, 1]}
          segments={sphereSegments}
          size={0.52}
          speed={0.008}
          wobble={0.22}
        />
      </RingGroup>
      <CameraRig active={active} pointerEngaged={pointerEngaged} />
    </>
  )
}

const PlanetsComponent = () => {
  const [pointerEngaged, setPointerEngaged] = useState(false)
  const { containerRef, isActive, isCompact, reduceMotion } = useSceneActivity()
  const { createRenderer, webGLReady } = useWebGLRenderer({
    alpha: true,
    antialias: !isCompact,
    enabled: !reduceMotion,
    powerPreference: "high-performance",
  })
  const fallback = <SpaceFallback />

  return (
    <div
      className="planets"
      id="planets"
      onPointerEnter={() => setPointerEngaged(true)}
      onPointerLeave={() => setPointerEngaged(false)}
      ref={containerRef}
    >
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
              <PlanetScene
                active={isActive}
                compact={isCompact}
                pointerEngaged={pointerEngaged}
              />
            </Suspense>
          </Canvas>
        </WebGLBoundary>
      )}
    </div>
  )
}

export default PlanetsComponent
