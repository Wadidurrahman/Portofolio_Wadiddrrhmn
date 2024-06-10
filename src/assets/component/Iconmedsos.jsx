import React, { useState } from "react";
import { FaTiktok, FaGithub, FaInstagram } from "react-icons/fa";

const Iconmedsos = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  const icons = [
    { name: "TikTok", icon: <FaTiktok size={18} /> },
    { name: "GitHub", icon: <FaGithub size={18} /> },
    { name: "Instagram", icon: <FaInstagram size={18} /> },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {icons.map((item) => (
        <div key={item.name} className="relative mb-5" onMouseEnter={() => handleMouseEnter(item.name)} onMouseLeave={handleMouseLeave}>
          <a href="#" className="text-gray-400 hover:text-gray-600 transition duration-300">
            {item.icon}
          </a>
          {hoveredIcon === item.name && (
            <div className="absolute left-full ml-2 -top-4 flex items-center">
              <span className="relative text-sm text-white bg-[#38BDF8] px-2 py-1 rounded">
                {item.name}
                <span className="absolute left-0 transform -translate-x-full w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#38BDF8] mt-1.5"></span>
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Iconmedsos;
