import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import bgunit from "./unitbg.webp";
import heroImage from "./hEROBG.webp";
import logo from "./Logo.webp";
// import type2 from "./TYPE2.webp";
import Cloud from "./Cloud.webp";
import Logo from "./Logo.webp";
import LodgeImage from "./38.webp";
import modern1 from "./38.webp"
import modern2 from "./114.webp"
import BlackLogo from "./BlackLogo.png"

// 1kbh

import type1 from "./one/3type1.jpeg"
import type2 from "./one/3type2.jpeg"
import type3 from "./one/3type3.jpeg"
import type4 from "./one/type3.jpeg"
// 2kbh
// import bedtype2 from "./three/bedtype2.jpeg"
// import bedtype3 from "./three/bedtype3.jpeg";


const MasterPlan = () => {
  const CARD_WIDTH_CLASS = "w-11/12 md:w-1/3 max-w-md";        // container width
  const HEADING_SIZE_CLASS = "text-2xl md:text-4xl";            // heading font size
  const TEXT_SIZE_CLASS = "text-base md:text-lg";           // paragraph font size




  // const UNITS = [{ name: "2 BED ", level: "TYPE-1", size: "1,973 STF.", images: [type1, first, type3, type4] }];
  // const threeBKH = [{ name: "1 BED", level: "TYPE-1", size: "948 STF.", images: [bedtype2, bedtype3] }];

  return (
    <div style={{ fontFamily: 'Montserrat' }}>
      <div className="relative w-full h-[64vh] overflow-hidden">
        <img src={bgunit} alt="Units Background" className="absolute top-0 left-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-6xl font-bold">
            UNITS
          </motion.h1>
        </div>
      </div>

      {/* 2bed type-1 Section description */}
      <div className="font-sans bg-white text-black relative">
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
        <div className="relative z-10 font-montserrat font-semibold text-center py-8 px-4 md:py-16 md:px-20 bg-white mb-0">

          {/* Cloud only on desktop */}
          <img
            src={Cloud}
            alt="Cloud"
            className="hidden md:block absolute bottom-80 left-0 w-full h-full object-cover"
          />

          {/* Overlay text: static on mobile, absolute on md+ */}
          <div className="relative md:absolute md:top-24 md:left-1/2 md:transform md:-translate-x-1/2 text-center z-20">
            <h1 className="text-2xl md:text-5xl text-[#142B2B] font-bold mb-2">
              2 Bed Lodges
            </h1>
            <h2 className="text-lg md:text-2xl font-semibold text-[#142B2B] mb-1">
              Skyview Residences
            </h2>
            <p className="text-base md:text-xl text-[#c08d31] mb-6">
              “Three Levels of Elevated Living”
            </p>
          </div>

          {/* Main copy */}
          <div className="mt-4 md:mt-56 bg-cover bg-no-repeat">
            <p className="max-w-3xl mx-auto font-bold text-[#142B2B] text-lg leading-relaxed mb-4">
              A Seamless Harmony of Elevation, Comfort & Contemporary Living
            </p>
            <p className="max-w-4xl mx-auto font-semibold text-[#142B2B] text-base md:text-lg leading-relaxed mb-8">
              The Skyview Villas at Barian Pine Lodges are thoughtfully designed to deliver an
              exceptional hillside living experience. Built on three vertically aligned floors
              above road level, each residence merges functional zoning with scenic luxury —
              offering residents space to breathe, relax, and reconnect with nature.
            </p>
            <hr className="border-gray-300 my-6 w-1/2 mx-auto" />
            <p className="text-base md:text-xl font-semibold text-[#142B2B] max-w-xl mx-auto leading-relaxed pb-6">
              Crafted with precision and nestled in nature, Skyview Villas reflect the Barian
              Pine Lodges vision of "Elevated Living in Harmony with Nature." These homes are
              not just functional — they're soulful, scenic, and timeless.
            </p>
          </div>
        </div>
      </div>


      {/* 2BED-TYPE ground */}
      <div className="w-full">
        {/* Top Image */}
        <div className="w-full overflow-hidden">
          <img
            src={type1}
            alt="Top View"
            className="w-full h-auto md:h-[108vh] object-contain"
          />
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:justify-around md:flex-row bg-white">
          {/* Left Side */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center">
            <img
              src={heroImage}
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
        bg-[#f7f3eb]
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
        </div>
      </div>

      {/* 2BED-TYPE second floor */}
      <div className="w-full">
        {/* Top Image */}
        <div className="w-full overflow-hidden">
          <img
            src={type2}
            alt="Top View"
            className="w-full h-auto md:h-[108vh] object-contain"
          />
        </div>

        {/* Bottom Section */}
        <div className="flex md:justify-around flex-col md:flex-row bg-white">
          {/* Left Side */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center">
            <img
              src={heroImage}
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
        bg-[#f7f3eb]
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
        </div>
      </div>
      {/* 2BED-TYPE  Second Floor */}
      <div className="w-full">
        {/* Top Image */}
        <div className="w-full overflow-hidden">
          <img
            src={type3}
            alt="Top View"
            className="w-full h-auto md:h-[108vh] object-contain"
          />
        </div>

        {/* Bottom Section */}
        <div className="flex md:justify-around flex-col md:flex-row bg-white">
          {/* Left Side */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center">
            <img
              src={heroImage}
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
        bg-[#f7f3eb]
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
              The private bedroom zone offers two<br />   elegant rooms with wide windows, smart
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
                <span className="font-bold">Total Covered Area:</span> 1,973.00 sft
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* 2BED-TYPE  Rooftop */}
      <div className="w-full">
        {/* Top Image */}
        <div className="w-full overflow-hidden">
          <img
            src={type2}
            alt="Top View"
            className="w-full h-auto md:h-[108vh] object-contain"
          />
        </div>

        {/* Bottom Section */}
        <div className="flex md:justify-around flex-col md:flex-row bg-white">
          {/* Left Side */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center">
            <img
              src={heroImage}
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
        bg-[#f7f3eb]
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
        </div>
      </div>
      <div className="max-w-3xl mx-auto p-8 bg-white font-sans text-gray-900">


        {/* payment plan */}
      {/* Header */}
      <div className="flex flex-col items-center mb-8">
        <img src={Logo} alt="Barian Logo" className="h-16 mb-4" />
        <h1 className="text-2xl font-bold">Barian Pine Lodges</h1>
        <p className="mt-2 text-center">
          <span className="font-semibold">24 MONTHS PAYMENT PLAN</span><br/>
          <span className="text-sm">2 Bed Lodges (Hill & Valley View)</span>
        </p>
        <p className="mt-2 text-sm">
          <span className="font-medium">Floor Type:</span> Ground Floor to Roof Top (Skyview)<br/>
          <span className="font-medium">Covered Area:</span> 1,973 SFT
        </p>
      </div>

      {/* Installment Table */}
      <table className="w-full table-fixed border border-gray-300 mb-8">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border-r">24 MONTHS INSTALLMENT PLAN</th>
            <th className="p-2 border-r">PKR Amount</th>
            <th className="p-2">Payable</th>
          </tr>
        </thead>
        <tbody>
          <tr className="odd:bg-white even:bg-gray-50">
            <td className="p-2 border-t border-r">Booking (30%)</td>
            <td className="p-2 border-t border-r">PKR 7,517,130/-</td>
            <td className="p-2 border-t">At Time of Booking</td>
          </tr>
          <tr>
            <td className="p-2 border-t border-r">Monthly Installments (24%)</td>
            <td className="p-2 border-t border-r">PKR 2,281,711/-</td>
            <td className="p-2 border-t">24 Installments</td>
          </tr>
          <tr>
            <td className="p-2 border-t border-r">Quarterly Installments (26%)</td>
            <td className="p-2 border-t border-r">PKR 2,834,646/-</td>
            <td className="p-2 border-t">8 Installments</td>
          </tr>
          <tr>
            <td className="p-2 border-t border-r">Possession (20%)</td>
            <td className="p-2 border-t border-r">PKR 5,246,275/-</td>
            <td className="p-2 border-t">On Final Handover</td>
          </tr>
          <tr className="font-bold bg-gray-100">
            <td className="p-2 border-t border-r">TOTAL PRICE</td>
            <td className="p-2 border-t border-r">PKR 25,050,000/-</td>
            <td className="p-2 border-t"></td>
          </tr>
        </tbody>
      </table>

      {/* Optional Net Cash Plan */}
      <div className="mb-8">
        <h2 className="font-semibold mb-2">Net Cash Payment Plan (Optional)</h2>
        <ul className="list-disc list-inside text-sm">
          <li>Total Price with 5% Discount.</li>
          <li>Flexible payment terms available upon request.</li>
          <li>Fast-track delivery available: Lodges can be handed over within 4 to 6 months, subject to availability and agreement.</li>
        </ul>
      </div>

      {/* Footer Image */}
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img src={LodgeImage} alt="Fully furnished lodge" className="w-full object-cover" />
      </div>
    </div>






      {/* 3BED-TYPE 1 Section description */}

      <div className="bg-[#142B2B] text-white font-sans min-h-screen py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-16 py-8">
          <div className="w-full">
            <img src={modern1} alt="Valor Vista Entrance" className="w-full rounded-lg shadow-xl" />
          </div>
          <div className="flex flex-col justify-center items-start space-y-6 p-4 md:p-8">
            <img src={logo} alt="Valor Vista Logo" className="h-80 w-80 object-contain" />
            <p className="text-[#c08d31] text-4xl font-medium">The Signature of <br /> Modern Refinement"</p>

          </div>
        </div>

        <div className="px-6 md:px-16 py-12 bg-[#1f4141] rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text on the Left */}
            <div className="md:w-1/2 text-left">
              <h3 className="text-white text-2xl tracking-wide mb-4"> 1 BED LODGES – VALLEYVIEW RESIDENCES</h3>
              <p className="text-white text-lg leading-relaxed">
                Immersive Nature Living with Thoughtful Privacy & Cozy Elegance<br />
                The Valleyview Villas at Barian Pine Lodges offer a unique hillside experience—
                nestled gently beneath road level and surrounded by nature on all sides. These
                two-level residences are designed for those who seek peaceful retreat-style
                living, with private terraces, lush green outlooks, and interiors that embrace
                calm, function, and style.
                Immersive Nature Living with Thoughtful Privacy & Cozy Elegance
              </p>
              <br />
              <h3 className="text-white text-2xl tracking-wide mb-4">Garden Level Floor</h3>
              <p className="text-white text-lg leading-relaxed">
                Welcoming Designed for functional luxury Step down into the Garden Level
                and you’re greeted by an expansive living room with oversizes windows that frame the surrounding forest
                canopy. The open layout includes a smart kitchenette, a convenient powder room, and a beautiful terrace sit
                out—perfect for morning coffee, reading, or quiet reflection amid the sounds of nature.
              </p>
              <br />
              <h3 className="text-white text-2xl tracking-wide mb-4">Forest Level Floor</h3>
              <p className="text-white text-lg leading-relaxed">
                The Forest Level serves as the primary sleeping sanctuary. A spacious master
                bedroom with dedicated dressing area, an attached bathroom, and a second wide terrace complete the layout
                —offering direct connection to the compacted earth slope and hillside vegetation. The space is designed to
                feel immersive, insulated, and deeply relaxing.
                These units feature independent access and can serve as standalone residences,
                private guest quarters, or luxury rental suites—making Valley view ideal for
                personal use or passive investment.


              </p>


            </div>

            {/* Image on the Right */}
            <div className="md:w-1/2">
              <img
                src={modern2}
                alt="Valor Vista Alternate Angle"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 3BED-TYPE 1 Section */}
      {/* <div className="bg-white h-full text-[#142B2B] text-center py-28">
        <h2 className="text-5xl md:text-6xl font-bold">1 BED LODGES – SKYVIEW RESIDENCES</h2>
        <div className='w-full flex justify-around'>
          <div className="relative w-80 mt-2 border-t my-12 border-gray-500"></div>
        </div>
        <div className="flex justify-around">
          {threeBKH.map((BKH, index) => (
            <div key={index} className="text-center flex flex-col items-center space-y-16">
              <div>
                <h3 className="text-4xl font-bold">{BKH.name}</h3>
                <p className="text-3xl font-semibold">{BKH.level}</p>
              </div>
              <p className="text-3xl font-semibold">{BKH.size}</p>
              <button className="mt-4 px-4 py-2 bg-[#142B2B] text-white rounded-full border-2 border-transparent hover:bg-white hover:text-black hover:border-[#142B2B]" onClick={() => openSlider(BKH.images)}>ENTER</button>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default MasterPlan;
