import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function BlackHole(props) {
  const { scene } = useGLTF(import.meta.env.BASE_URL + "models/gargantua_the_black_hole.glb")
  const ref = useRef()

  // slow, constant self-rotation — reads as "alive" without being distracting
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 1
  })

  return (
    <group ref={ref} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  )
}

useGLTF.preload(import.meta.env.BASE_URL + "models/gargantua_the_black_hole.glb")
