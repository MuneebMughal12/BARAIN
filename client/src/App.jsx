import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Amenities from "./Pages/Amenitie";
import Unitspage from "./Pages/Unitspage";
import Gallerypage from "./Pages/Gallerypage";
import Contactus from "./Pages/Contactus";
import Download from "./Pages/Download";
import Interior from "./Pages/Interior";
import Logo from "./assets/logo_12345-removebg-preview.png"; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => setIsLoading(false), 500); // Optional delay
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (isLoading) {
    return (
         <div className="flex flex-col items-center justify-center h-screen bg-[#142B2B] ">
               <img
                 src={Logo}
                 alt="Loading..."
                 className="w-96 h-96 mb-4 "
               />
              
             </div>
    );
  }

  return (
    <Router>
      <div>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/units" element={<Unitspage />} />
          <Route path="/exterior" element={<Gallerypage />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/project-team" element={<Download />} />
          <Route path="/interior" element={<Interior />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
