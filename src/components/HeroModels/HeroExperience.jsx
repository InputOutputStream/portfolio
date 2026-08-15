import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, SelectiveBloom, Selection } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useMediaQuery } from 'react-responsive';
import { useMemo, Suspense } from 'react';
import { Room } from './Room'
import HeroLights from './HeroLights';
import SpaceScene from './SpaceScene';
import StarField from './StarField';

// Day: 6h30–18h30 local time → Room. Otherwise → SpaceScene (Gargantua + planets).
const isDaytime = () => {
  const now = new Date();
  const minutes = now.getHours() * 60 + now.getMinutes();
  return minutes >= 6 * 60 + 30 && minutes < 18 * 60 + 30;
};

const HeroExperience = () => {
    const isTablet = useMediaQuery({ query:'(max-width: 1024px)'});
    const isMobile = useMediaQuery({ query:'(max-width: 768px)'});

    // computed once per mount — a hard refresh at the day/night boundary
    // will pick up the new scene, no need for a live clock here
    const daytime = useMemo(() => isDaytime(), []);

  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI/5}
            maxPolarAngle={Math.PI/2}
        />

        <Suspense fallback={null}>
        {daytime ? (
          // Selection provides context that <Select enabled> (in Room.jsx)
          // registers into, and SelectiveBloom reads from — no ref required,
          // so there's no race with the GLTF mesh mounting asynchronously.
          <Selection>
            <HeroLights />
            <group
                    scale={isMobile? 0.7 : 1}
                    position={[0, -3.5, 0]}
                    rotation={[0, -Math.PI/4, 0]}
                >
                   <Room />
            </group>
            <EffectComposer autoClear={false}>
                <SelectiveBloom
                    intensity={2} // Strength of the bloom
                    luminanceThreshold={0.2} // Minimum luminance needed
                    luminanceSmoothing={0.9} // Smooth transition
                    blendFunction={BlendFunction.ADD} // How it blends
                />
            </EffectComposer>
            <StarField count={isMobile ? 120 : 250} color="#3DB8E8" radius={10} />
          </Selection>
        ) : (
          <>
            <SpaceScene />
            <StarField count={isMobile ? 150 : 350} color="#5FB875" radius={16} />
          </>
        )}
        </Suspense>
    </Canvas>
    )
}

export default HeroExperience