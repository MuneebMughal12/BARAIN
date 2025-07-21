import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaCogs,
  FaKey,
  FaCar,
  FaPercentage,
  FaTools,
  FaRegFileAlt,
  FaRulerCombined,
  FaMicrochip,
} from "react-icons/fa";
import { FaHandHoldingHand } from "react-icons/fa6";
import { IoCarSportSharp } from "react-icons/io5";
import { TbHandFinger, TbTransferIn } from "react-icons/tb";
import { GiCctvCamera, GiGate } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import { RiTeamLine } from "react-icons/ri";
import { FaRegThumbsUp } from "react-icons/fa";
import { CgKeyhole } from "react-icons/cg";
import { BiSolidDiscount } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";

const reasons = [
  { icon: <MdPayment />, text: <>Ease of<br/>Payment</> },
  { icon: <RxCountdownTimer/>, text: <>Timely Delivered<br/>Projects</> },
  { icon: <RiTeamLine/>, text: <>Best Structure<br/>Design Team</> },
  { icon: <GiCctvCamera/>, text: <>Triple Monitoring<br/>and Surveillance</> },
  { icon: <FaRegThumbsUp/>, text: <>Employing the Best<br/>M.E.P.</> },
  { icon: <FaHandHoldingHand/>, text: <>Modernized Facilities,<br/>Features & Benefits</> },
  { icon: <TbHandFinger/>, text: <>Customization Options<br/>Available</> },
  { icon: <CgKeyhole/>, text: <>Ease of<br/>Access</> },
  { icon: <GiGate/>, text: "Gated Community" },
  { icon: <IoCarSportSharp/>, text: <>Each Apartment<br/>Own Parking</> },
  { icon: <BiSolidDiscount/>, text: <>Discount<br/>Options</> },
  { icon: <FaTools/>, text: <>Free Maintenance<br/>(3 Month)</> },
  { icon: <TbTransferIn/>, text: <>Transferral on<br/>Project Completion</> },
  { icon: <FaRulerCombined/>, text: <>High Ceilings &<br/>Spacious Design</> },
  { icon: <GrTechnology/>, text: <>Technologically Updated<br/>Infrastructure</> },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const WhyUsSection = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#142B2B] text-white mt-1">
      {/* Left Side: Title */}
      <div className="w-full md:w-1/3 flex items-center justify-center text-center p-12">
        <h2
          className="text-6xl font-bold tracking-wide"
          style={{
            fontFamily: "Poppins, sans-serif",
            fontSize: "73px",
            fontWeight: "bold",
            lineHeight: "1.5em",
            letterSpacing: "0.08rem",
            textShadow:
              "#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px",
          }}
        >
          WHY US?
        </h2>
      </div>

      {/* Right Side: Reasons Grid */}
      <div className="w-full md:w-2/3 p-8">
        <h3
          className="text-xl font-semibold text-center mb-6 uppercase"
          style={{
            fontFamily: "futura-lt-w01-light, futura-lt-w05-light, sans-serif",
            fontSize: "26px",
            lineHeight: "1.8em",
            textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px",
          }}
        >
          There are a number of reasons which will compel you to invest through Sapphire
        </h3>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-gray-700 border border-gray-600 shadow-lg flex flex-col items-center text-center"
              variants={cardVariants}
            >
              <div className="text-4xl mb-3 text-[#c08d31]">{item.icon}</div>
              <p className="text-lg font-medium">{item.text}</p>
              <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gray-600 opacity-30"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUsSection;
