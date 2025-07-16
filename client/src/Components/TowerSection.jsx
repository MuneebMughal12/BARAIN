import React from "react";
import { motion } from "framer-motion";
import skydle from "../assets/skydle.webp";

const TowerSection = () => {

  return (
    <div className="w-full">

      {/* Info Section */}
      <div className="grid bg-[#ffffff] text-[#142B2B] grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-16 py-10 items-center">
        {/* Image Side */}
        <div className="w-full  mt-10 lg:mt-0">
          <img src={skydle} alt="Skydle" className="w-full h-full rounded-xl shadow-lg" />
        </div>
        {/* Text Content */}
        <div className="flex flex-col   justify-center text-center lg:text-left space-y-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
            A SANCTUARY OF
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold ">
            ELEVATED MOUNTAIN LIVING
          </h2>
          <p className="text-base sm:text-lg font-medium">
            Crafted for those who seek calm, beauty, and refinement, Barian Pine Lodges redefines
            hillside living with a seamless blend of architecture and nature . These thoughtfully
            designed vertical villas are more than just residences —they are a quiet celebration of
            elevated lifestyle, framed by pine forests and panoramic valley views.
          </p>
          <p className="text-base sm:text-lg font-medium">
            With split-level planning that aligns with the natural contours of the land, each unit
            features open interiors, private terraces, and dual exposure to both road and forest
            views. Whether it’s the light-filled lounges, rooftop sitting areas, or secluded garden
            zones , every corner of Barian Pine Lodges is purposefully crafted for peaceful ,
            meaningful living.
          </p>
          <p className="text-base sm:text-lg font-medium">
            Barian Pine Lodges reflects a forward-thinking design approach—integrating minimalistic
            architecture with the natural terrain while preserving the existing tree line and
            environment . Built with climate-conscious orientation and sustainable construction
            practices , the project minimizes its ecological footprint while maximizing resident
            comfort.
          </p>
          <p className="text-base sm:text-lg font-medium">
            Set against the backdrop of Murree’s tranquil pine-covered hills, Barian Pine Lodges
            is more than a place to live—it’s a lifestyle rooted in serenity, sophistication, and a
            timeless connection with nature.
          </p>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-3 text-lg font-semibold text-[#142B2B]">
            {[
              { number: "12", label: " Lodges" },
              { number: "6", label: "2 Bed Apartments", type: "TYP-1" },
              { number: "6", label: "1 Bed Apartments", type: "TYP-1" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-2xl sm:text-3xl  font-bold">{item.number}</p>
                <hr className="w-6 sm:w-8 border-t-2 text-[#142B2B] my-1" />
                <p className="text-sm sm:text-base text-[#142B2B] uppercase">{item.label}</p>
                <p className="text-sm sm:text-base text-[#142B2B] uppercase">{item.type}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>

  );
};

export default TowerSection;
