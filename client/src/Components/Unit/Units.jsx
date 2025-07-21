import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import bgunit from "./unitbg.webp";
import heroImage from "./hEROBG.webp";
import logo from "./Logo.webp";
// import type2 from "./TYPE2.webp";
import Cloud from "./Cloud.webp";
import modern1 from "./38.webp"
import modern2 from "./114.webp"
import BlackLogo from "./BlackLogo.png"

// 1kbh

import type1 from "./one/3type1.jpeg"
import first from "./one/3type2.jpeg"
import type3 from "./one/3type3.jpeg"
import type4 from "./one/type3.jpeg"
// 2kbh
import bedtype2 from "./three/bedtype2.jpeg"
import bedtype3 from "./three/bedtype3.jpeg";


const MasterPlan = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openSlider = (images) => {
    setSelectedImages(images);
    setCurrentIndex(0);
  };

  const closeSlider = () => {
    setSelectedImages([]);
    setCurrentIndex(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1));
  };

  const UNITS = [{ name: "2 BED ", level: "TYPE-1", size: "1,973 STF.", images: [type1, first, type3, type4] }];
  const threeBKH = [{ name: "1 BED", level: "TYPE-1", size: "948 STF.", images: [bedtype2, bedtype3] }];
  // const SKYPLEX = [{ name: "Pent House", level: "PREMIUM", size: "221.35 SQM.", images: [Pent, Pent2, Pent3, Pent4, Pent5, Pent6, Pent7] }];

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
        <div className="relative w-full h-[100vh]">
          <img
            src={heroImage}
            alt="Barian Lodges"
            className="w-full h-full object-cover"
          />

          {/* Logo */}
          <img
            src={logo}
            alt="Barian Logo"
            className="absolute top-10 left-10 h-32 bg-white p-3 rounded-lg shadow-lg"
          />
        </div>

        {/* Headings Positioned Separately, NOT inside image */}
        <div className="relative z-10 font-montserrat font-semibold text-center py-16 px-4 md:px-20 bg-white">
          {/* Cloud Image Positioned Bottom */}
          <img
            src={Cloud}
            alt="Cloud"
            className="absolute bottom-80 left-0 w-full h-full object-cover"
          />

          {/* Overlay Text */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center z-20">
            <h1 className="text-5xl text-[#142B2B] font-bold mb-4">2 Bed Lodges</h1>
            <h2 className="text-2xl font-semibold text-[#142B2B] mb-2">Skyview Residences</h2>
            <p className="text-[#c08d31] text-xl mb-6">“Three Levels of Elevated Living”</p>
          </div>

          {/* Section with Background Image */}
          <div
            className="mt-56 bg-cover bg bg-no-repeat"
            style={{
            }}
          >
            <p className="max-w-3xl font-bold text-[#142B2B] mx-auto text-lg leading-relaxed mb-10 pt-16">
              A Seamless Harmony of Elevation, Comfort & Contemporary Living
            </p>
            <p className="max-w-4xl font-semibold mx-auto text-lg text-[#142B2B] leading-relaxed pb-8">
              The Skyview Villas at Barian Pine Lodges are thoughtfully designed to deliver an exceptional hillside living experience.
              Built on three vertically aligned floors above road level, each residence merges functional zoning with scenic luxury — offering residents space to breathe, relax, and reconnect with nature, all while enjoying the comfort of modern design.
            </p>

            <hr className="border-gray-300 my-8 w-1/2 mx-auto" />

            <p className="text-lg md:text-xl font-semibold text-[#142B2B] max-w-xl mx-auto leading-relaxed pb-16">
              Crafted with precision and nestled in nature, Skyview Villas reflect the Barian Pine Lodges vision of
              "Elevated Living in Harmony with Nature." These homes are not just functional — they're soulful, scenic, and timeless.
            </p>
          </div>
        </div>


      </div>


      {/* 2BED-TYPE 1 Section */}
     <div className="w-full">
  {/* Top Image */}
<div className="w-full">
  <img
    src={type1}
    alt="Top View"
    className="w-full h-[108vh] object-contain"  />
</div>

  {/* Bottom Section */}
 <div className="flex flex-col md:flex-row bg-white relative">
  {/* Left Side */}
  <div className="md:w-1/2 w-full flex flex-col p-6 md:p-8">
    <img
      src={heroImage} // 👈 Your left image
      alt="Front View"
      className="w-full h-auto rounded-md shadow-lg mb-4"
    />
    <p className=" text-lg md:text-xl font-medium text-center text-gray-800">
      “Where the first impression lasts forever”
    </p>
  </div>

  {/* Right Side */}
  <div className="md:w-1/2 w-full bg-[#f7f3eb] p-6 md:p-10 relative flex flex-col justify-center">
    {/* Badge */}
    <div className="absolute top-6 right-6">
      <img
        src={BlackLogo} // 👈 Your badge/logo
        alt="Badge"
        className="w-16 h-16 object-contain"
      />
    </div>

    {/* Heading */}
    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
      Ground Floor
    </h2>

    {/* Description */}
    <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-8">
      Welcoming As you enter directly from the road, the Ground Floor welcomes you with a secure double car garage, private entry lobby, storage, laundry zone, and a cozy rear-side terrace. This level offers a perfect mix of convenience and utility, ideal for both short stays and permanent living.
    </p>

    {/* Stats */}
    <div className="space-y-2">
      <p className="text-base md:text-lg font-semibold text-gray-800">
        <span className="font-bold">Covered Area:</span> 620.530 sft
      </p>
      <p className="text-base md:text-lg font-semibold text-gray-800">
        <span className="font-bold">Total Covered Area:</span> 1,973.00 sft
      </p>
    </div>
  </div>
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
      <div className="bg-white h-full text-[#142B2B] text-center py-28">
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
      </div>

      {/* Penthouse Section */}
      {/* <div className="bg-[#142B2B] h-full text-white text-center py-28">
        <h2 className="text-5xl md:text-6xl font-bold">Pent House</h2>
        <div className='w-full flex justify-around'>
          <div className="relative w-80 mt-2 border-t my-12 border-gray-500"></div>
        </div>
        <div className="flex justify-around">
          {SKYPLEX.map((PH, index) => (
            <div key={index} className="text-center flex flex-col items-center space-y-16">
              <div>
                <h3 className="text-4xl font-bold">{PH.name}</h3>
                <p className="text-3xl font-semibold">{PH.level}</p>
              </div>
              <p className="text-3xl font-semibold">{PH.size}</p>
              <button className="mt-4 px-4 py-2 bg-[#142B2B] text-white rounded-full border-2 border-transparent hover:bg-white hover:text-black hover:border-[#142B2B]" onClick={() => openSlider(PH.images)}>ENTER</button>
            </div>
          ))}
        </div>
      </div> */}

      {/* Slider Modal */}
      {selectedImages.length > 0 && (
        <div className="fixed inset-0 bg-[#142B2B] bg-opacity-80 flex justify-center items-center z-50">
          <div className="relative w-full max-w-7xl">
            <button className="absolute top-4 right-4 text-white z-10 bg-red-500 hover:bg-white hover:text-red-600 px-4 py-2 rounded-full" onClick={closeSlider}>Close</button>
            <div className="flex justify-center items-center h-[100vh] relative">
              <button className="absolute left-4 text-white bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-500" onClick={prevSlide}>◀</button>
              <img src={selectedImages[currentIndex]} alt="Floor Plan" className="rounded-lg max-h-[80vh] w-auto" />
              <button className="absolute right-4 text-white bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-500" onClick={nextSlide}>▶</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterPlan;
