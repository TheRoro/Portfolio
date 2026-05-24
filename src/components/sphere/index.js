import React, { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import Planet from "../planet"
import "./styles.scss"

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
