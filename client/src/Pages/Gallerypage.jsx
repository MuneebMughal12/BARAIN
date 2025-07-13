// import React from 'react'
// import Gallery from '../Components/Gallery/Gallery'
import { lazy, Suspense, useState, useEffect } from 'react'
import loadingImage from '../assets/logo_12345-removebg-preview.png';
const Gallery = lazy(() => import('../Components/Gallery/Gallery'))
import { FaLongArrowAltUp } from "react-icons/fa";


const Gallerypage = () => {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center h-screen bg-[#142B2B] ">
          <img
            src={loadingImage}
            alt="Loading..."
            className="w-96 h-96 mb-4 "
          />
        </div>
      }

    >
      <div>
        <Gallery />


           {/* Scroll to Top Button */}
                {showButton && (
                  <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 left-4 z-50 bg-white text-black px-4 py-2 rounded-full shadow-md hover:bg-[#c08d31] transition-all"
                  >
                    <FaLongArrowAltUp />
                  </button>
                )}
      </div>
    </Suspense>
  )
}

export default Gallerypage