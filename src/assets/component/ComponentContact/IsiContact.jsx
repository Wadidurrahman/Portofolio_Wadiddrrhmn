import React from "react";
import CardMedsos from "./CardMedsos";
import FormTable from "./FormTable";

const IsiContact = () => {
  const Data = [{ judul: "Jangan ragu untuk menghubungi saya" }, { subjudul: "Anda bisa hubungi saya melalui media sosial dibawah ini atau melalui isi form yang terlah tersedia" }];

  return (
    <>
      <div>
        {Data.map((item) => (
          <div key={item.judul} className="relative right-18 mb-2">
            <h1 className="text-lg font-semibold text-[#38BDF8]">{item.judul}</h1>
            <h1 className="text-sm text-gray-400 ">{item.subjudul}</h1>
          </div>
        ))}
        <CardMedsos />
        <FormTable />
      </div>
    </>
  );
};

export default IsiContact;
