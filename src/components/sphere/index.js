import React, { useRef, useState, Suspense } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshWobbleMaterial } from "@react-three/drei"
import { useSpring, a } from "@react-spring/three"
import "./styles.scss"

const Planet = ({ size, position, color, speed, name, scale }) => {
  const ref = useRef(null)
  // Multiply by delta (and a 60fps baseline) so rotation speed is the same
  // regardless of the display's refresh rate.
  useFrame((state, delta) => (ref.current.rotation.y += speed * delta * 60))

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

const SphereComponent = () => {
  return (
    <>
      <div className="sphere" id="sphere">
        <Canvas camera={{ zoom: 11, position: [0, 0, 25] }}>
          <Suspense fallback={null}>
            <spotLight
              intensity={0.7}
              angle={0.9}
              penumbra={1}
              position={[-15, 6, 4]}
            />
            <Planet
              position={[0, 0, 1]}
              color="#02ccaa"
              size={1.5}
              speed={0.04}
              name="teal"
              scale={[1.05, 1, 1]}
            />
            <ambientLight intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default SphereComponent
