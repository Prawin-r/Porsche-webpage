import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="bg-white text-black flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-10">
      {/* Left: Text content */}
      <div className="md:w-1/2 mb-12 md:mb-0 text-left">
        <h1 className="text-4xl font-extrabold mb-6">About Porsche</h1>
        <p className="text-lg mb-4">
          Discover Porsche's legacy of precision engineering and performance.
          Explore our passion for speed and innovation, where cutting-edge
          technology meets timeless design.
        </p>
        <p className="text-lg">
          From racetracks to roads, Porsche is committed to delivering thrilling
          driving experiences while shaping the future of mobility.
        </p>
      </div>

      {/* Right: Car image with animation */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="md:w-1/2 flex justify-end overflow-visible relative mb-6 md:mb-0"
      >
        <img
          src="/models/about.jpg"
          alt="Porsche cars"
          className="w-full h-auto max-w-xl md:max-w-none md:-mr-10 translate-x-10"
        />
      </motion.div>
    </section>
  );
}
