import React from "react";
import { motion } from "framer-motion";

const models = [
  {
    name: "911",
    img: "/models/porsche 911.jpg",
    fuel: "Gasoline",
    desc: "The iconic, rear-engine sports car with exceptional performance.",
    price: "$127,000",
    buildLink: "https://configurator.porsche.com/en-US/model-start/911",
    allModelsLink: "https://www.porsche.com/usa/models/911/",
  },
  {
    name: "718",
    img: "/models/porsche-718.jpg",
    fuel: "Gasoline",
    desc: "The mid-engine sports car for two made for pure driving pleasure.",
    price: "$72,800",
    buildLink: "https://configurator.porsche.com/en-US/model-start/718",
    allModelsLink: "https://www.porsche.com/usa/models/718/",
  },
  {
    name: "Taycan",
    img: "/models/porsche-taycan.jpg",
    fuel: "Electric",
    desc: "The electric sports car redefining performance and efficiency.",
    price: "$86,700",
    buildLink: "https://configurator.porsche.com/en-US/model-start/taycan",
    allModelsLink: "https://www.porsche.com/usa/models/taycan/",
  },
  {
    name: "Macan",
    img: "/models/porsche-macan.jpg",
    fuel: "Gasoline",
    desc: "The compact SUV built for everyday adventures.",
    price: "$60,900",
    buildLink: "https://configurator.porsche.com/en-US/model-start/macan",
    allModelsLink: "https://www.porsche.com/usa/models/macan/",
  },
  {
    name: "Cayenne",
    img: "/models/porsche-cayenne.jpg",
    fuel: "Gasoline",
    desc: "The SUV with the soul of a sports car.",
    price: "$79,200",
    buildLink: "https://configurator.porsche.com/en-US/model-start/cayenne",
    allModelsLink: "https://www.porsche.com/usa/models/cayenne/",
  },
  {
    name: "Panamera",
    img: "/models/porsche-panamera.jpg",
    fuel: "Gasoline",
    desc: "A luxury sedan that delivers Porsche performance.",
    price: "$92,400",
    buildLink: "https://configurator.porsche.com/en-US/model-start/panamera",
    allModelsLink: "https://www.porsche.com/usa/models/panamera/",
  },
];

export default function ModelsSection() {
  return (
    <section
      id="models"
      className="py-20 bg-white text-black text-center hero-font"
    >
      <h2 className="text-7xl font-extrabold mb-12 tracking-wide">
        Our Models
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-20">
        {models.map((model) => (
          <motion.div
            key={model.name}
            className="relative group rounded-3xl overflow-hidden shadow-xl border border-gray-200"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Image */}
            <div className="overflow-hidden">
              <motion.img
                src={model.img}
                alt={`Porsche ${model.name}`}
                className="w-full h-[24rem] object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 flex flex-col justify-between text-white">
              {/* Top: Name & Fuel */}
              <div className="text-left">
                <h3 className="text-2xl font-bold">{model.name}</h3>
                <span className="inline-block bg-white/20 text-xs px-3 py-1 rounded-full mt-2">
                  {model.fuel}
                </span>
              </div>

              {/* Bottom: Description + Buttons */}
              <motion.div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500 text-left">
                <p className="text-sm mt-2">{model.desc}</p>
                <p className="text-sm mt-1 font-semibold">
                  From {model.price} *
                </p>
                <div className="mt-4 flex gap-3">
                  <a
                    href={model.buildLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-black py-2 rounded-full font-semibold text-sm hover:bg-gray-200 transition flex items-center justify-center"
                  >
                    Build Your Porsche
                  </a>
                  <a
                    href={model.allModelsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 border border-white text-white py-2 rounded-full font-semibold text-sm hover:bg-white hover:text-black transition flex items-center justify-center"
                  >
                    View All Models
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
