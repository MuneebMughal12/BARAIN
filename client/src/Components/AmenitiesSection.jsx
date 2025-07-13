import React from "react";
import {
  FaCreditCard,
  FaClock ,
  FaHardHat,
  FaCamera,
  FaUserCog,
  FaBuilding,
  FaCogs,
  FaKey,
  FaCar,
  FaPercentage,
  FaTools,
  FaRegFileAlt,
  FaRulerCombined,
  FaMicrochip,
  FaSwimmingPool,
  FaDumbbell,
  FaSolarPanel,
} from "react-icons/fa";

const reasons = [
  { icon: <FaCreditCard />, text: <>Ease of<br />Payment</> },
  { icon: <FaClock  />, text: <>Timely Delivered<br />Projects</> },
  { icon: <FaHardHat />, text: <>Best Structure<br />Design Team</> },
  { icon: <FaCamera />, text: <>Triple Monitoring<br />and Surveillance</> },
  { icon: <FaUserCog />, text: <>Employing the Best<br />M.E.P.</> },
  { icon: <FaBuilding />, text: <>Modernized Facilities,<br />Features & Benefits</> },
  { icon: <FaCogs />, text: <>Customization Options<br />Available</> },
  { icon: <FaKey />, text: <>Ease of<br />Access</> },
  { icon: <FaKey />, text: "Gated Community" },
  { icon: <FaCar />, text: <>Each Apartment<br />Own Parking</> },
  { icon: <FaPercentage />, text: <>Discount<br />Options</> },
  { icon: <FaTools />, text: <>Free Maintenance<br />(3 Month)</> },
  { icon: <FaRegFileAlt />, text: <>Transferral on<br />Project Completion</> },
  { icon: <FaRulerCombined />, text: <>High Ceilings &<br />Spacious Design</> },
  { icon: <FaMicrochip />, text: <>Technologically Updated<br />Infrastructure</> },
  { icon: <FaSwimmingPool />, text: "Swimming Pool" },
  { icon: <FaDumbbell />, text: "Gym" },
  { icon: <FaSolarPanel />, text: <>Solar & Generator<br />Backup</> },
];


const WhyUsSection = () => {
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-[#142B2B] text-white relative mt-1">
            {/* Left Side: Title */}
            <div className="w-full md:w-1/3 flex items-center justify-center text-center p-12 relative">
                <h2 className="text-6xl font-bold text-white tracking-wide relative" style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "73px",
                    fontWeight: "bold",
                    lineHeight: "1.5em",
                    letterSpacing: "0.08rem",
                    textAlign: "center",
                    textShadow:
                        "#c8c8c8 1px 1px 0px, #b4b4b4 0px 2px 0px, #a0a0a0 0px 3px 0px, rgba(140, 140, 140, 0.498039) 0px 4px 0px, #787878 0px 0px 0px, rgba(0, 0, 0, 0.498039) 0px 5px 10px",
                }}>
                    WHY US?
                </h2>
            </div>

            {/* Right Side: Reasons Grid */}
            <div className="w-full md:w-2/3 p-8">
                <h3 className="text-xl font-semibold text-center mb-6 uppercase" style={{
                    fontFamily: "futura-lt-w01-light, futura-lt-w05-light, sans-serif",
                    fontSize: "26px",
                    lineHeight: "1.8em",
                    textAlign: "center",
                    textShadow: "rgba(0, 0, 0, 0.4) 0px 4px 5px",
                }}>
                    There are a number of reasons which will compel you to invest through Sapphire
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {reasons.map((item, index) => (
                        <div key={index} className="relative p-6 bg-gray-700 text-white border border-gray-600 shadow-lg flex flex-col items-center text-center">
                            <div className="text-4xl mb-3 text-[#c08d31]">{item.icon}</div>
                            <p className="text-lg font-medium">{item.text}</p>
                            
                            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gray-600 opacity-30"></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyUsSection;
