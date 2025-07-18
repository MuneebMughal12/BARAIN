import { lazy, Suspense, useState, useEffect } from 'react';
import { FaLongArrowAltUp } from "react-icons/fa";
import loadingImage from '../assets/Logo.webp'; 

// Lazy load Twobed component
const Twobed = lazy(() => import('../Components/Unit/twobed/Twobed'));

const Unitspage = () => {
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
        <div className="flex flex-col items-center justify-center h-screen bg-[#142B2B]">
          <img
            src={loadingImage}
            alt="Loading..."
            className="w-96 h-96 mb-4"
          />
        </div>
      }
    >
      <div>
        <Twobed />
        {/* Scroll to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-white text-black p-3 rounded-full shadow-md hover:bg-[#c08d31] transition-all"
          >
            <FaLongArrowAltUp size={20} />
          </button>
        )}
      </div>
    </Suspense>
  );
};

export default Unitspage;
