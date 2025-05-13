import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import { FaPlay, FaPause } from "react-icons/fa";

export default function Hero() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile screen size
    setIsMobile(window.innerWidth < 768);
  }, []);

  const toggleVideo = () => {
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const scrollToModels = () => {
    const modelsSection = document.getElementById("models");
    modelsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative bg-black text-white flex flex-col justify-center items-center hero-font"
    >
      {/* Fade-in background video + overlay (desktop only) */}
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 z-0"
        >
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/models/Porsche-Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
      )}

      {/* Fallback for JS-disabled browsers */}
      <noscript>
        <img
          src="/models/fallback.jpg"
          alt="Porsche fallback"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </noscript>

      {/* Hero content */}
      <div className="relative z-20 flex flex-col justify-center items-center text-white text-center px-4">
        <motion.h1
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-extrabold mb-4 drop-shadow-md"
        >
          Unleash Performance
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-2xl mb-8 max-w-xl drop-shadow"
        >
          Drive the legend.
        </motion.p>

        <motion.button
          onClick={scrollToModels}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-red-600 text-white text-lg rounded-full hover:bg-red-700 transition drop-shadow"
        >
          Explore Models
        </motion.button>
      </div>

      {/* Play/Pause Button - only on desktop */}
      {!isMobile && (
        <button
          onClick={toggleVideo}
          className="absolute bottom-8 right-6 z-30 px-4 py-2 bg-white text-black rounded-full shadow-lg hover:bg-gray-200 transition"
          aria-label="Toggle video"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      )}
    </section>
  );
}
