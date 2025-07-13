import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import bgunit from "./unitbg.webp";
import heroImage from "./hEROBG.webp";
import logo from "./logo_12345-removebg-preview.webp";
import type2 from "./TYPE2.webp";
import modern1 from "./38.webp"
import modern2 from "./114.webp"


// 1kbh

import type1 from "./one/3type1.webp"
import first from "./one/3type2.webp"
import type3 from "./one/3type3.webp"
// 3kbh
import bedtype2 from "./three/bedtype2.webp"
import bedtype3 from "./three/bedtype3.webp";
import bedtype1 from "./three/bedtype1.webp"


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

  const UNITS = [{ name: "3 BED ", level: "TYPE-2", size: "174.54 SQM.", images: [type1, first, type3] }];
  const threeBKH = [{ name: "3 BED", level: "TYPE-1", size: "248.7 SQM.", images: [ bedtype2, bedtype3, bedtype1] }];
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

      {/* 3bed type-2 Section description */}
      <div className="bg-[#142B2B] text-white font-sans min-h-screen py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-16 py-8">
          <div className="w-full">
            <img src={heroImage} alt="Valor Vista Entrance" className="w-full rounded-lg shadow-xl" />
          </div>
          <div className="flex flex-col justify-center items-start space-y-6 p-4 md:p-8">
            <img src={logo} alt="Valor Vista Logo" className="h-80 w-80 object-contain" />
            <p className="text-[#c08d31] text-4xl font-medium">"Three Levels of <br />Elevated Living"</p>
          </div>
        </div>

        <div className="px-6 md:px-16 py-12 bg-[#1f4141] rounded-lg shadow-lg">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Text on the Left */}
            <div className="md:w-1/2 text-left">
              <h3 className="text-white text-2xl tracking-wide mb-4">3 BED VILLAS – TYPE 2</h3>
              <p className="text-white text-lg leading-relaxed">
                A Harmonious Blend of Space, Style & Functionality <br />
                The 3 Bed Villas ( Type 2 ) a t Valor Vista are designed t o redefine modern family
                living . Spanning across three efficiently planned levels, each villa offers a perfect
                balance o f privacy and openness, natural light and smart zoning .
              </p>
              <h3 className="text-white text-2xl tracking-wide mb-4">Ground Floor</h3>
              <p className="text-white text-lg leading-relaxed">
                Welcoming you with a covered private porch and car park, the ground floor features a spacious master
                bedroom with en-suite bath, offering convenience and comfort for guests or elders. The design also includes
                green buffers to maintain privacy and a welcoming visual aesthetic.
              </p>
              <h3 className="text-white text-2xl tracking-wide mb-4">First Floor</h3>
              <p className="text-white text-lg leading-relaxed">
                A contemporary open-plan kitchen, dedicated dining space, and bright lounge area flow seamlessly to encourage
                family bonding and entertaining. A powder room, laundry area, and hallway with vertical connection to other
                floors ensure convenience without clutter.
              </p>
              <h3 className="text-white text-2xl tracking-wide mb-4">Second Floor</h3>
              <p className="text-white text-lg leading-relaxed">
                This level includes two beautifully appointed bedrooms, a common bath, ample closet space, and a relaxing
                terrace sit-out, making it ideal for families who value both indoor and outdoor living experiences.
              </p>
      

            </div>

            {/* Image on the Right */}
            <div className="md:w-1/2">
              <img
                src={type2}
                alt="Valor Vista Alternate Angle"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/* 3BED-TYPE 2 Section */}
      <div className="bg-white h-full text-[#142B2B] text-center py-28">
        <h2 className="text-5xl md:text-6xl font-bold drop-shadow-lg">3BED-TYPE 2</h2>
        <div className='w-full flex justify-around'>
          <div className="relative w-80 mt-2 border-t my-12 border-gray-500"></div>
        </div>
        <div className="flex justify-around gap-10">
          {UNITS.map((unit, index) => (
            <div key={index} className="text-center flex flex-col items-center justify-around space-y-16">
              <div>
                <h3 className="text-4xl font-bold">{unit.name}</h3><br />
                <p className="text-3xl font-semibold">{unit.level}</p>
              </div>
              <p className="text-3xl font-semibold">{unit.size}</p>
              <button className="mt-4 px-4 py-2 bg-white border-2 border-[#142B2B] rounded-full text-black hover:bg-[#122424] hover:text-white" onClick={() => openSlider(unit.images)}>ENTER</button>
            </div>
          ))}
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
              <h3 className="text-white text-2xl tracking-wide mb-4">3 BED VILLAS – TYPE 1</h3>
              <p className="text-white text-lg leading-relaxed">
                Elevated Design for Modern Urban Living <br />
                The 3 Bed Villas ( Type 1 ) a t Valor Vista present a refined interpretation o f
                contemporary architecture , optimized for comfort , light , and elegance . With a
                wider frontage and larger plot depth , these villas are designed t o offer a grander
                sense o f space across three thoughtfully crafted levels.
              </p>
              <h3 className="text-white text-2xl tracking-wide mb-4">Ground Floor</h3>
              <p className="text-white text-lg leading-relaxed">
                Welcoming you with a covered private porch and car park, the ground floor features a spacious master
                bedroom with en-suite bath, offering convenience and comfort for guests or elders. The design also includes
                green buffers to maintain privacy and a welcoming visual aesthetic.
              </p>
              <h3 className="text-white text-2xl tracking-wide mb-4">First Floor</h3>
              <p className="text-white text-lg leading-relaxed">
                AThe first floor opens into a double lounge setting, ideal for family interaction and leisure. Two secondary
                bedrooms, both with built-in closets and shared luxury bath access, offer restful retreats for children or guests.
                This level enjoys abundant daylight through large fenestrations and includes seamless circulation through a wide
                central hallway.


              </p>
              <h3 className="text-white text-2xl tracking-wide mb-4">Second Floor</h3>
              <p className="text-white text-lg leading-relaxed">
                ThisThe rooftop is transformed into a private garden terrace, allowing homeowners to enjoy outdoor dining,
                evening gatherings, or quiet reflection under the sky. With space for custom pergolas or rooftop seating, this
                floor brings an extra layer of lifestyle elevation to your home.
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
        <h2 className="text-5xl md:text-6xl font-bold">3BED-TYPE 1</h2>
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
