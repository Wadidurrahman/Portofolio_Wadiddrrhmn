import React from "react";
import TabelExperience from "./TabelExperience";

const Descripsi = () => {
  const descriptions = [
    {
      isi: "Dibawah ini adalah beberapa pengalaman saya, dimana saya menampilkan Track Record terhadap pengalaman yang telah saya pelajari",
    },
  ];

  return (
    <div className="px-4 py-8">
      {descriptions.map((description, index) => (
        <div key={index} className="relative left-64 text-center mb-8 text-gray-700 text-base w-1/2 ">
          {description.isi}
        </div>
      ))}
      <TabelExperience />
    </div>
  );
};

export default Descripsi;
