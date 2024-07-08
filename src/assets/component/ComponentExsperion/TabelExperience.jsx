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

  return (
    <main>
      {data.map((item) => (
        <div key={item.id} className="relative flex justify-center items-center w-full h-full gap-8 text-sm mt-4 border-solid border-2 border-[#003f82] shadow-lg px-2 py-12 rounded-lg mx-auto" style={{ backgroundColor: item.warna }}>
          <img src={item.logo} alt="logo" className="w-45 h-20 rounded-lg" />
          <div className="text-white">
            <h1 className="text-lg font-semibold">{item.judul}</h1>
            <p className="text-sm">{item.by}</p>
            <p className="text-sm mt-2">{item.date}</p>
            {item.discription.map((desc, index) => (
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
          <div className="relative mb-44">
            <h4 className="relative justify-end border border-gray-500 bg-[#38BDF8] p-2 rounded-lg font-semibold text-sm text-white cursor-pointer">{item.subjudul}</h4>
          </div>
        </div>
      ))}
    </main>
  );
};

export default TabelExperience;
