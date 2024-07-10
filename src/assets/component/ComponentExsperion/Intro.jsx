import React from "react";
import TabelExperience from "./TabelExperience";

const Descripsi = () => {
  const descriptions = [
    {
      isi: "Dibawah ini adalah beberapa pengalaman saya, dimana saya menampilkan Track Record terhadap pengalaman yang telah saya pelajari",
    },
  ];

  return (
    <div>
      {descriptions.map((description, index) => (
        <div key={index} className="relative left-64 justify-center items-center text-center mb-2 text-gray-700 text-base w-1/2 ">
          {description.isi}
        </div>
      ))}
      <TabelExperience />
    </div>
  );
};

export default Descripsi;
