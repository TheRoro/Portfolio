import React, { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { MeshWobbleMaterial } from "@react-three/drei"
import { useSpring, a } from "@react-spring/three"

const Planet = ({ size, position, color, speed, scale }) => {
  const ref = useRef(null)
  // Multiply by delta (and a 60fps baseline) so rotation speed is the same
  // regardless of the display's refresh rate.
  useFrame((_, delta) => (ref.current.rotation.y += speed * delta * 60))

  const [expand, setExpand] = useState(false)

  const props = useSpring({
    scale: !expand ? scale : [1, 1, 1],
  })

  return (
    <a.mesh
      onPointerEnter={() => setExpand(true)}
      onPointerOut={() => setExpand(false)}
      scale={props.scale}
      ref={ref}
      position={position}
      castShadow
      receiveShadow
    >
      <sphereBufferGeometry attach="geometry" args={[size, 50, 50]} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        roughness={1}
        speed={speed}
        factor={0.5}
      />
    </a.mesh>
  )
}

export default Planet
