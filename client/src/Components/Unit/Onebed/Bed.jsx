import React, { useState } from 'react';
import bgteam from "../unitbg.webp";
import { motion } from "framer-motion";
import img1 from "./1 Bed Lodges Furnished_1.webp";
import img2 from "./1 Bed Lodges Furnished_2.webp";
import img3 from "./1 Bed Lodges Furnished_3.webp";
import img4 from "./1 Bed Lodges Furnished_4.webp";
import img5 from "./1 Bed Lodges Furnished_5.webp";

const Bed = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const images = [img1, img2, img3, img4, img5];

  return (
    <div>
      {/* Background Section */}
      <div
        className="relative w-full h-[64vh] overflow-hidden"
        style={{
          fontFamily: "Montserrat",
          textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px",
        }}
      >
        <img
          src={bgteam}
          alt="Units Background"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold"
          >
            1 BED
          </motion.h1>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex flex-col">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className={`relative w-full h-screen overflow-hidden cursor-pointer`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            onClick={() => setFullscreenImage(img)}
          >
            <img
              src={img}
              alt={`Unit ${index + 1}`}
              className={`absolute top-0 ${
                index % 2 === 0 ? "left-0" : "right-0"
              } w-full h-full object-cover`}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-30 hover:bg-opacity-50 transition duration-300 flex items-center justify-center text-white text-4xl">
              VIEW IMAGE
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen View */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Bed;
