import React from "react";
import bedroomImg from "./bedroom1.webp";
import bathroomImg from "./bath1.webp";
import bed2 from "./bedroom2.webp";
import bath2 from "./bath2.webp";
import logo from "./logo_12345-removebg-preview.webp";
import bginterior from "./bginterior.webp";
import { motion } from "framer-motion";

const Interior = () => {
    return (
        <div>

                  {/* Background Section */}
      <div className="relative w-full h-[64vh] overflow-hidden"
      style={{ fontFamily: "Montserrat", textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
        <img src={bginterior} alt="Units Background" className="absolute top-0 left-0 w-full h-full " />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold"
          >
            Interior
          </motion.h1>
        </div>
      </div>

            <div className=" text-black py-12 "
                style={{ fontFamily: 'Montserrat', textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
                <div className="text-center text-[#c08d31] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-widest pb-10">
                    A LOVE STORY THAT NEVER ENDS
                    <div className="w-24 h-[1px] bg-[#c08d31] mx-auto mt-2"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-20">
                    <div className="col-span-2">
                        <img
                            src={bedroomImg}
                            alt="Master Bedroom"
                            className="w-full h-auto rounded shadow-lg"
                        />
                    </div>
                    <div>
                        <img
                            src={bathroomImg}
                            alt="Luxury Bathroom"
                            className="w-full h-auto rounded shadow-lg"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-20 mt-12 items-end">
                    <div className="hidden md:block">
                        <img src={logo} alt="Valor Vista Logo" className="h-32 w-auto" />
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-black text-xl leading-relaxed">
                            We have meticulously designed the master bedroom so whether your style is rustic or modern,
                            you are sure to find tranquillity in these design-savvy and dreamy master bedrooms. We have
                            created your dream bathroom that you won’t even want to leave in the morning.
                        </p>
                    </div>
                </div>

                <div className="mt-10 border-t border-[#c08d31] w-[90%] mx-auto" />
            </div>
            <div className="bg-[#1f4141] text-black py-12 "
                style={{ fontFamily: 'Montserrat', textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
                <div className="text-center text-[#c08d31] text-3xl sm:text-4xl md:text-5xl font-semibold tracking-widest pb-10">
                    YOUR PERSONAL RETREATS
                    <div className="w-24 h-[1px] bg-[#c08d31] mx-auto mt-2"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-20">
                    <div className="col-span-2">
                        <img
                            src={bed2}
                            alt="Master Bedroom"
                            className="w-full h-auto rounded shadow-lg"
                        />
                    </div>
                    <div>
                        <img
                            src={bath2}
                            alt="Luxury Bathroom"
                            className="w-full h-auto rounded shadow-lg"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-6 md:px-20 mt-12 items-end">
                    <div className="hidden md:block">
                        <img src={logo} alt="Valor Vista Logo" className="h-32 w-auto" />
                    </div>
                    <div className="md:col-span-2">
                        <p className="text-white text-xl leading-relaxed">
                            we have perfectly designed master bedroom for your comfortable sleep. Your most
                            private room is your bathroom and our stylish bathrooms assure that each time you
                            bathe you come out fresh and rejuvenated
                        </p>
                    </div>
                </div>

                <div className="mt-10 border-t border-[#c08d31] w-[90%] mx-auto" />
            </div>

                 {/* Video BEDS Section */}
                <div className="bg-[#1f4141] py-20 text-center text-white font-montserrat">
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-[#c08d31] mb-10">
                       Experience 3D Volar Vista Bed
                    </h2>
                    <div className="relative w-[90%] max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full  rounded-lg object-cover"
                        >
                            <source src="https://res.cloudinary.com/dz4eexjrs/video/upload/v1751368295/M_qzte6t.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                </div>
                 {/* Video Bath Section */}
                <div className="bg-[#1f4141] py-20 text-center text-white font-montserrat">
                     <div className="mt-10 mb-10 border-t border-[#c08d31] w-[90%] mx-auto" />
                    <h2 className="text-4xl md:text-5xl font-bold text-[#c08d31] mb-10">
                       Experience 3D Volar Vista Bath
                    </h2>
                    <div className="relative w-[90%] max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full  rounded-lg object-cover"
                        >
                            <source src="https://res.cloudinary.com/dz4eexjrs/video/upload/v1751368278/J_fbtaxy.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                </div>
                 {/* Video Kitchen Section */}
                <div className="bg-[#1f4141] py-20 text-center text-white font-montserrat">
                     <div className="mt-10 mb-10 border-t border-[#c08d31] w-[90%] mx-auto" />
                    <h2 className="text-4xl md:text-5xl font-bold text-[#c08d31] mb-10">
                       Experience 3D Volar Vista Kitchen
                    </h2>
                    <div className="relative w-[90%] max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full  rounded-lg object-cover"
                        >
                            <source src="https://res.cloudinary.com/dz4eexjrs/video/upload/v1751368284/K_dbhepd.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                </div>
                 {/* Video Tv lounge Section */}
                <div className="bg-[#1f4141] py-20 text-center text-white font-montserrat">
                     <div className="mt-10 mb-10 border-t border-[#c08d31] w-[90%] mx-auto" />
                    <h2 className="text-4xl md:text-5xl font-bold text-[#c08d31] mb-10">
                       Experience 3D Volar Vista Tv lounge
                    </h2>
                    <div className="relative w-[90%] max-w-5xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full  rounded-lg object-cover"
                        >
                            <source src="https://res.cloudinary.com/dz4eexjrs/video/upload/v1751368480/L_itenmj.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                </div>
        </div>
    );
};

export default Interior;
