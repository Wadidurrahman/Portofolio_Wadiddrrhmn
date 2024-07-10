import React, { useState } from "react";
import PopupSertifikat from "./PopupSartifikat";
import LogoMerdeka from "../../AsetExperience/logoMerdeka.png";
import LogoIL from "../../AsetExperience/logoIL.png";
import LogoAlibabaCloud from "../../AsetExperience/alibabacloud.png";
import LogoCodepolitan from "../../AsetExperience/codepolitan.jpg";
import SertifikatAlibabaCloud from "../../AsetExperience/sartifikatalibaba.jpg";
import SertifikatCodepolitan from "../../AsetExperience/sartifikatcodepolitan (1).png";

const TabelExperience = () => {
  const [showPopupId, setShowPopupId] = useState(null);
  const [popupImages, setPopupImages] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const togglePopup = (id, images) => {
    setPopupImages(images);
    setShowPopupId(showPopupId === id ? null : id);
  };

  const data = [
    {
      id: "1",
      logo: LogoMerdeka,
      by: "@Kemendikbudristek",
      judul: "Kampus Merdeka (MBKM)",
      subjudul: "Studi Independen",
      date: "26 Juni 2024",
      warna: "#007BFF",
      discription: [
        {
          subjudul2: "Keahlian yang Dipelajari:",
          isi: [
            "Pengembangan website dengan menggunakan teknologi terkini.",
            "Implementasi praktik terbaik dalam industri pengembangan web.",
            "Penerapan desain responsif untuk memastikan pengalaman pengguna yang optimal.",
            "Integrasi dengan API dan layanan backend untuk fungsionalitas yang lebih kompleks.",
            "Pengelolaan proyek dan kolaborasi dalam tim untuk pencapaian tujuan bersama.",
          ],
        },
      ],
    },
    {
      id: "2",
      logo: LogoIL,
      by: "@PT.KINEMA SYSTRANS MULTIMEDIA",
      judul: "Kampus Merdeka (MBKM)",
      subjudul: "Web Development & UI/UX",
      date: "23 Juni 2024",
      warna: "#757575",
      discription: [
        {
          subjudul2: "Keahlian yang Dipelajari:",
          isi: [
            "Pengembangan website dengan menggunakan teknologi terkini.",
            "Implementasi praktik terbaik dalam industri pengembangan web.",
            "Penerapan desain responsif untuk memastikan pengalaman pengguna yang optimal.",
            "Integrasi dengan API dan layanan backend untuk fungsionalitas yang lebih kompleks.",
            "Pengelolaan proyek dan kolaborasi dalam tim untuk pencapaian tujuan bersama.",
          ],
        },
      ],
    },
    {
      id: "3",
      logo: LogoAlibabaCloud,
      by: "@ Alibaba Group",
      judul: "Alibaba Cloud",
      subjudul: "Web Development",
      date: "23 Juni 2024",
      warna: "#FF8C00",
      discription: [
        {
          subjudul2: "Keahlian yang Dipelajari:",
          isi: [
            "Pengembangan website dengan menggunakan teknologi terkini.",
            "Implementasi praktik terbaik dalam industri pengembangan web.",
            "Penerapan desain responsif untuk memastikan pengalaman pengguna yang optimal.",
            "Integrasi dengan API dan layanan backend untuk fungsionalitas yang lebih kompleks.",
            "Pengelolaan proyek dan kolaborasi dalam tim untuk pencapaian tujuan bersama.",
          ],
        },
      ],
    },
    {
      id: "4",
      logo: LogoCodepolitan,
      by: "@PT.CodePolitan Media Utama",
      judul: "Alibaba Cloud",
      subjudul: "Front End",
      date: "23 Agustus 2023",
      warna: "#000000",
      discription: [
        {
          subjudul2: "Keahlian yang Dipelajari:",
          isi: [
            "Pengembangan website dengan menggunakan teknologi terkini.",
            "Implementasi praktik terbaik dalam industri pengembangan web.",
            "Penerapan desain responsif untuk memastikan pengalaman pengguna yang optimal.",
            "Integrasi dengan API dan layanan backend untuk fungsionalitas yang lebih kompleks.",
            "Pengelolaan proyek dan kolaborasi dalam tim untuk pencapaian tujuan bersama.",
          ],
        },
      ],
    },
  ];

  const previousCard = () => {
    setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => Math.min(prevIndex + 1, data.length - 1));
  };

  return (
    <main className="overflow-hidden">
      <div className="flex items-center justify-center h-full">
        <div
          className="relative flex justify-center items-center w-[80%] px-4 py-2 gap-8 text-sm mt-2 border-solid border-2 border-[#003f82] shadow-lg rounded-lg mx-auto transform transition-transform duration-300"
          style={{ backgroundColor: data[currentCardIndex].warna }}
        >
          <img src={data[currentCardIndex].logo} alt="logo" className="w-45 h-20 rounded-lg" />
          <div className="text-white ml-4 flex flex-col justify-between">
            <div className="flex">
              <div className="">
                <h1 className="text-lg font-semibold">{data[currentCardIndex].judul}</h1>
                <p className="text-sm">{data[currentCardIndex].by}</p>
                <p className="text-sm mt-2">{data[currentCardIndex].date}</p>
                {data[currentCardIndex].discription.map((desc, index) => (
                  <div key={index}>
                    <h2 className="mt-4 text-white font-semibold">{desc.subjudul2}</h2>
                    <ul className="mt-2 text-white list-disc pl-5">
                      {desc.isi.map((isi, idx) => (
                        <li key={idx} className="mt-2">
                          {isi}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="relative  w-1/2">
                <h4 className="relative justify-end border border-gray-500 bg-[#38BDF8]  p-2 text-center rounded-lg font-semibold text-sm text-white cursor-pointer">{data[currentCardIndex].subjudul}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 mx-auto max-w-screen-lg space-x-2">
        {data.map((item, index) => (
          <div key={item.id} className={`w-2 h-2 rounded-full bg-gray-400 ${index === currentCardIndex ? "bg-blue-600" : ""}`} />
        ))}
      </div>
      <div className="relative -top-60 flex justify-between mx-auto max-w-screen-lg cursor-pointer">
        <button className="bg-[#38BDF8] hover:bg-gray-300 duration-300 text-white hover:text-[#38BDF8] px-4 py-2 rounded-lg shadow-lg" onClick={previousCard} disabled={currentCardIndex === 0}>
          {"<"}
        </button>
        <button className="bg-[#38BDF8] hover:bg-gray-300 duration-300 text-white hover:text-[#38BDF8] px-4 py-2 rounded-lg shadow-lg" onClick={nextCard} disabled={currentCardIndex === data.length - 1}>
          {">"}
        </button>
      </div>
    </main>
  );
};

export default TabelExperience;
