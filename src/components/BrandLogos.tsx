import React from "react";
import { motion } from "motion/react";

const brands = [
  { name: "TechFlow", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/1xBet-Logo.png" },
  { name: "CloudScale", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/1xBet-Logo.png" },
  { name: "DataNexus", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/1xBet-Logo.png" },
  { name: "BioGen", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/1xBet-Logo.png" },
  { name: "EcoSmart", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/1xBet-Logo.png" },
  { name: "FinLeap", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d3/1xBet-Logo.png" }
];

export const BrandLogos = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">

          <h3 className="text-xl font-semibold text-slate-700">
            Powering India’s Fastest Growing Businesses
          </h3>
        </div>

        {/* Marquee */}
        <div className="relative">

          {/* Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

          {/* Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden">

            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex w-max items-center gap-16"
            >
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-[180px] h-16"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-h-10 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};