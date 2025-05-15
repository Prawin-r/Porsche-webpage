import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, Suspense, memo } from "react";
import { motion } from "framer-motion";
import "./Hero.css"; // Optional: for custom font styles
useGLTF.preload("/models/porsche-v1.glb");
// Car Model Component (Memoized)
const CarModel = memo(() => {
  const { scene } = useGLTF("/models/porsche-v1.glb");
  const carRef = useRef();

  useFrame(() => {
    if (carRef.current) {
      carRef.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={carRef} object={scene} scale={1} />;
});

export default function ThreeDCar() {
  return (
    <section className="relative h-[600px] bg-black flex flex-col items-center justify-center hero-font">
      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-10 text-center z-10 px-4"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg tracking-widest mb-2">
          Porsche 911
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed tracking-wide"
        >
          Experience the legacy of the Porsche 911 — an icon of performance,
          design, and heritage. Engineered to thrill, built to perform.
        </motion.p>
      </motion.div>

      {/* 3D Model Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        shadows
        dpr={[1, 2]}
        className="z-0"
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
        <spotLight
          position={[0, 2, 3]}
          angle={0.2}
          penumbra={0.8}
          intensity={1.5}
          castShadow
        />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        <Suspense fallback={null}>
          <CarModel />
        </Suspense>
      </Canvas>
    </section>
  );
}
