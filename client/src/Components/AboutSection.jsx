import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Aboutbg from "../assets/whyvolarvista.webp";
import { Link } from "react-router-dom";

const panelVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const AboutSection = () => {
  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-cover flex items-center px-4 sm:px-8"
      style={{ backgroundImage: `url(${Aboutbg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      <motion.div
        className="relative max-w-lg h-[77vh] sm:h-3/5 text-white p-6 sm:p-8 bg-black bg-opacity-70 rounded-lg mx-auto sm:ml-10 space-y-14 sm:space-y-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={panelVariants}
      >
        <h2 className="text-xl sm:text-3xl md:text-3xl font-semibold tracking-wide text-center sm:text-left leading-tight">
          WHY BARAIN?
        </h2>

        <p className="text-lg sm:text-base md:text-xl text-center sm:text-left leading-relaxed">
          THE BARAIN & Luxury Suites is a high-rise, state-of-the-Art building providing
          <br />
          <span className="font-semibold">PREMIUM AND FUTURISTIC LIFESTYLE!</span>
        </p>

        <p className="text-lg sm:text-base md:text-xl text-center sm:text-left leading-relaxed">
          We commit to deliver quality, attain high customer satisfaction and provide exemplary services.
          <span className="font-bold">
            TUo is all about high standard lifestyle — with smart design.
          </span>
        </p>

        <Link
          to="/about"
          className="flex items-center justify-center sm:justify-start border-white border-2 bg-black text-white px-4 sm:px-6 py-2 rounded-full hover:bg-white hover:text-black transition w-full sm:w-auto"
          style={{ width: "154px" }}
        >
          Read More <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutSection;
