import React, { useState, useEffect } from "react";
import { FaTiktok, FaGithub, FaInstagram, FaEnvelope, FaPhone, FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [navOpen, setNavOpen] = useState(false);

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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  const handleNavClick = (navItem) => {
    setActiveNav(navItem);
    setNavOpen(false);
  };

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={`${visible ? "" : "transform -translate-y-full transition-transform duration-300 ease-in-out"} backdrop-blur-lg p-4 relative`} style={{ position: "sticky", top: 0, zIndex: 1000 }}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#38BDF8] font-bold text-xl px-10">Wadidurrhmn.</div>
        <div className="hidden md:flex space-x-4 font-semibold relative right-[8rem]">
          {["Home", "About Me", "Projects", "Experience", "Blogs"].map((item) => (
            <a key={item} href="#" className={`nav-a relative text-gray-400 hover:text-[#38BDF8] transition duration-300 ${activeNav === item ? "text-[#38BDF8]" : ""}`} onClick={() => handleNavClick(item)}>
              {item}
              <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-[#38BDF8] transition-all duration-300 transform -translate-x-1/2 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4 relative right-10">
          <button onClick={toggleDarkMode} className="text-gray-500 hover:text-[#38BDF8] transition duration-300">
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNav} className="text-gray-500 hover:text-[#38BDF8] transition duration-300">
            {navOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${navOpen ? "block" : "hidden"}  md:hidden backdrop-blur-xl p-4 absolute rounded-lg left-60 text-right`}>
        {["Home", "About Me", "Projects", "Experience", "Blogs"].map((item) => (
          <a key={item} href="#" className={`block py-2 px-4 text-white hover:bg-[#1ca1db]  transition duration-300 rounded-lg ${activeNav === item ? "bg-[#1ca1db] rounded-lg " : ""}`} onClick={() => handleNavClick(item)}>
            {item}
          </a>
        ))}
        <button onClick={toggleDarkMode} className="mt-4 text-gray-200 hover:text-white transition duration-300 w-full text-left px-4 py-2">
          {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
