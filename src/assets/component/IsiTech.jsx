import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faHtml5, faCss3Alt, faNodeJs, faReact, faPhp, faGithub, faVuejs, faGolang } from "@fortawesome/free-brands-svg-icons";
import Icontailwindcss from "../Icons/Tailwind_CSS_Logo.svg";
import Iconexspressjs from "../Icons/expressjs-ar21.svg";
import Iconmysql from "../Icons/mysql.svg";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { color } from "framer-motion";

const icons = [
  { icon: faJs, color: "#F0DB4F", name: "JavaScript", description: "JavaScript adalah bahasa skrip serbaguna yang terutama digunakan untuk pengembangan web." },
  { icon: faHtml5, color: "#E34F26", name: "HTML5", description: "HTML5 adalah evolusi terbaru dari standar yang mendefinisikan HTML." },
  { icon: faCss3Alt, color: "#1572B6", name: "CSS3", description: "CSS3 adalah versi terbaru dari bahasa Cascading Style Sheets." },
  { icon: faNodeJs, color: "#68A063", name: "Node.js", description: "Node.js adalah runtime JavaScript yang dibangun di atas mesin JavaScript V8 milik Chrome." },
  { icon: faReact, color: "#61DAFB", name: "React", description: "React adalah pustaka JavaScript untuk membangun antarmuka pengguna." },
  { icon: faPhp, color: "#777BB4", name: "PHP", description: "PHP adalah bahasa skrip umum yang populer, khususnya cocok untuk pengembangan web." },
  { icon: faVuejs, color: "#42b883", name: "Vue.js", description: "Vue.js adalah kerangka kerja JavaScript progresif untuk membangun antarmuka pengguna." },
  { src: Icontailwindcss, name: "TailwindCSS", description: "Tailwind CSS adalah kerangka kerja CSS berbasis utilitas untuk membangun antarmuka pengguna khusus dengan cepat.", isImage: true },
  { src: Iconexspressjs, name: "Express.js", description: "Express.js adalah kerangka kerja web minimalis, cepat, dan tidak berpendapat untuk Node.js.", isImage: true },
  { icon: faGithub, color: "#000", name: "GitHub", description: "GitHub adalah platform hosting kode untuk kontrol versi dan kolaborasi." },
  { src: Iconmysql, name: "MySQL", description: "MySQL adalah sistem manajemen basis data relasional sumber terbuka.", isImage: true },
];

const MyComponent = () => {
  return (
    <div className="relative bg-gray-200 rounded-md p-10 space-x-10 shadow-md flex flex-wrap justify-center ">
      {icons.map((icon, index) => (
        <div key={index} className="relative group inline-block m-4">
          <div className="flex flex-col items-center">
            {icon.isImage ? (
              <img src={icon.src} alt={icon.name} className="h-20 w-20 rounded-md bg-white p-2" />
            ) : (
              <div className="rounded-md p-3 bg-white shadow-md">
                <FontAwesomeIcon icon={icon.icon} size="3x" color={icon.color} />
              </div>
            )}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex flex-col items-center transition-opacity duration-300 opacity-0 group-hover:opacity-100 delay-100">
              <div className="bg-white text-black text-center p-2 rounded-lg shadow-lg w-48">
                <h3 className="font-bold text-sm text-[#38BDF8]">{icon.name}</h3>
                <p className="text-sm text-gray-400">{icon.description}</p>
              </div>
              <div className="w-3 h-3 bg-white transform rotate-45 -mt-2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
