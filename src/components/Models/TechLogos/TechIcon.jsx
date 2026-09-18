import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Center, Environment } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

// Loads whatever .glb the constants entry points to and applies its own
// scale/rotation — same generic-loader pattern as SpaceScene.jsx, so any
// new tech icon just needs an entry in techStackIcons, no new component.
const Model = ({ model }) => {
  const { scene } = useGLTF(model.modelPath)
  const ref = useRef()

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.4
  })

  return (
    <Center>
      <group
        ref={ref}
        scale={model.scale}
        rotation={model.rotation}
      >
        <primitive object={scene} />
      </group>
    </Center>
  )
}

const TechIcon = ({ model }) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 4]} intensity={1.2} />
      <Suspense fallback={null}>
        <Environment preset="city" />
        <Model model={model} />
      </Suspense>
    </Canvas>
  )
}

export default TechIcon
