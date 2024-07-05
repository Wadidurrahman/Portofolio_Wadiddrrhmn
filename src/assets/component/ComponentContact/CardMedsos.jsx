import React from "react";
import IconWa from "../../AsetIconContact/wa.png";
import IconGmail from "../../AsetIconContact/gmail.png";
import IconTele from "../../AsetIconContact/telegram.png";

const CardMedsos = () => {
  const Data = [
    { id: "1", judul: "Whatsapp", icon: IconWa, url: "+62***********", disc: "Send Us a Message" },
    { id: "2", judul: "Gmail", icon: IconGmail, url: "wadiddrrhmn@gmail.com", disc: "Send Us a Message" },
    { id: "3", judul: "Telegram", icon: IconTele, url: "+62**********", disc: "Send Us a Message" },
  ];

  return (
    <div className="relative justify-center items-center left-28 flex gap-10 cursor-pointer  ">
      {Data.map((item) => (
        <div key={item.id} className="relative flex right-20 mt-2 px-8 py-4 border-2 border-gray-200 hover:border-[#38BDF8] duration-300 shadow-lg rounded-lg gap-4">
          <div className="relative py-4">
            <img src={item.icon} alt={item.judul} className="w-10 h-10 " />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-[#38BDF8]">{item.judul}</h1>
            <p className="text-sm text-gray-400">{item.url}</p>
            <p className="text-sm text-[#38BDF8] font-semibold">{item.disc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardMedsos;
