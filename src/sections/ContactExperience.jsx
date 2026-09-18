import { Environment, OrbitControls } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import { Computer } from '../components/Computer'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive'

const ContactExperience = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' })

  // Contact sits at the bottom of the page. Previously this Canvas (a full
  // WebGL context + GLTF decode + shadow-mapped lights) mounted the instant
  // App rendered, competing with Hero's own Canvas for GPU/CPU time on
  // first load even though the person hadn't scrolled anywhere near it.
  // Mounting only once the section is close to the viewport defers that
  // cost until it's actually about to be seen.
  const wrapperRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '400px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const dpr = isMobile ? [1, 1.5] : [1, 2]

  return (
    <div ref={wrapperRef} className="w-full h-full">
      {inView && (
        <Canvas
          camera={{ position: [0, 3, 7], fov: 45 }}
          shadows={!isMobile}
          dpr={dpr}
          gl={{ antialias: !isMobile, powerPreference: 'high-performance' }}
        >
            <ambientLight intensity={0.5} color="#fff4e6" />
            <directionalLight
                position={[5 ,5, 3]}
                intensity={2.5}
                color="#ffd9b3"
            />

            <directionalLight
                position={[5, 9, 1]}
                intensity={2.5}
                color="#ffd9b3"
                castShadow={!isMobile}
            />

            <OrbitControls enableZoom={false}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <group scale={0.03} position={[0, -1.5, -2]} castShadow={!isMobile}>
                <Computer />
            </group>

            <group scale={[1,1,1]}>
                <mesh
                    receiveShadow={!isMobile}
                    position={[0, -1.5, 0]}
                    rotation={[-Math.PI/2, 0, 0]}>
                    <planeGeometry args={[30, 30]}/>
                <meshStandardMaterial color="#a46b2d" />
            </mesh>
            </group>
        </Canvas>
      )}
    </div>
  )
}

export default ContactExperience
