import React from "react";
import TabelExperience from "./TabelExperience";

const Descripsi = () => {
  const descriptions = [
    {
      isi: "Dibawah ini adalah beberapa pengalaman saya, dimana saya menampilkan Track Record terhadap pengalaman yang telah saya pelajari",
    },
  ];

  return (
    <>
      <main>
        {descriptions.map((description, index) => (
          <div key={index} className="relative justify-center items-center text-center py-2 left-72 w-1/2  text-sm text-gray-400 ">
            {description.isi}
          </div>
        ))}
        <TabelExperience />
      </main>
    </>
  );
};

export default Descripsi;
