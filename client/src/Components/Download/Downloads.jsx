import React from "react";
import { motion } from "framer-motion";
import { FaCogs, FaEye, FaFlask, FaHardHat, FaProjectDiagram } from "react-icons/fa";
import { GiStoneStack, GiMountainCave } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import Logo from "./Logo.webp"
import bgteam from "./team.webp"
import company from "./company.png";

const teamRoles = [
  { icon: <MdEngineering className="text-[#c08d31] text-4xl" />, title: "MEP TEAM" },
  { icon: <FaEye className="text-[#c08d31] text-4xl" />, title: "MONITORING TEAM" },
  { icon: <GiStoneStack className="text-[#c08d31] text-4xl" />, title: "SOIL TESTING" },
  { icon: <GiMountainCave className="text-[#c08d31] text-4xl" />, title: "FAULT AND GAUGING" },
  { icon: <FaHardHat className="text-[#c08d31] text-4xl" />, title: "ARCHITECT TEAM" },
  { icon: <FaProjectDiagram className="text-[#c08d31] text-4xl" />, title: "STRUCTURAL TEAM" },
];
const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Downloads = () => {
  return (
    <div>
      {/* Background Section */}
      <div className="relative w-full h-[64vh] overflow-hidden"
        style={{ fontFamily: "Montserrat", textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
        <img src={bgteam} alt="Units Background" className="absolute top-0 left-0 w-full h-full " />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold"
          >
            PROJECT TEAM
          </motion.h1>
        </div>
      </div>
      <section
        className="bg-[#142B2B] text-white py-12 px-4 font-[Montserrat]"
        style={{
          textShadow: "rgba(0, 0, 0, 0.15) 0px 2px 4px",
        }}
      >

        {/* Main Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side: Description */}
          <motion.div className="p-6 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeLeft}>
            <h2 className="text-3xl font-bold tracking-wide">PROJECT TEAM</h2>
            <p className="text-xl leading-relaxed">
              At Sapphire , we have partnered with leading architects , structural
              designers , seasoned engineers , and experienced real estate
              professionals to bring our vision to life — ensuring our clients
              receive only the best possible solutions. Our comprehensive threetiered quality monitoring system guarantees that excellence is
              maintained at every stage, from concept to completion.
            </p>
            <p className="text-xl leading-relaxed">
              What sets us apart is our self-sufficient operational model: from land
              ownership to construction , and all the way through to sales and
              marketing , every phase is managed in-house . This integrated
              approach enables us to confidently stand behind everything we
              develop, build, and deliver — all under the trusted name of Sapphire
            </p>

          </motion.div>

          {/* Right Side: Team Icons */}
          <motion.div className="flex flex-col gap-8 items-center justify-center text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeRight}>
            {teamRoles.map((role, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2">
                <div className="text-yellow-500 text-5xl">{role.icon}</div>
                <p className="text-[1.2rem] font-semibold leading-tight tracking-wide whitespace-pre-line">
                  {role.title}
                </p>
              </div>
            ))}
          </motion.div>


        </div>

        {/* Footer Branding */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between text-[#c08d31] px-6">
          {/* Logo */}
          <div className="text-white font-semibold">
            <img
              src={Logo}
              alt="barian logo"
              className="h-24 w-24 object-contain"
            />

          </div>
          <div className="text-center md:text-right">
            <img
              src={company}
              alt="company logo"
              className="h-32 w-32 object-contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;
