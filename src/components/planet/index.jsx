import React, { useMemo, useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshWobbleMaterial } from "@react-three/drei"
import { useSpring, a } from "@react-spring/three"
import * as THREE from "three"

const atmosphereVertexShader = `
  varying vec3 viewNormal;
  varying vec3 viewDirection;

  void main() {
    vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
    viewNormal = normalize(normalMatrix * normal);
    viewDirection = -viewPosition.xyz;
    gl_Position = projectionMatrix * viewPosition;
  }
`

const atmosphereFragmentShader = `
  uniform vec3 glowColor;
  uniform float glowStrength;
  varying vec3 viewNormal;
  varying vec3 viewDirection;

  void main() {
    float rim = pow(
      1.0 - max(dot(normalize(viewNormal), normalize(viewDirection)), 0.0),
      2.6
    );
    gl_FragColor = vec4(glowColor, rim * glowStrength);
  }
`

const Planet = ({
  size,
  position,
  color,
  speed,
  scale,
  active = true,
  segments = 40,
  wobble = 0.35,
  emissiveIntensity = 0,
  metalness = 0.08,
  roughness = 0.72,
}) => {
  const meshRef = useRef(null)
  const materialRef = useRef(null)
  const atmosphereRef = useRef(null)
  const [hovered, setHovered] = useState(false)
  const atmosphereUniforms = useMemo(
    () => ({
      glowColor: { value: new THREE.Color(color) },
      glowStrength: { value: 0.18 },
    }),
    [color],
  )

  useFrame((_, delta) => {
    if (active && meshRef.current) {
      meshRef.current.rotation.y += speed * delta * 60
    }

    if (materialRef.current) {
      materialRef.current.factor = THREE.MathUtils.damp(
        materialRef.current.factor,
        active ? wobble * (hovered ? 0.52 : 1) : 0,
        7,
        delta,
      )
      materialRef.current.emissiveIntensity = THREE.MathUtils.damp(
        materialRef.current.emissiveIntensity,
        emissiveIntensity + (hovered ? 0.12 : 0),
        7,
        delta,
      )
    }

    if (atmosphereRef.current) {
      atmosphereRef.current.uniforms.glowStrength.value = THREE.MathUtils.damp(
        atmosphereRef.current.uniforms.glowStrength.value,
        hovered ? 0.3 : 0.18,
        7,
        delta,
      )
    }
  })

  const props = useSpring({
    scale: scale.map(value => value * (hovered ? 1.035 : 1)),
    config: { mass: 1, tension: 180, friction: 18 },
    immediate: !active,
  })

  return (
    <a.group
      onPointerEnter={event => {
        event.stopPropagation()
        if (active) setHovered(true)
      }}
      onPointerLeave={() => setHovered(false)}
      position={position}
      scale={props.scale}
    >
      <mesh ref={meshRef}>
        <sphereGeometry args={[size, segments, segments]} />
        <MeshWobbleMaterial
          ref={materialRef}
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          roughness={roughness}
          metalness={metalness}
          speed={active ? speed * 18 : 0}
          factor={active ? wobble : 0}
        />
      </mesh>
      <mesh scale={1.08}>
        <sphereGeometry args={[size, segments, segments]} />
        <shaderMaterial
          ref={atmosphereRef}
          uniforms={atmosphereUniforms}
          vertexShader={atmosphereVertexShader}
          fragmentShader={atmosphereFragmentShader}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          toneMapped={false}
          transparent
        />
      </mesh>
    </a.group>
  )
}

export default Planet
