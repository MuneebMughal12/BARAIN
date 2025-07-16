import React from "react";
import { motion } from "framer-motion";
import townHouseImage from "../assets/townHouseImage.webp"; // Update with your image path

// const features = [
//   "A fully equipped Gym for a healthy lifestyle",
//   "Outdoor Swimming Pool & Lounge Decks to unwind in style",
//   "Kids’ Play Area for joyful childhood moments",
//   "Library & Pergola Sitting Zones for quiet reflection or social engagement",
//   "Party Lawn & Open Sitting Spaces to bring the community together",
//   "Dedicated Parking & Wide Internal Roads ensuring convenience and flow",
// ];

const TownHouseSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bg-[#142B2B] text-white w-full font-sans">

      {/* Left Content */}
      <div className="relative flex flex-col justify-start px-4 py-8 sm:px-8 lg:p-12 space-y-5">
        <div className="z-10">
          <div className="flex flex-col items-start  lg:items-center text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl items-center ">Elevated Living Amidst <br /> <span className="block text-center"> Nature’s Majesty</span> </h2>
            <hr className="border-yellow-500 w-60 md:w-48 mt-1 mb-4" />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">BARIAN PINE LODGES</h1>
            <hr className="border-yellow-500 w-60  md:w-48 mt-1 mb-4" />


          </div>

          <div className="space-y-5 text-sm leading-relaxed text-gray-200">
            <div>
              <p className="font-bold text-xl sm:text-2xl mb-1 text-white">About Barian Pine Lodges</p>
              <p className="text-base font-semibold sm:text-lg">
                A Tranquil Mountain Retreat in the Heart of Murree
                Welcome to Barian Pine Lodges – <br /> a limited collection of contemporary
                hillside residences nestled in the pine-clad slopes <br /> of Mohra Bhatian,
                Murree. Located just Rati gali Stop, Oppsite Baraian Cant, Murree <br /> and
                surrounded by nature’s serenity, this exclusive development by <br />
                GeoCon Enterprises offers a harmonious blend   of architectural <br />
                elegance, panoramic views, and purposeful design.
              </p>
            </div>

            <div>
              <p className="text-base font-semibold sm:text-lg"> Crafted with attention to detail, each lodge is a private vertical retreat, <br />
                thoughtfully structured to align with the natural terrain and elevate the <br />
                experience of mountain living.</p>
            </div>
            <div>

              <p className="font-bold text-xl sm:text-2xl mb-1 text-white"> Dual-Zone Villas with Elevated Design</p>
            </div>
            <div>
              <p className="font-bold text-xl sm:text-2xl mb-1 text-white"> Barian Pine Lodges feature a unique split-level planning concept:</p>

            </div>
            <div>
              <p className="font-bold text-xl sm:text-2xl mb-1 text-white"> Sky view Residences (Above Road):</p>
              <p className="text-base font-semibold sm:text-lg">
                Stylish 3-floor homes featuring garage entry, open lounges, dining, <br />
                kitchen, and airy bedrooms with panoramic balconies and rooftop
                terraces.
              </p>
            </div>
            <div>
              <p className="font-bold text-xl sm:text-2xl mb-1 text-white">Valley view Residences (Below Road):</p>
              <p className="text-base font-semibold sm:text-lg">
                Garden and Forest level units with independent access, cozy living <br />
                areas, kitchenettes, private terraces, and direct connection to natural
                landscapes.
              </p>
            </div>
            <div>
              <p className="text-base font-semibold sm:text-lg">
                Each unit is a seamless fusion of indoor comfort and outdoor charm —
                ideal <br /> for serene holiday homes, vacation rentals, or permanent
                residences in nature’s lap.
              </p>
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
