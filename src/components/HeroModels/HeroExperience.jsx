import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, SelectiveBloom, Selection } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import { useMediaQuery } from 'react-responsive';
import { useMemo, useState, useEffect, useRef, Suspense } from 'react';
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

    // The Canvas (WebGL context + GLTF decode + shader compile) is the
    // single biggest chunk of Hero's JS/GPU cost, and it used to mount
    // synchronously with the rest of the page. Deferring it one frame lets
    // the text, badge and CTA button paint and become interactive first —
    // the 3D scene fades in a beat later instead of blocking everything.
    const [ready, setReady] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const id = requestAnimationFrame(() => setReady(true));
        return () => cancelAnimationFrame(id);
    }, []);

    // Cap device pixel ratio — an uncapped `window.devicePixelRatio` on a
    // 3x mobile screen asks the GPU to shade 9x the fragments of a 1x
    // screen for identical visible detail. 1.5 is a good ceiling for
    // mobile/tablet; keep true resolution on desktop where GPUs are beefier.
    const dpr = isMobile ? [1, 1.5] : isTablet ? [1, 1.75] : [1, 2];

  return (
    <div ref={wrapperRef} className="w-full h-full">
      {ready && (
        <Canvas
            camera={{ position: [0, 0, 15], fov: 45 }}
            dpr={dpr}
            gl={{ antialias: !isMobile, powerPreference: 'high-performance' }}
        >
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
                <HeroLights mobile={isMobile} />
                <group
                        scale={isMobile? 0.7 : 1}
                        position={[0, -3.5, 0]}
                        rotation={[0, -Math.PI/4, 0]}
                    >
                       <Room />
                </group>
                <EffectComposer autoClear={false}>
                    <SelectiveBloom
                        intensity={isMobile ? 1.2 : 2}
                        luminanceThreshold={0.2}
                        luminanceSmoothing={0.9}
                        blendFunction={BlendFunction.ADD}
                    />
                </EffectComposer>
                <StarField count={isMobile ? 90 : 250} color="#3DB8E8" radius={10} />
              </Selection>
            ) : (
              <>
                <SpaceScene mobile={isMobile} />
                <StarField count={isMobile ? 100 : 350} color="#5FB875" radius={16} />
              </>
            )}
            </Suspense>
        </Canvas>
      )}
    </div>
    )
}

export default HeroExperience
