import React from "react";
import { motion } from "motion/react";

// ✅ IMPORT IMAGES PROPERLY
import client1 from "../assets/client-1.png";
import client2 from "../assets/client-2.png";
import client3 from "../assets/client-3.png";
import client4 from "../assets/client-4.png";
import client5 from "../assets/client-5.png";
import client6 from "../assets/client-6.png";
import client7 from "../assets/client-7.png";
import client8 from "../assets/client-8.png";
import client9 from "../assets/client-9.png";
import client10 from "../assets/client-10.png";

const brands = [
  { name: "CloudScale", logo: client2 },
  { name: "DataNexus", logo: client3 },
  { name: "BioGen", logo: client4 },
  { name: "EcoSmart", logo: client5 },
  { name: "FinLeap", logo: client6 },
  { name: "FinLeap", logo: client7 },
  { name: "FinLeap", logo: client8 },
  { name: "FinLeap", logo: client9 },
  { name: "FinLeap", logo: client10 },
];

export const BrandLogos = () => {
  return (
    <section className="relative py-12 bg-white overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-slate-700">
            Powering India’s Fastest Growing Businesses
          </h3>
        </div>

        <div className="relative">

          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

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
                    loading="lazy"
                    className="max-h-40 object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"
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