import React from "react";
import { motion } from "framer-motion";
import townHouseImage from "../assets/townHouseImage.png"; // Update with your image path

const features = [
  "A fully equipped Gym for a healthy lifestyle",
  "Outdoor Swimming Pool & Lounge Decks to unwind in style",
  "Kids’ Play Area for joyful childhood moments",
  "Library & Pergola Sitting Zones for quiet reflection or social engagement",
  "Party Lawn & Open Sitting Spaces to bring the community together",
  "Dedicated Parking & Wide Internal Roads ensuring convenience and flow",
];

const TownHouseSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-[#142B2B] text-white w-full font-sans">

      {/* Left Content */}
      <div className="relative flex flex-col justify-start px-4 py-8 sm:px-8 lg:p-12 space-y-5">
        <div className="z-10">
          <div className="flex flex-col items-start  lg:items-center text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">VALOR VISTA</h1>
            <p
              className="text-xl sm:text-2xl lg:text-3xl mt-2"
              style={{
                textShadow:
                  "rgba(10, 189, 240, 0.298) 3px 3px 0px, rgba(254, 1, 1, 0.298) -3px -3px 0px",
              }}
            >
              REDEFINE YOUR LIFE STYLE
            </p>

            <p className="tracking-wide text-lg sm:text-xl mt-6 uppercase font-medium">
              Designed for Lifestyles <br /> of the Next Century
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">TOWN HOUSES</h2>
            <hr className="border-yellow-500 w-24 mt-1 mb-4" />
          </div>

          <div className="space-y-5 text-sm leading-relaxed text-gray-200">
            <div>
              <p className="font-bold text-xl sm:text-2xl mb-1 text-white">About Valor Vista</p>
              <p className="text-sm sm:text-base">
                Welcome to Valor Vista—an exclusive enclave of modern 3-bedroom villas thoughtfully
                designed to redefine luxury living in Ghana. Nestled in Kwabenya, Greater Accra,
                this gated community combines architectural excellence, curated lifestyle features,
                and serene green surroundings to deliver a truly elevated residential experience.
              </p>
            </div>

            <div>
              <p className="font-bold text-xl sm:text-2xl mb-1 text-white">Modern Villas with Purposeful Design</p>
              <p className="text-sm sm:text-base">
                Type-1 & Type-2 Villas offer 3-bedroom layouts with private parking, open-plan living
                areas, rooftop terraces, and green courtyards—perfect for the modern family.
              </p>
            </div>

            <div>
              <p className="font-bold text-xl sm:text-2xl mb-1 text-white">Community-Centered Amenities</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-white text-sm sm:text-xl"
                    style={{ textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Building Image */}
      <div className="relative">
        <motion.img
          src={townHouseImage}
          alt="Valor Vista Town Houses"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-screen object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>
    </section>
  );
};

export default TownHouseSection;
