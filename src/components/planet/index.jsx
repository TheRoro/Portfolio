import React, { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshWobbleMaterial } from "@react-three/drei"
import { useSpring, a } from "@react-spring/three"

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
  const ref = useRef(null)
  useFrame((_, delta) => {
    if (active && ref.current) {
      ref.current.rotation.y += speed * delta * 60
    }
  })

  const [expand, setExpand] = useState(false)

  const props = useSpring({
    scale: !expand ? scale : [1, 1, 1],
    immediate: !active,
  })

  return (
    <a.mesh
      onPointerEnter={() => active && setExpand(true)}
      onPointerOut={() => setExpand(false)}
      scale={props.scale}
      ref={ref}
      position={position}
      castShadow
      receiveShadow
    >
      <sphereGeometry args={[size, segments, segments]} />
      <MeshWobbleMaterial
        color={color}
        emissive={color}
        emissiveIntensity={emissiveIntensity}
        roughness={roughness}
        metalness={metalness}
        speed={active ? speed * 18 : 0}
        factor={active ? wobble : 0}
      />
    </a.mesh>
  )
}

export default Planet
