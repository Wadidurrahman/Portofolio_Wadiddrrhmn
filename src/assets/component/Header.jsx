import React, { useState, useEffect } from "react";
import { FaTiktok, FaGithub, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 20;

      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`${visible ? "" : "transform -translate-y-full transition-transform duration-300 ease-in-out"} backdrop-blur-lg p-4 `} style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0 relative">
        <div className="flex justify-start items-center space-x-4 md:pl-4">
          <a href="#" className="text-gray-400 hover:text-gray-600 transition duration-300">
            <FaTiktok size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition duration-300">
            <FaGithub size={18} />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition duration-300">
            <FaInstagram size={18} />
          </a>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-[#38BDF8] font-bold text-2xl cursor-pointer">Wadidurrhmn.</h1>
        </div>

        <div className="flex justify-end items-center space-x-2 md:pr-4 text-xs text-gray-400">
          <a href="mailto:email@example.com" className="flex items-center space-x-2 hover:text-gray-600 transition ease-in-out">
            <FaEnvelope />
            <span>wadiddrrhmn@gmail.com</span>
          </a>
          <a href="tel:1234567890" className="flex items-center space-x-2 hover:text-gray-600 transition ease-in-out">
            <FaPhone />
            <span>+6285328785368</span>
          </a>
        </div>
      </div>
      <hr className="w-full my-4" style={{ background: "linear-gradient(to left, gray, white 50%, gray)" }} />
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4 font-semibold">
        <a href="#" className="text-gray-500 hover:text-[#38BDF8] transition duration-300 hover-underline">
          Home
        </a>
        <a href="#" className="text-gray-500 hover:text-[#38BDF8] transition duration-300 hover-underline">
          About Me
        </a>
        <a href="#" className="text-gray-500 hover:text-[#38BDF8] transition duration-300 hover-underline">
          Projects
        </a>
        <a href="#" className="text-gray-500 hover:text-[#38BDF8] transition duration-300 hover-underline">
          Experience
        </a>
        <a href="#" className="text-gray-500 hover:text-[#38BDF8] transition duration-300 hover-underline">
          Blogs
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
