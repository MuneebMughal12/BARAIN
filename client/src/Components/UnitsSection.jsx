import React from "react";
import { motion } from "framer-motion";
import TowerImage2 from "../assets/106.webp";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const UnitsSection = () => {
  return (
    <motion.div
      className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 lg:h-screen items-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Image - Spanning 2 columns on large screens */}
      <motion.div variants={itemVariants} className="lg:col-span-2">
        <img
          src={TowerImage2}
          alt="Luxury Apartment"
          className="w-full h-auto lg:h-full object-cover rounded-xl shadow-lg"
        />
      </motion.div>

      {/* Text content */}
      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center text-center lg:text-left space-y-6"
      >
        <motion.h2 variants={itemVariants} className="text-2xl sm:text-5xl font-semibold tracking-wide text-[#142B2B]">
          UNITS
        </motion.h2>
        <motion.div variants={itemVariants} className="space-y-2 sm:space-y-4">
          <p className="text-lg sm:text-2xl font-bold text-[#142B2B]">Lodges</p>
          <p className="text-lg sm:text-2xl font-bold text-[#142B2B]">
            1 Bed Apartments<br/>
            <span className="block text-center">TYP-1</span>
          </p>
          <p className="text-lg sm:text-2xl font-bold text-[#142B2B]">
            2 Bed Apartments<br/>
            <span className="block text-center">TYP-1</span>
          </p>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link to="/units" className="no-underline">
            <button className="mt-4 sm:mt-6 bg-[#142B2B] text-white px-4 sm:px-6 py-2 font-semibold rounded-md hover:bg-[#c08d31] transition">
              View More →
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default UnitsSection;
