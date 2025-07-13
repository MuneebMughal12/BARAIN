import React from "react";
import "tailwindcss/tailwind.css";
import Aminities from "./Amenities.webp";
import { motion } from "framer-motion";
import Gym from "./gym.webp"
import Gym2 from "./gym2.webp";
import pool from "./Pool.webp";
import pool2 from "./Pool2.webp";
import Rooftop from "./Roop1.webp"
import Rooftop2 from "./roop2.webp";
import imagineBg from "./imagine.webp";
import Child from "./playingarea.webp";
import Child2 from "./playingarea2.webp";



const Amenities = () => {
  return (
    <div style={{
      fontFamily: 'Montserrat',
      textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px",
    }}>
      {/* Background image */}
      <div className="relative w-full h-[64vh] overflow-hidden">
        <img src={Aminities} alt="Units Background" className="absolute top-0 left-0 w-full h-full" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}

            className="text-6xl font-bold"
          >
            Aminities
          </motion.h1>
        </div>
      </div>
      {/* Hero Section */}
      <div className="relative w-full h-[323px] bg-cover bg-center" style={{ backgroundImage: `url(${imagineBg})` }}>
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        <div className="absolute gap-3 inset-0 flex flex-col items-center justify-center text-[#142B2B] bg-black/50">
          <h1 className="text-6xl italic">imagine</h1>
          <p className="mt-2 text-center text-2xl max-w-7xl">
            <strong>LIFESTYLES WITH FACILITIES <br /></strong>OF THE FUTURE
          </p>
        </div>
      </div>

      <section className="bg-[#142B2B] py-10 px-4">
        {/* Section Blocks */}
        {[{
          img: Gym,
          title: '"BEST SLICE OF LIFE"',
          isTextLeft: false
        }, {
          img: Gym2,
          text: `Our living space Stay energized and empowered in our state-ofthe-art fitness center.
Designed for both beginners and seasoned athletes , the fully
equipped gym at Valor Vista offers a motivating environment to
help you stay active and focused . Whether it's early morning
cardio or late-night strength training, this wellness space is your
personal gateway to a healthier , balanced lifestyle —just steps
from home`,
          isTextLeft: true
        }, {
          img: pool,
          title: <>"WHERE WATER <br /> MEETS WELLNESS"</>,
          isTextLeft: false
        }, {
          img: pool2,
          text: `Dive into luxury with our serene swimming pool
experience .
Unwind, refresh, and recharge in the crystal-clear waters of Valor
Vista’s private swimming pool. Whether you're enjoying a
relaxing evening swim, cooling off under the sun, or simply
lounging poolside, this tranquil oasis offers a perfect escape
designed to elevate your lifestyle and soothe your senses.`,
          isTextLeft: true
        }, {
          img: Rooftop,
          title: <>"YOUR MOMENT <br />
            UNDER THE SKY"</>,
          isTextLeft: false
        }, {
          img: Rooftop2,
          text: `Relax beneath the sky i n our pergola open
sitting space .Nestled within the tranquil setting of Valor Vista, the pergola
lounge invites you to unwind in comfort and style. Whether you'
re enjoying your morning coffee, reading a book in the afternoon
breeze, or hosting a quiet evening with friends, this thoughtfully
designed open-air retreat blends natural shade with architectural
beauty—creating the perfect spot to connect, reflect, and breathe.`,
          isTextLeft: true
        }, {
          img: Child,
          title: <>"HAPPY SPACES FOR <br />
            LITTLE FACES"</>,
          isTextLeft: false
        }, {
          img: Child2,
          text: `Where imagination comes t o life .
The Kids’ Play Area at Valor Vista is thoughtfully designed to
provide a safe, joyful, and engaging environment for your little
ones. With vibrant play structures, soft surfaces, and secure
surroundings, it’s the perfect place for children to explore, make
friends, and enjoy carefree fun—just steps from home.`,
          isTextLeft: true
        }
        ].map(({ img, title, text, isTextLeft }, idx) => (
          <div key={idx} className="grid grid-cols-1 md:grid-cols-2 items-center mt-10">
            {/* Text Block */}
            <motion.div
              className={`
      flex items-center justify-center p-10
      order-1
      ${isTextLeft ? "md:order-1" : "md:order-2"}
    `}
            >
              {title ? (
                <h2 className={`text-2xl md:text-4xl font-bold text-white text-center ${isTextLeft ? "md:text-left" : "md:text-right"}`}>
                  {title}
                </h2>
              ) : (
                <p className={`text-lg md:text-xl text-white text-center ${isTextLeft ? "md:text-left" : "md:text-right"}`}>
                  {text}
                </p>
              )}
            </motion.div>

            {/* Image Block */}
            <div
              className={`
      relative overflow-hidden
      order-2
      ${isTextLeft ? "md:order-2" : "md:order-1"}
    `}
            >
              <motion.img src={img} alt="section image" className="w-full h-[572px] object-cover" />
            </div>
          </div>

        ))}

      </section>
    </div>
  );
};

export default Amenities;
