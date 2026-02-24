import React, { useRef, useState, Suspense, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { MeshWobbleMaterial } from "@react-three/drei"
import { useSpring, a } from "@react-spring/three"
import "./styles.scss"

const Planet = ({ size, position, color, speed, name, scale }) => {
  const ref = useRef(null)
  useFrame((state, delta) => (ref.current.rotation.y += speed))

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

const Ring = ({ args, position, color, name }) => {
  const ref = useRef(null)
  useEffect(() => {
    ref.current.rotation.x = 90.04
    ref.current.rotation.y = 9.79
  }, [])
  return (
    <mesh ref={ref} position={position}>
      <ringBufferGeometry attach="geometry" args={args} />
      <meshStandardMaterial attach="material" color={color} roughness={0} />
    </mesh>
  )
}

const RingGroup = () => {
  const [ringPosition] = useState([-0.2, 0.5, 1])
  const ref = useRef(null)

  return (
    <a.mesh ref={ref}>
      <Ring
        position={ringPosition}
        color="#64bdad"
        args={[2.2, 2.35, 100]}
        name="inner"
      />
      <Ring
        position={ringPosition}
        color="#43887B"
        args={[2.4, 2.42, 100]}
        name="middle"
      />
      <Ring
        position={ringPosition}
        color="#7eccbe"
        args={[2.45, 2.52, 80, 1]}
        name="outter"
      />
    </a.mesh>
  )
}

const PlanetsComponent = () => {
  return (
    <>
      <div className="planets" id="planets">
        <Canvas>
          <Suspense fallback={null}>
            <spotLight
              intensity={0.7}
              angle={0.9}
              penumbra={1}
              position={[-15, 6, 4]}
            />
            <Planet
              position={[-4.5, -0.5, -3]}
              color="#8980F5"
              size={1.1}
              speed={0.01}
              name="purple"
              scale={[1.1, 1, 1]}
            />
            <Planet
              position={[0, 0, 1]}
              color="#02ccaa"
              size={1.5}
              speed={0.01}
              name="teal"
              scale={[1.05, 1, 1]}
            />
            <Planet
              position={[0.2, -0.35, 4]}
              color="#FF7979"
              size={0.13}
              speed={0.01}
              name="red"
              scale={[1.1, 1, 1]}
            />
            <ambientLight intensity={0.5} />
            <RingGroup />
            {/* <OrbitControls /> */}
          </Suspense>
        </Canvas>
      </div>
    </>
  )
}

export default PlanetsComponent
