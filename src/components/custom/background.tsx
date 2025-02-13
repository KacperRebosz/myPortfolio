import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import React, { useRef, useMemo } from "react";

const BackgroundCanvas = () => {
  const FloatingBoxesEffect = useMemo(() => {
    return () => {
      const boxes = useRef<THREE.Group>();
      const boxCount = 150;

      useFrame((state) => {
        if (boxes.current) {
          boxes.current.children.forEach((box, i) => {
            const t = state.clock.getElapsedTime() + i;
            const scaleFactor = box.scale.x;

            box.position.y += Math.sin(t * 0.15 * scaleFactor) * 0.002;
            box.position.x += Math.cos(t * 0.15 * scaleFactor) * 0.002;
            box.position.z += Math.sin(t * 0.1 * scaleFactor) * 0.001;

            box.rotation.x = t * 0.08 * scaleFactor;
            box.rotation.y = t * 0.08 * scaleFactor;
          });
        }
      });

      const initialBoxes = Array.from({ length: boxCount }).map((_, i) => {
        const x = (Math.random() - 0.5) * 40;
        const y = (Math.random() - 0.5) * 40;
        const z = (Math.random() - 0.5) * 20;
        const scale = 0.2 + Math.random() * 0.8;

        return (
          <mesh key={i} position={[x, y, z]} scale={[scale, scale, scale]}>
            <boxGeometry args={[0.5, 0.5, 0.5]} />
            <meshBasicMaterial
              color="#94a3b8"
              transparent
              opacity={0.2 + scale * 0.2}
              wireframe
            />
          </mesh>
        );
      });

      return <group ref={boxes}>{initialBoxes}</group>;
    };
  }, []);

  const canvasContent = useMemo(
    () => (
      <div className="fixed inset-0 -z-50">
        <Canvas
          camera={{
            position: [0, 0, 25],
            fov: 60,
            far: 100,
          }}
        >
          <ambientLight intensity={1.5} />
          <FloatingBoxesEffect />
          <OrbitControls
            enableZoom={false}
            autoRotate={false}
            rotateSpeed={0.3}
          />
        </Canvas>
      </div>
    ),
    []
  );

  return canvasContent;
};

export default React.memo(BackgroundCanvas);
