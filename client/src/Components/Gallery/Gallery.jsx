import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import volarimprison from "./volarimprison.webp"
import logo from "./Logo.webp"
import volarimprison1 from "./volarimprison1.webp"
import volarimprison2 from "./volarimprison2.webp"
import volarimprison3 from "./volarimprison3.webp"
import volarimprison4 from "./volarimprison4.webp"
import volarimprison5 from "./volarimprison5.webp"
// slider
import ImageGallery1 from "./16.webp"
import ImageGallery2 from "./15.webp"
import ImageGallery3 from "./27.webp"
import ImageGallery4 from "./21.webp"
import ImageGallery5 from "./40.webp"
import ImageGallery6 from "./44.webp"
import ImageGallery7 from "./45.webp"
import ImageGallery8 from "./48.webp"
import ImageGallery9 from "./5.webp"
import ImageGallery10 from "./50.webp"
import ImageGallery11 from "./54.webp"
// import ImageGallery12 from "./61.webp"
// import ImageGallery13 from "./79.webp"
// import ImageGallery14 from "./9.webp"

const images = [ImageGallery1, ImageGallery2, ImageGallery3, ImageGallery4, ImageGallery5, ImageGallery6, ImageGallery7, ImageGallery8, ImageGallery9, ImageGallery10, ImageGallery11,];

export default function Exterior() {


    const [currentIndex, setCurrentIndex] = useState(0);

    // Manual navigation (still useful)
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    // ✅ Auto Slide every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 4000); // 4000ms = 4 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

    return (
        <div>
            {/* Background Section */}
            <div className="relative w-full h-[64vh] overflow-hidden">
                {/* <div className="w-full"> */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full rounded-lg object-cover"
                >
                    <source src="https://res.cloudinary.com/dz4eexjrs/video/upload/v1752904263/Clip_10_hjml5u.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* </div> */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center" style={{ fontFamily: '"Montserrat', textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px" }}>
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-6xl font-bold"
                    >
                        Exterior
                    </motion.h1>
                </div>
            </div>
            {/* Extrior 1 image and name  */}
            <div className="bg-[#142B2B] text-white font-sans min-h-screen py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-16 py-8">
                    <div className="w-full">
                        <img src={volarimprison1} alt="Valor Vista Entrance" className="w-full rounded-lg shadow-xl" />
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-6 p-4 md:p-8">
                        <img src={logo} alt="Valor Vista Logo" className="h-80 w-80 object-contain" />
                        <p className="text-[#c08d31] text-4xl font-medium">"WHERE FIRST  <br />    IMPRESSIONS LAST  <br />   FOREVER"</p>
                    </div>
                </div>

                <div className="px-6 md:px-16 py-12 bg-[#1f4141] rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row items-center gap-10">

                        {/* Left Image (replacing text) */}
                        <div className="md:w-1/2">
                            <img
                                src={volarimprison3}
                                alt="Valor Vista Side A"
                                className=" inset-0 w-full h-full object-cover blur-0 opacity-50 rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Right Image */}
                        <div className="md:w-1/2">
                            <img
                                src={volarimprison}
                                alt="Valor Vista Side B"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>

                    </div>
                </div>

            </div>
            {/* Extrior 2 image and name  */}
            <div className="bg-[#142B2B] text-white font-sans min-h-screen py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-16 py-8">
                    <div className="w-full">
                        <img src={volarimprison2} alt="Valor Vista Entrance" className="w-full rounded-lg shadow-xl" />
                    </div>
                    <div className="flex flex-col justify-center items-start space-y-6 p-4 md:p-8">
                        <img src={logo} alt="Valor Vista Logo" className="h-80 w-80 object-contain" />
                        <p className="text-[#c08d31] text-4xl font-medium">"WHERE FIRST <br />
                            IMPRESSIONS LAST <br />
                            FOREVER"</p>
                    </div>
                </div>

                <div className="px-6 md:px-16 py-12 bg-[#1f4141] rounded-lg shadow-lg">
                    <div className="flex flex-col md:flex-row items-center gap-10">

                        {/* Left Image (replacing text) */}
                        <div className="md:w-1/2">
                            <img
                                src={volarimprison5}
                                alt="Valor Vista Side A"
                                className=" inset-0 w-full h-full object-cover blur-0 opacity-50 rounded-lg shadow-lg"
                            />
                        </div>

                        {/* Right Image */}
                        <div className="md:w-1/2">
                            <img
                                src={volarimprison4}
                                alt="Valor Vista Side B"
                                className="w-full rounded-lg shadow-lg"
                            />
                        </div>

                    </div>
                </div>
                <div className="relative  w-full h-screen overflow-hidden">
                    {/* Main Image */}
                    <img
                        src={images[currentIndex]}
                        alt="Gallery"
                        className="w-full h-full object-contain md:object-cover transition-all duration-700 ease-in-out"
                    />


                    {/* Navigation Arrows */}
                    <button
                        className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
                        onClick={prevSlide}
                    >
                        <FaArrowLeft md:size={24} size={10} className="text-gray-800" />
                    </button>
                    <button
                        className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg"
                        onClick={nextSlide}
                    >
                        <FaArrowRight md:size={24} size={10} className="text-gray-800" />
                    </button>

                    {/* Thumbnails */}
                    <div className="hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2 bg-black bg-opacity-50 p-2 rounded-lg">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt="Thumbnail"
                                className={`w-16 h-12 object-cover cursor-pointer rounded-md transition-all duration-300 border-2 ${index === currentIndex ? "border-white" : "border-transparent"
                                    }`}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </div>


                </div>
                <div className="mt-10 mb-10 border-t border-[#c08d31] w-[90%] mx-auto" />

                {/* Video Showcase Section */}
                <div className="bg-[#1f4141] py-20 text-center text-white font-montserrat">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium text-[#c08d31] mb-10">
                      EXPERIENCE 3D BARIAN  Motion
                    </h2>
                    <div className="relative w-[90%] max-w-7xl  mx-auto rounded-lg overflow-hidden shadow-2xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full  rounded-lg object-cover"
                        >
                            <source
                                src="https://res.cloudinary.com/dz4eexjrs/video/upload/v1752904274/Clip_12_1_jqyzgg.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>



                {/* Video 3bed type 2 Section */}
                <div className="bg-[#1f4141] py-20 text-center text-white font-montserrat">
                    <div className="mt-10 mb-10 border-t border-[#c08d31] w-[90%] mx-auto" />

                    <div className="relative w-[90%] max-w-7xl  mx-auto rounded-lg overflow-hidden shadow-2xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full  rounded-lg object-cover"
                        >
                            <source src="https://res.cloudinary.com/dz4eexjrs/video/upload/v1752904184/Clip_3_ne0741.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                </div>

                {/* Video 3bed type 1 Section */}
                <div className="bg-[#1f4141] py-20 text-center text-white font-montserrat">
                    <div className="mt-10 mb-10 border-t border-[#c08d31] w-[90%] mx-auto" />

                    <div className="relative w-[90%] max-w-7xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full  rounded-lg object-cover"
                        >
                            <source src="https://res.cloudinary.com/dz4eexjrs/video/upload/v1752904258/Clip_4_sn3kg3.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                    </div>
                </div>

            </div>






        </div>
    );
}
