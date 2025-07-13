import React from "react";
import TowerImage2 from "../assets/106.webp";
import { Link } from "react-router-dom";

const UnitsSection = () => {
  return (
    <div>
     

      {/* Units Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 lg:h-screen items-center">
        {/* Image - Spanning 2 columns on large screens */}
        <div className="lg:col-span-2">
          <img
            src={TowerImage2}
            alt="Luxury Apartment"
            className="w-full h-auto lg:h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* Text content */}
        <div className="flex flex-col items-center text-center lg:text-left space-y-6">
          <h2 className="text-2xl sm:text-5xl font-semibold tracking-wide text-[#142B2B]">
            UNITS
          </h2>
          <div className="space-y-2 sm:space-y-4">
            <p className="text-lg sm:text-2xl font-bold text-[#142B2B]">TOWN HOUSES</p>
            <p className="text-lg sm:text-2xl font-bold text-[#142B2B]">3 Bed Apartments <br  />  <span className="block text-center">TYP-1</span></p>
            <p className="text-lg sm:text-2xl font-bold text-[#142B2B]">3 Bed Apartments <br />  <span className="block text-center">TYP-2</span></p>
          </div>
          <Link to="/units" className="no-underline">
            <button className="mt-4 sm:mt-6 bg-[#142B2B] text-white px-4 sm:px-6 py-2 font-semibold rounded-md hover:bg-[#c08d31] transition">
              View More →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnitsSection;
