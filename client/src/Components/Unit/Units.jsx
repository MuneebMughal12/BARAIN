import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import bgunit from "./unitbg.webp";
import heroImage from "./hEROBG.webp";
import logo from "./Logo.webp";
// import type2 from "./TYPE2.webp";
import Cloud from "./Cloud.webp";
import Logo from "./Logo.webp";
import paymentpic from "./paymentpic.webp";
import modern1 from "./38.webp"
import first from "./first.webp";
import second from "./second.webp";
import rooftop from "./rooftop.webp";
// import modern2 from "./114.webp"
import Ground from "./Ground.webp"
import BlackLogo from "./BlackLogo.png"
import paymentpic2 from "./38.webp";


// 1kbh

import type1 from "./one/3type1.jpeg"
import type2 from "./one/3type2.jpeg"
import type3 from "./one/3type3.jpeg"
import type4 from "./one/type3.jpeg"

// 2kbh
import Garden from "./three/bedtype2.jpeg"
import forest from "./three/bedtype3.jpeg";
import garendpic from "./three/garendpic.webp";
import forestpic from "./three/forestpic.webp";


const MasterPlan = () => {
  const CARD_WIDTH_CLASS = "w-11/12 md:w-1/3 max-w-md";        // container width
  const HEADING_SIZE_CLASS = "text-2xl md:text-4xl";            // heading font size
  const TEXT_SIZE_CLASS = "text-base md:text-lg";           // paragraph font size

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };





  return (
    <div style={{ fontFamily: 'Montserrat', }}>
      <div className="relative w-full h-[64vh] overflow-hidden">
        <img src={bgunit} alt="Units Background" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-6xl font-bold">
            UNITS
          </motion.h1>
        </div>
      </div>

      {/* 2bed type-1 Section description */}
      <motion.div className="font-sans bg-white text-black relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}>
        {/* Top Image with Cloud Overlay */}
        <div className="relative w-full h-auto md:h-[100vh] overflow-hidden">
          <img
            src={heroImage}
            alt="Barian Lodges"
            className="w-full h-full object-cover"
          />

          {/* Logo */}
          <img
            src={logo}
            alt="Barian Logo"
            className="absolute top-10 left-10  h-16 md:h-32 bg-white p-3 rounded-lg shadow-lg"
          />
        </div>

        {/* Headings Positioned Separately, NOT inside image */}
        <motion.div className="relative z-10 font-montserrat font-semibold text-center py-8 px-4 md:py-16 md:px-20 bg-white mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >

          {/* Cloud only on desktop */}
          <img
            src={Cloud}
            alt="Cloud"
            className="hidden md:block absolute bottom-64 left-0 w-full h-full object-cover"
          />

          {/* Overlay text: static on mobile, absolute on md+ */}
          <div className="relative md:absolute md:top-24 md:left-1/2 md:transform md:-translate-x-1/2 text-center z-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}>
            <motion.h1 className="text-2xl md:text-5xl text-[#142B2B] font-bold mb-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}>
              2 Bed Lodges
            </motion.h1>
            <motion.h2 className="text-lg md:text-2xl font-semibold text-[#142B2B] mb-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}>
              Skyview Residences
            </motion.h2>
            <motion.p className="text-base md:text-xl text-[#c08d31] mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}>
              “Three Levels of Elevated Living”
            </motion.p>
          </div>

          {/* Main copy */}
          <motion.div className="mt-4 md:mt-56 bg-cover bg-no-repeat"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}>
            <p className="max-w-3xl mx-auto font-bold text-[#142B2B] text-lg leading-relaxed mb-4">
              A Seamless Harmony of Elevation, Comfort & Contemporary Living
            </p>
            <p className="max-w-4xl mx-auto font-semibold text-[#142B2B] text-base md:text-lg leading-relaxed mb-8">
              The Skyview Villas at Barian Pine Lodges are thoughtfully designed to deliver an
              exceptional hillside living experience. Built on three vertically aligned floors
              above road level, each residence merges functional zoning with scenic luxury —
              offering residents space to breathe, relax, and reconnect with nature.
            </p>
            <hr className="text-[#142B2B] my-6 w-1/2 mx-auto" />
            <p className="text-base md:text-xl font-semibold text-[#142B2B] max-w-xl mx-auto leading-relaxed pb-6">
              Crafted with precision and nestled in nature, Skyview Villas reflect the Barian
              Pine Lodges vision of "Elevated Living in Harmony with Nature." These homes are
              not just functional — they're soulful, scenic, and timeless.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>


      {/* 2BED-TYPE ground */}
      <div className="w-full">
        {/* Top Image */}
        <motion.div className="w-full overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}>
          <img
            src={type1}
            alt="Top View"
            className="w-full h-auto md:h-[108vh] object-contain"
          />
        </motion.div>

        {/* Bottom Section */}
        <motion.div className="flex flex-col md:justify-around md:flex-row bg-white" initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}>
          {/* Left Side */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center">
            <img
              src={Ground}
              alt="Front View"
              className="w-full h-auto rounded-md shadow-lg mb-4"
            />
            <p className="text-base md:text-2xl font-bold text-center text-[#142B2B]">
              “Where the first impression lasts forever”
            </p>
          </div>

          {/* Right Side */}
          <div
            className={`
        ${CARD_WIDTH_CLASS}
        bg-[#e4ddca]
        p-6 md:p-10
        relative flex flex-col justify-center
        mx-auto md:mx-0
      `}
          >
            {/* Badge */}
            <div className="absolute top-6 right-6">
              <img src={BlackLogo} alt="Badge" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </div>

            {/* Heading */}
            <h2 className={`${HEADING_SIZE_CLASS} text-center  mb-6`}>
              Ground Floor
            </h2>

            {/* Description */}
            <p className={`${TEXT_SIZE_CLASS} text-center font-bold  leading-relaxed mb-8`}>
              Welcoming as you enter directly from the <br /> road, the Ground Floor welcomes you
              <br />with a secure double car garage, private <br /> entry lobby, storage, laundry zone,
              and a <br /> cozy rear-side terrace. This level offers a <br /> perfect mix of convenience
              and utility, <br /> ideal for both short stays and permanent
              <span className="block text-center">living</span> .
            </p>

            {/* Stats */}
            <div className="space-y-2 text-center ">
              <p className={`${TEXT_SIZE_CLASS} font-semibold`}>
                <span className="font-bold">Covered Area:</span> 620.530 sft
              </p>
              <p className={`${TEXT_SIZE_CLASS} font-semibold`}>
                <span className="font-bold">Total Covered Area:</span> 1,973.00 sft
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 2BED-TYPE second floor */}
      <motion.div className="w-full" initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}>
        {/* Top Image */}
        <div className="w-full overflow-hidden">
          <img
            src={type2}
            alt="Top View"
            className="w-full h-auto md:h-[108vh] object-contain"
          />
        </div>

        {/* Bottom Section */}
        <motion.div className="flex md:justify-around flex-col md:flex-row bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}>
          {/* Left Side */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center">
            <img
              src={first}
              alt="Front View"
              className="w-full h-auto rounded-md shadow-lg mb-4"
            />
            <p className="text-base md:text-2xl font-bold text-center text-[#142B2B]">
              “Nature at Your Doorstep, <br />
              Luxury in Every Detail”
            </p>
          </div>

          {/* Right Side */}
          <div
            className={`
        ${CARD_WIDTH_CLASS}
        bg-[#e4ddca]
        p-6 md:p-10
        relative flex flex-col justify-center
        mx-auto md:mx-0
      `}
          >
            {/* Badge */}
            <div className="absolute  top-6 right-6">
              <img src={BlackLogo} alt="Badge" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </div>

            {/* Heading */}
            <h2 className={`${HEADING_SIZE_CLASS} text-center  mb-6`}>
              First Floor
            </h2>

            {/* Description */}
            <p className={`${TEXT_SIZE_CLASS} text-center font-bold   leading-relaxed mb-8`}>
              The heart of the home lies here — an open<br />  plan living lounge, a beautifully lit dining
              <br /> area, and a modern kitchen crafted for <br />  gatherings and connection. A compact <br />
              powder room and access to a balcony <br /> bring in natural light, creating a bright <br />
              and lively family space. Every element on <br />  this level is designed to foster comfort and
              <span className="block text-center">togetherness.</span>
            </p>

            {/* Stats */}
            <div className="space-y-2 text-center ">
              <p className={`${TEXT_SIZE_CLASS} font-semibold`}>
                <span className="font-bold">Covered Area:</span> 620.530 sft
              </p>
              <p className={`${TEXT_SIZE_CLASS} font-semibold`}>
                <span className="font-bold">Total Covered Area:</span> 1,973.00 sft
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* 2BED-TYPE  Second Floor */}
      <motion.div className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}>
        {/* Top Image */}
        <motion.div className="w-full overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}>
          <img
            src={type3}
            alt="Top View"
            className="w-full h-auto md:h-[108vh] object-contain"
          />
        </motion.div>

        {/* Bottom Section */}
        <motion.div className="flex md:justify-around flex-col md:flex-row bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}>
          {/* Left Side */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center">
            <img
              src={second}
              alt="Front View"
              className="w-full h-auto rounded-md shadow-lg mb-4"
            />
            <p className="text-base md:text-2xl font-bold text-center text-[#142B2B]">
              “Where Nature Meets <br />
              Comfort.”
            </p>
          </div>

          {/* Right Side */}
          <div
            className={`
        ${CARD_WIDTH_CLASS}
        bg-[#e4ddca]
        p-6 md:p-10
        relative flex flex-col justify-center
        mx-auto md:mx-0
      `}
          >
            {/* Badge */}
            <div className="absolute  top-6 right-6">
              <img src={BlackLogo} alt="Badge" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </div>

            {/* Heading */}
            <h2 className={`${HEADING_SIZE_CLASS} text-center  mb-6`}>
              Second Floor
            </h2>

            {/* Description */}
            <p className={`${TEXT_SIZE_CLASS} text-center font-bold   leading-relaxed mb-8`}>
              The private bedroom zone offers two<br />   elegant rooms with wide windows, lgart
              <br /> closets, and shared bathroom access. A <br />  spacious terrace at the rear provides a <br />
              tranquil sit-out area, perfect for unwinding<br />  with forest views or hosting an intimate  <br />
              <span className="block text-center">sunset tea.</span>
            </p>

            {/* Stats */}
            <div className="space-y-2 text-center ">
              <p className={`${TEXT_SIZE_CLASS} font-semibold`}>
                <span className="font-bold">Covered Area:</span> 620.530 sft
              </p>
              <p className={`${TEXT_SIZE_CLASS} font-semibold`}>
                <span className="font-bold  ">Total Covered Area:</span> 1,973.00 sft
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* 2BED-TYPE  Rooftop */}
      <div className="w-full">
        {/* Top Image */}
        <motion.div className="w-full overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}>
          <img
            src={type4}
            alt="Top View"
            className="w-full h-auto md:h-[108vh] object-contain"
          />
        </motion.div>

        {/* Bottom Section */}
        <motion.div className="flex md:justify-around flex-col md:flex-row bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          {/* Left Side */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center">
            <img
              src={rooftop}
              alt="Front View"
              className="w-full h-auto rounded-md shadow-lg mb-4"
            />
            <p className="text-base md:text-2xl font-bold text-center text-[#142B2B]">
              “Rooted in Nature, <br />
              Crafted for You.”
            </p>
          </div>

          {/* Right Side */}
          <div
            className={`
        ${CARD_WIDTH_CLASS}
        bg-[#e4ddca]
        p-6 md:p-10
        relative flex flex-col justify-center
        mx-auto md:mx-0
      `}
          >
            {/* Badge */}
            <div className="absolute  top-6 right-6">
              <img src={BlackLogo} alt="Badge" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </div>

            {/* Heading */}
            <h2 className={`${HEADING_SIZE_CLASS} text-center  mb-6`}>
              Rooftop
            </h2>

            {/* Description */}
            <p className={`${TEXT_SIZE_CLASS} text-center font-bold   leading-relaxed mb-8`}>
              A beautifully designed rooftop terrace <br />   crowns the Skyview Villa — complete with
              <br /> pergola sitting and panoramic views of the <br />   Murree hills and pine canopy. The Mumty <br />
              provides covered access, making this floor <br />  usable year-round as a retreat, barbecue <br />
              <span className="block text-center"> space, or quiet lounge.</span>
            </p>

            {/* Stats */}
            <div className="space-y-2 text-center ">
              <p className={`${TEXT_SIZE_CLASS} font-semibold`}>
                <span className="font-bold">Covered Area:</span> 112.056 sft
              </p>
              <p className={`${TEXT_SIZE_CLASS} font-semibold`}>
                <span className="font-bold">Total Covered Area:</span> 1,973.00 sft
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      {/* payment plan */}


      <motion.div className="w-full min-h-screen bg-white p-8 font-sans text-[#142B2B]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}>
        {/* Birds at top */}
        {/* <div className="flex justify-start mb-4">
          <img src={Birds} alt="Flying birds" className="h-80" />
        </div> */}

        {/* Header */}
        <div className="flex flex-col text-[#142B2B] items-center mb-8">
          <img src={Logo} alt="Barian Logo" className="h-20 mb-4" />
          <h1 className="text-3xl font-bold mb-1">Barian Pine Lodges</h1>
          <p className="text-lg font-semibold">24 MONTHS PAYMENT PLAN</p>
          <p className="text-lg text-[#142B2B] mt-1">2 Bed Lodges (Hill &amp; Valley View)</p>
          <div className="text-lg text-[#142B2B] mt-2">
            <span className="font-bold">Floor Type:</span> Ground Floor to Roof Top (Skyview)<br />
            <span className="font-bold">Covered Area:</span> 1,973 SFT
          </div>
        </div>

        {/* Installment Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full table-fixed border-collapse border border-[#ddd] text-[#142B2B]">
            <thead>
              <tr>
                <th
                  colSpan={3}
                  className="bg-[#e4ddca] p-3 text-center text-lg font-semibold border border-[#ddd]"
                >
                  24 MONTHS INSTALLMENT PLAN
                </th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Booking (30%)", "PKR 7,517,130/-", "Payable at time of booking"],
                ["Monthly Installments (24%)", "PKR 2,281,711/-", "Twenty four installments"],
                ["Quarterly Installments (26%)", "PKR 2,834,646/-", "Eight installments"],
                ["Possession (20%)", "PKR 5,246,275/-", "Payable upon final handover"],
              ].map((row, i) => (
                <tr
                  key={i}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#f9f6eb]"}
                >
                  <td className="p-3 border border-[#ddd] text-lg">{row[0]}</td>
                  <td className="p-3 border border-[#ddd] text-lg">{row[1]}</td>
                  <td className="p-3 border border-[#ddd] text-lg">{row[2]}</td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr className="bg-[#f9f6eb] font-bold">
                <td
                  colSpan={2}
                  className="p-3 border border-[#ddd] text-right text-lg"
                >
                  TOTAL PRICE
                </td>
                <td className="p-3 border border-[#ddd] text-lg">
                  PKR 25,050,000/-
                </td>
              </tr>
            </tfoot>
          </table>
        </div>


        {/* Net Cash Plan */}
        <motion.div className="mb-8 text-lg text-[#142B2B]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}>
          <h2 className="font-semibold mb-2">Net Cash Payment Plan (Optional)</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Total price with 5% discount.</li>
            <li>Flexible payment terms available upon request.</li>
            <li>
              Fast‐track delivery available: Lodges can be handed over within{" "}
              <span className="font-semibold">4 to 6 months</span>, subject to
              availability and agreement.
            </li>
          </ul>
        </motion.div>

        {/* Footer Image */}
        <motion.div className="w-full flex flex-col md:flex-row items-center bg-white overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}>
          {/* Text Column */}
          <div className="w-full md:w-1/2  bg-opacity-60 p-8 md:p-16">
            <h3 className="text-2xl text-center md:text-3xl font-semibold text-[#142B2B] mb-4">
              Fully Furnished, Move-In Ready Lodges
            </h3>
            <p className="text-base text-center md:text-xl text-[#142B2B] leading-relaxed">
              Each lodge is delivered fully furnished, designed <br /> to offer a complete turnkey lifestyle.
              From elegant <br /> interiors and premium furniture to fully fixed <br /> kitchens and modern appliances,
              every unit is <br /> thoughtfully curated to provide the comfort, <br /> convenience, and luxury of a private
              mountain <br /> retreat — right from day one.
            </p>
          </div>

          {/* Image Column */}
          <div className="w-full md:w-1/2 h-auto">
            <img
              src={paymentpic}
              alt="Fully furnished lodge"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>






      {/* 3BED-TYPE 1 Section description */}

      <motion.div className="font-sans bg-white text-black relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}>
        {/* Top Image with Cloud Overlay */}
        <div className="relative w-full h-auto md:h-[100vh] overflow-hidden">
          <img
            src={modern1}
            alt="Barian Lodges"
            className="w-full h-full object-cover"
          />

          {/* Logo */}
          <img
            src={logo}
            alt="Barian Logo"
            className="absolute  top-10 left-10  h-16 md:h-32 bg-white p-3 rounded-lg shadow-lg"
          />
        </div>

        {/* Headings Positioned Separately, NOT inside image */}
        <motion.div className="relative z-10 font-montserrat font-semibold text-center py-8 px-4 md:py-16 md:px-20 bg-white mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >

          {/* Cloud only on desktop */}
          <img
            src={Cloud}
            alt="Cloud"
            className="hidden md:block absolute bottom-72 left-0 w-full h-full object-cover"
          />

          {/* Overlay text: static on mobile, absolute on md+ */}
          <div className="relative md:absolute md:top-24 md:left-1/2 md:transform md:-translate-x-1/2 text-center z-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}>
            <motion.h1 className="text-2xl md:text-5xl text-[#142B2B] font-bold mb-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}>
              1 Bed Lodges
            </motion.h1>
            <motion.h2 className="text-lg md:text-2xl font-semibold text-[#142B2B] mb-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}>
              Valley View Residences
            </motion.h2>
            <motion.p className="text-base md:text-xl text-[#c08d31] mb-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}>
              “The Signature of Modern Refinement”
            </motion.p>
          </div>

          {/* Main copy */}
          <motion.div className="mt-4 md:mt-56 bg-cover bg-no-repeat"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}>
            {/* <p className="max-w-3xl mx-auto font-bold text-[#142B2B] text-lg leading-relaxed mb-4">
              A Seamless Harmony of Elevation, Comfort & Contemporary Living
            </p> */}
            <p className="max-w-4xl mx-auto font-semibold text-[#142B2B] text-base md:text-lg leading-relaxed mb-8">
              Immersive Nature Living with Thoughtful Privacy & Cozy Elegance
              The Valleyview Villas at Barian Pine Lodges offer a unique hillside
              experience - nestled gently beneath road level and surrounded by
              nature on all sides. These two-level residences are designed for those
              who seek peaceful retreat-style living, with private terraces, lush green
              outlooks, and interiors that embrace calm, function and style.
            </p>
            <hr className="text-[#142B2B] my-6 w-1/2 mx-auto" />
            <p className="text-base md:text-xl font-semibold text-[#142B2B] max-w-xl mx-auto leading-relaxed pb-6">
              Each detail is tailored to maximize privacy, comfort, and forest immersion, while staying
              aligned with the Barian Pine Lodges vision of "Nature-Connected Luxury."
            </p>
          </motion.div>
        </motion.div>
      </motion.div>


      {/* 1BED-TYPE Garden Level Floor */}
      <div className="w-full">
        {/* Top Image */}
        <motion.div className="w-full overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}>
          <img
            src={Garden}
            alt="Top View"
            className="w-full h-auto md:h-[108vh] object-contain"
          />
        </motion.div>

        {/* Bottom Section */}
        <motion.div className="flex flex-col md:justify-around md:flex-row bg-white" initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}>
          {/* Left Side */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center">
            <img
              src={garendpic}
              alt="Front View"
              className="w-full h-auto rounded-md shadow-lg mb-4"
            />
            <p className="text-base md:text-2xl font-bold text-center text-[#142B2B]">
              “Comfort Grows Here.”
            </p>
          </div>

          {/* Right Side */}
          <div
            className={`
        ${CARD_WIDTH_CLASS}
        bg-[#e4ddca]
        p-6 md:p-10
        relative flex flex-col justify-center
        mx-auto md:mx-0
      `}
          >
            {/* Badge */}
            <div className="absolute top-6 right-6">
              <img src={BlackLogo} alt="Badge" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </div>

            {/* Heading */}
            <h2 className={`${HEADING_SIZE_CLASS} text-center  mb-6`}>

            </h2>

            {/* Description */}
            <p className={`${TEXT_SIZE_CLASS} text-center font-bold  leading-relaxed mb-8`}>
              Welcoming Designed for functional luxury step <br /> down into the Garden Level and you’re greeted
              <br />by an expansive living room with oversizes  <br />windows that frame the surrounding forest
              <br /> canopy. The open layout includes a smart  <br />kitchenette, a convenient  powder room, and a
              <br /> beautiful terrace sit- out  perfect for morning  <br />coffee, reading, or quiet reflection amid the  <br />sounds of nature. This level is
              ideal for entertaining or creating a cozy, self <br />
              <span className="block text-center">contained living space.</span>
            </p>

            {/* Stats */}
            <div className="space-y-2 text-center ">
              <p className={`${TEXT_SIZE_CLASS} font-semibold`}>
                <span className="font-bold">Covered Area:</span> 474.122 sft
              </p>
              <p className={`${TEXT_SIZE_CLASS} font-semibold`}>
                <span className="font-bold">Total Covered Area:</span>948.0 sft
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Forest Level Floor */}
      <motion.div className="w-full" initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}>
        {/* Top Image */}
        <div className="w-full overflow-hidden">
          <img
            src={forest}
            alt="Top View"
            className="w-full h-auto md:h-[108vh] object-contain"
          />
        </div>

        {/* Bottom Section */}
        <motion.div className="flex md:justify-around flex-col md:flex-row bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}>
          {/* Left Side */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center">
            <img
              src={forestpic}
              alt="Front View"
              className="w-full h-auto rounded-md shadow-lg mb-4"
            />
            <p className="text-base md:text-2xl font-bold text-center text-[#142B2B]">
              “The Forest, Refined.”
            </p>
          </div>

          {/* Right Side */}
          <div
            className={`
        ${CARD_WIDTH_CLASS}
        bg-[#e4ddca]
        p-6 md:p-10
        relative flex flex-col justify-center
        mx-auto md:mx-0
      `}
          >
            {/* Badge */}
            <div className="absolute  top-6 right-6">
              <img src={BlackLogo} alt="Badge" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
            </div>

            {/* Heading */}
            <h2 className={`${HEADING_SIZE_CLASS} text-center  mb-6`}>
              Forest Level Floor
            </h2>

            {/* Description */}
            <p className={`${TEXT_SIZE_CLASS} text-center font-bold   leading-relaxed mb-8`}>
              The Forest Level serves as the primary sleeping<br /> sanctuary. A spacious master bedroom with
              <br /> dedicated dressing area, an attached bathroom, <br />  and a second wide terrace complete the layout <br />
              offering direct connection to the compacted  <br />earth slope and hillside vegetation. The space is  <br />
              designed to feel immersive, insulated, and deeply relaxing.
            </p>

            {/* Stats */}
            <div className="space-y-2 text-center ">
              <p className={`${TEXT_SIZE_CLASS} font-semibold`}>
                <span className="font-bold">Covered Area:</span> 474.122 sft
              </p>
              <p className={`${TEXT_SIZE_CLASS} font-semibold`}>
                <span className="font-bold">Total Covered Area:</span> 948.0 sft
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* payment plan */}


      <motion.section
        className="relative w-full overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        {/* 1) Full-width hero image */}
        <div className="w-full h-auto">
          <img
            src={paymentpic2}
            alt="Barian Pine Lodges Payment Plan"
            className="w-full object-cover h-[60vh] md:h-[80vh]"
          />
        </div>

        {/* 2) White paper panel dropped below the image */}
        <motion.div
          className="relative w-full bg-white px-8 pt-20 pb-8 -mt-4"
            initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        >
          {/* Now your header & table live here */}
          <div className="flex flex-col items-center mb-8 text-[#142B2B]">
            <img src={Logo} alt="Barian Logo" className="h-20 mb-4" />
            <h1 className="text-3xl font-bold mb-1">24 MONTHS PAYMENT PLAN</h1>
            <h2 className="text-lg mt-1">1 Bed Lodges (Valley View)</h2>
            <div className="text-lg mt-2">
              <span className="font-bold">Floor Type:</span> Garden & Forest Floors (Valley View)<br />
              <span className="font-bold">Covered Area:</span> 948 SFT
            </div>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full table-fixed border-collapse border border-[#ddd] text-[#142B2B]">
              <thead>
                <tr>
                  <th
                    colSpan={3}
                    className="bg-[#e4ddca] p-3 text-center text-lg font-semibold border border-[#ddd]"
                  >
                    24 MONTHS INSTALLMENT PLAN
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Booking (30%)", "PKR. 3,611,880/-", "PAYABLE AT THE TIME OF BOOKING"],
                  ["Monthly Installments (24%)", "PKR. 96,317/-", "TWENTY FOUR INSTALLMENTS"],
                  ["Quarterly Installments (26%)", "PKR. 451,485/-", "EIGHT INSTALLMENTS"],
                  ["Possession (20%)", "PKR. 3,009,900/-", "PAYABLE UPON FINAL HANDOVER"],
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#f9f6eb]"}>
                    <td className="p-3 border border-[#ddd] text-lg">{row[0]}</td>
                    <td className="p-3 border border-[#ddd] text-lg">{row[1]}</td>
                    <td className="p-3 border border-[#ddd] text-lg">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-[#f9f6eb] font-bold">
                  <td colSpan={2} className="p-3 border border-[#ddd] text-right text-lg">
                    TOTAL PRICE
                  </td>
                  <td className="p-3 border border-[#ddd] text-lg">PKR. 12,039,600/-</td>
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Net Cash Plan */}
          <motion.div
            className="mb-8 text-lg flex flex-col items-center text-[#142B2B]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="font-semibold mb-2">Net Cash Payment Plan (Optional)</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Total price with 5% discount.</li>
              <li>Flexible payment terms available upon request.</li>
              <li>
                <span className="font-semibold">Fast‐track delivery available:</span> Lodges can be handed over within{" "}
                <span className="font-semibold">4 to 6 months</span>, subject to availability and agreement.
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>


    </div>
  );
};

export default MasterPlan;
