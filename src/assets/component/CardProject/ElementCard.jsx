import React, { useState } from "react";
import ImgProject1 from "../../aset-project/p1.png";
import ImgProject2 from "../../aset-project/p2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faHtml5, faCss3Alt, faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import ModalDetail from "./ModalDetail";
import { color } from "framer-motion";
import Icontailwindcss from "../../Icons/Tailwind_CSS_Logo.svg";

const ElementCard = () => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "", image: "" });

  const cards = [
    {
      id: 1,
      image: ImgProject1,
      description: "Website Portofolio  ",
      languages: [
        { icon: faHtml5, color: "#E34F26" },
        { icon: faCss3Alt, color: "#1572B6" },
        { icon: faJs, color: "#F0DB4F" },
        { icon: faPhp, color: "#61DAFB" },
      ],
      buttons: {
        demo: "Demo",
        detail: "Detail",
      },
      demoLink: "https://portofolio-wadidurrahman.vercel.app/",
      detailContent:
        "Ini adalah projeck website portofolio pertama saya, yang menampilkan berbagai proyek yang telah saya kerjakan sebelumnya. Portofolio ini memanfaatkan teknologi-teknologi seperti HTML5, CSS3, JavaScript, dan PHP untuk mengembangkan berbagai aplikasi web. Melalui portofolio ini, saya berupaya untuk menunjukkan kemampuan saya dalam merancang, mengembangkan, dan mengimplementasikan solusi-solusi digital yang kreatif dan fungsional. Setiap proyek dilengkapi dengan tautan demo aplikasi dan detail teknisnya, memungkinkan pengunjung untuk menjelajahi dan memahami lebih dalam tentang setiap karya yang saya hasilkan.",
    },
    {
      id: 2,
      image: ImgProject2,
      description: "Website Juragan Ikan  ",
      languages: [{ icon: faHtml5, color: "#E34F26" }, { icon: faCss3Alt, color: "#1572B6" }, { icon: faJs, color: "#F0DB4F" }, { icon: faReact, color: "#61DAFB" }, { src: Icontailwindcss }],
      buttons: {
        demo: "Demo",
        detail: "Detail",
      },
      demoLink: "https://juraganikan-4czua4jwp-wadiddrrhmns-projects.vercel.app/",
      detailContent:
        "Juragan Ikan adalah sebuah platform digital yang dirancang khusus untuk membantu peternak ikan dalam mengelola berbagai aspek operasional peternakan mereka secara efisien dan efektif. Karena masih menggunakan metode tradisional, pencatatan data dalam peternakan ikan seringkali menghadapi sejumlah tantangan yang dapat mempengaruhi efisiensi operasional dan akurasi data. Seperti kehilangan data yang penting, kesalahan dalam perhitungan, serta keterbatasan waktu dan tenaga dalam proses pencatatan manual. ",
    },
  ];
  const card2 = [];

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const handleDetailClick = (title, content, image) => {
    setModalContent({ title, content, image });
    setIsDetailModalOpen(true);
  };

  const closeModal = () => {
    setIsDetailModalOpen(false);
  };

  return (
    <>
      <main>
        <div className="grid grid-cols-3 gap-4 w-full h-full cursor-pointer">
          {cards.map((card, index) => (
            <div key={index} className="relative border rounded-md shadow-md overflow-hidden">
              <div className="relative">
                <img className="w-full h-full object-cover rounded-md" src={card.image} alt={card.description} />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 flex justify-center items-center">
                  <p className="text-white text-xl">{card.description}</p>
                </div>
              </div>
              <div className="relative flex p-2">
                <h1>Bahasa :</h1>
                <div className="relative px-2 space-x-2">
                  {card.languages.map((lang, index) => (
                    <FontAwesomeIcon key={index} icon={lang.icon} size="1x" color={lang.color} />
                  ))}
                </div>
              </div>
              <div className="relative flex gap-4 p-2">
                <button className="border-2 border-[#38BDF8] text-[#38BDF8] px-2 py-1 rounded-lg text-md font-semibold hover:bg-[#38BDF8] hover:text-white duration-300 shadow-sm" onClick={() => handleDemoClick(card.demoLink)}>
                  {card.buttons.demo}
                </button>
                <button
                  className="border px-2 py-1 text-white rounded-lg font-semibold bg-[#38BDF8] text-md hover:bg-gray-300 hover:text-white duration-300 shadow-sm"
                  onClick={() => handleDetailClick(card.description, card.detailContent, card.image)}
                >
                  {card.buttons.detail}
                </button>
              </div>
            </div>
          ))}
          <ModalDetail isOpen={isDetailModalOpen} onClose={closeModal} title={modalContent.title} content={modalContent.content} image={modalContent.image} />
        </div>
      </main>
    </>
  );
};

export default ElementCard;
