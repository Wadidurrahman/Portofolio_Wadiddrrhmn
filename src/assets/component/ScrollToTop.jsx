import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
      console.log(showButton);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const smoothScroll = () => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
        requestAnimationFrame(smoothScroll);
      }
    };

    requestAnimationFrame(smoothScroll);
  };

  return (
    showButton && (
      <button onClick={scrollToTop} className="fixed bottom-8 right-4 z-50 bg-[#38BDF8] text-white hover:text-[#38BDF8] px-5 py-3 rounded-full shadow-xl hover:bg-gray-300 transition-colors duration-300">
        ↑
      </button>
    )
  );
};

export default ScrollToTop;
