import React from "react";
import { motion } from "framer-motion";
import skydle from "../assets/skydle.webp";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TowerSection = () => {
  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Info Section */}
      <div className="grid bg-[#ffffff] text-[#142B2B] grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-16 py-10 items-center">
        {/* Image Side */}
        <motion.div variants={itemVariants} className="w-full mt-10 lg:mt-0">
          <img
            src={skydle}
            alt="Skydle"
            className="w-full h-full rounded-xl shadow-lg"
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col justify-center text-center lg:text-left space-y-5"
        >
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold">
            A SANCTUARY OF
          </motion.h2>
          <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold">
            ELEVATED MOUNTAIN LIVING
          </motion.h2>

          {[
            `Crafted for those who seek calm, beauty, and refinement, Barian Pine Lodges redefines
             hillside living with a seamless blend of architecture and nature.`,
            `With split-level planning that aligns with the natural contours of the land, each unit
             features open interiors, private terraces, and dual exposure to both road and forest views.`,
            `Barian Pine Lodges reflects a forward-thinking design approach—integrating minimalistic
             architecture with the natural terrain while preserving the existing tree line and environment.`,
            `Set against the backdrop of Murree’s tranquil pine-covered hills, Barian Pine Lodges
             is more than a place to live—it’s a lifestyle rooted in serenity, sophistication, and a
             timeless connection with nature.`,
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={itemVariants}
              className="text-base sm:text-lg font-medium"
            >
              {text}
            </motion.p>
          ))}

          <motion.div
            variants={itemVariants}
            className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-3 text-lg font-semibold text-[#142B2B]"
          >
            {[
              { number: "12", label: "Lodges" },
              { number: "6", label: "2 Bed Apartments", type: "TYP-1" },
              { number: "6", label: "1 Bed Apartments", type: "TYP-1" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex flex-col items-center"
              >
                <p className="text-2xl sm:text-3xl font-bold">
                  {item.number}
                </p>
                <hr className="w-6 sm:w-8 border-t-2 text-[#142B2B] my-1" />
                <p className="text-sm sm:text-base uppercase">
                  {item.label}
                </p>
                {item.type && (
                  <p className="text-sm sm:text-base uppercase">{item.type}</p>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TowerSection;
