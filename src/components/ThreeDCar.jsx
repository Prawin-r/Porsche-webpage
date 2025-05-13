import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion";
import "./Hero.css"; // Custom CSS for font if needed

function CarModel() {
  const { scene } = useGLTF("/models/porsche.glb");
  const carRef = useRef();

  useFrame(() => {
    if (carRef.current) {
      carRef.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={carRef} object={scene} scale={1.5} />;
}

export default function ThreeDCar() {
  return (
    <section className="relative h-[600px] bg-black flex flex-col items-center justify-center hero-font">
      {/* Title and Description with Effects */}
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

      {/* 3D Car Model */}
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.3} /> {/* Soft ambient light */}
        <directionalLight position={[5, 5, 5]} intensity={1} />{" "}
        {/* Directional light */}
        {/* Spotlight for the car */}
        <spotLight
          position={[0, 2, 3]} // Position of the spotlight
          angle={0.2} // Light cone angle
          penumbra={1} // Soft edges for the spotlight
          intensity={1.5} // Spotlight intensity
          castShadow // Enable shadows
        />
        <OrbitControls enableZoom={false} />
        <CarModel />
      </Canvas>
    </section>
  );
}
