import React, { useState } from "react";
import ImgProject1 from "../../aset-project/p1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faHtml5, faCss3Alt, faPhp } from "@fortawesome/free-brands-svg-icons";
import ModalDetail from "./ModalDetail";

const ElementCard = () => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });

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
  ];

  const handleDemoClick = (demoLink) => {
    window.open(demoLink, "_blank");
  };

  const handleDetailClick = (title, content) => {
    setModalContent({ title, content });
    setIsDetailModalOpen(true);
  };

  const closeModal = () => {
    setIsDetailModalOpen(false);
  };

  return (
    <div className="grid grid-cols-3 gap-4 w-full h-full cursor-pointer">
      {cards.map((card) => (
        <div key={card.id} className="relative border rounded-md shadow-md overflow-hidden">
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
            <button className="border px-2 py-1 rounded-lg text-md hover:bg-[#38BDF8] hover:text-white duration-300 shadow-sm" onClick={() => handleDemoClick(card.demoLink)}>
              {card.buttons.demo}
            </button>
            <button className="border px-2 py-1 rounded-lg bg-[#38BDF8] text-md hover:bg-gray-300 hover:text-white duration-300 shadow-sm" onClick={() => handleDetailClick(card.description, card.detailContent)}>
              {card.buttons.detail}
            </button>
          </div>
        </div>
      ))}
      <ModalDetail isOpen={isDetailModalOpen} onClose={closeModal} title={modalContent.title} content={modalContent.content} />
    </div>
  );
};

export default ElementCard;
