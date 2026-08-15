import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

// Orbiting "data particles" around the black hole — replaces the old falling
// snow effect with something that actually fits a systems/AI theme: points
// drifting on slightly tilted elliptical orbits, like debris in an accretion disk.
const Particles = ({ count = 160 }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const radius = 3.5 + Math.random() * 6;
      temp.push({
        radius,
        angle: Math.random() * Math.PI * 2,
        speed: (0.15 + Math.random() * 0.25) / radius,
        tilt: (Math.random() - 0.5) * 1.2,
        yOffset: (Math.random() - 0.5) * 1.5,
      });
    }
    return temp;
  }, [count]);

  const positions = useMemo(() => new Float32Array(count * 3), [count]);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    const arr = mesh.current.geometry.attributes.position.array;
    particles.forEach((p, i) => {
      p.angle += p.speed * delta;
      const x = Math.cos(p.angle) * p.radius;
      const z = Math.sin(p.angle) * p.radius;
      const y = Math.sin(p.angle * 2) * p.tilt + p.yOffset;
      arr[i * 3] = x;
      arr[i * 3 + 1] = y;
      arr[i * 3 + 2] = z;
    });
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#FFFFFF"
        size={0.035}
        transparent
        opacity={0.75}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;
