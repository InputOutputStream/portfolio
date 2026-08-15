import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Replaces the old falling-snow Particles effect.
 * Stars gently drift and twinkle (size pulses) instead of falling in one direction —
 * reads as "space / systems" rather than generic weather particles.
 */
const StarField = ({ count = 300, radius = 12, color = "#D14533" }) => {
  const pointsRef = useRef();
  const materialRef = useRef();

  const { positions, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // distribute roughly in a sphere shell around the scene
      const r = radius * (0.4 + Math.random() * 0.6);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.5 + 2;
      positions[i * 3 + 2] = r * Math.cos(phi);
      seeds[i] = Math.random() * Math.PI * 2;
    }
    return { positions, seeds };
  }, [count, radius]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.02;
    }
    if (materialRef.current) {
      // gentle collective twinkle via opacity pulse
      materialRef.current.opacity = 0.55 + Math.sin(t * 0.8) * 0.2;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        ref={materialRef}
        color={color}
        size={0.045}
        transparent
        opacity={0.7}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
};

export default StarField;
