import React from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";
import hEROBG from "./hEROBG.webp";
import mission from "./106.webp";
import company from "./logo.png";
import Logo from "./Logo.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <div style={{ fontFamily: '"Montserrat"', textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>

      {/* VIDEO HERO */}
      <div
        className="relative w-full h-[64vh] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <video
          autoPlay loop muted playsInline
          className="w-full h-full rounded-lg object-cover"
        >
          <source
            src="https://res.cloudinary.com/dz4eexjrs/video/upload/v1752904268/Clip_11_d58poc.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            ABOUT US
          </motion.h1>
        </div>
      </div>

      {/* ABOUT US CONTENT */}
      <motion.section
        className="min-h-screen bg-[#142B2B] text-white px-6 sm:px-10 py-16 flex flex-col lg:flex-row gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        {/* Left */}
        <div className="lg:w-1/2 space-y-4">
          <img src={Logo} alt="BARIAN" className="w-32 h-32 sm:w-40 sm:h-40" />
          <h2 className="text-xl sm:text-2xl font-light">ABOUT US</h2>
          <p className="text-lg leading-relaxed">
            GeoCon Enterprises is a multidisciplinary design and
            development firm committed to <br /> delivering excellence in
            architecture, construction, and real estate development. <br />
            With a focus on innovation, sustainability, and timeless
            design, GeoCon has earned <br /> a reputation for crafting
            spaces that are both functional and inspiring. <br />
          </p>
          <br />

          <p className="text-lg sm:text-lg leading-relaxed">
            From residential communities to commercial complexes
            and bespoke villas,<br /> GeoCon offers end-to-end solutions—
            covering architectural design, structural engineering, MEP
            planning, <br />  interior  design,  and construction execution.
            Each project reflects a commitment to quality, integrity,
            and client satisfaction.
          </p>
          <br />
          <p className="text-lg sm:text-lg leading-relaxed">
            Operating with a forward-thinking vision, GeoCon
            continues to lead <br />the way in modern,  nature-integrated
            developments—like the <br />Barian Pine Lodges in  Murree and
            premium urban housing across Pakistan and beyond.
          </p>

        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center h-screen">
          <ul className="text-[#c08d31] space-y-6 text-center">
            {["TOWN LODGES", "2 BED LODGES", "3 BED LODGES"].map((p, i) => (
              <motion.li
                key={i}
                className="text-4xl font-semibold"
                variants={fadeUp}
              >
                {p}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Vision & Mission Section */}
      <motion.section
        className="py-16 px-6 sm:px-8 bg-white text-[#142B2B]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Image */}
          <motion.div variants={fadeUp}>
            <img src={hEROBG} alt="Vision" className="w-full h-64 md:h-[58vh] rounded-lg object-cover" />
          </motion.div>

          {/* Vision Text */}
          <motion.div variants={fadeUp} className="relative">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-center">Vision</h2>
            <p className="text-lg sm:text-2xl leading-relaxed">
              To be recognized as the premier luxury mountain retreat in
              Pakistan , offering a unique blend of modern living and natural
              serenity. We envision Barian Pine Lodges Murree as a symbol of
              timeless elegance, where every guest experiences the peace of pine-covered hills, the warmth of refined design, and the essence of
              sustainable, high-altitude living.
              <p></p>
              <br />
              Our goal is to set a new benchmark for Eco-conscious hospitality
              and hill-station living in South Asia
            </p>
            <div className="absolute border-black top-0 right-0 border-t-4 border-r-4 w-16 h-16" />
          </motion.div>


          {/* Mission */}
          <motion.div variants={fadeUp} className="relative">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4 text-center">Mission</h2>
            <p className="text-lg sm:text-2xl leading-relaxed">
              At Barian Pine Lodges Murree, our mission is to create a sanctuary of luxury,
              tranquility, and natural harmony in the heart of the Barian Hills Murree. We are
              dedicated to offering an exceptional mountain retreat experience through
              thoughtfully designed lodges that blend modern comfort with rustic charm.
              <p></p> <br />
              With a focus on quality, sustainability, and innovation,
              we aim to exceed expectations and provide an exceptional residential
              experience. Valor Vista is not just a home—it’s a lifestyle redefined.

            </p>
            <br />
            <div className="absolute bottom-0 border-black -left-6 border-b-4 border-l-4 w-16 h-16" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <img src={mission} alt="Mission" className="w-full h-64 md:h-[45vh] rounded-lg object-cover" />
          </motion.div>
        </div>
      </motion.section>

      {/* Company Section */}
      <div className="border-t border-gray-500 my-12"></div>
      <motion.section
        className="flex flex-col lg:flex-row items-center justify-around p-6 sm:p-10 lg:p-20 text-[#142B2B]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        {/* Company Text */}
        <motion.div variants={fadeUp} className="lg:w-1/2 space-y-4">
          <div className="flex justify-center">
            <div className="w-52 h-52 sm:w-64 sm:h-64">
              <img src={company} alt="GeoCon Enterprises" className="w-full h-full object-contain" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light uppercase tracking-wider">
            Shaping Spaces, Building Futures
          </h2>
          <p className="text-lg sm:text-xl leading-relaxed">
            GeoCon Enterprises is a multidisciplinary design and development firm
            committed to delivering excellence in architecture, construction, and real
            estate development. With a focus on innovation, sustainability, and timeless
            design, GeoCon has earned a reputatio for crafting spaces that are both
            functional and inspiring. From residential communities to commercial functional and inspiring.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            From residential communities to commercial
            complexes and bespoke villas, GeoCon offers end-to-end solutions covering
            architectural design, structural engineering, MEP planning, interior design,
            and construction execution. Each project reflects a commitment to quality,
            integrity, and client satisfaction.
          </p>
          <p className="text-lg sm:text-xl">
            Operating with a forward-thinking vision,
            GeoCon continues to lead the way in modern, nature-integrated
            developments—like the Barian Pine Lodges in Murree and premium urban
            housing across Pakistan and beyond.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-amber-50 rounded-lg p-8 relative shadow-lg">
          <h2 className="text-3xl font-serif font-bold mb-6 text-gray-800">Get In Touch</h2>
          <div class="flex items-center mb-4">
            <svg class="w-8 h-8 mr-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02L6.62 10.79z" />
            </svg>
            <p class="text-lg text-gray-700">+92-333-3404585, <br /> +92-308-8528128</p>
          </div>
          <div class="flex items-center">
            <svg class="w-8 h-8 mr-4 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <p class="text-lg text-gray-700"><strong>Email:</strong> <a href="mailto:geoconenterprises@outlook.com" className="underline">geoconenterprises@outlook.com</a></p>
          </div>
          <div class="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-amber-50"></div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default About;