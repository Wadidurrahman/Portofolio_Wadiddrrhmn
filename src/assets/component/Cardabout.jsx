import React from "react";

const data = [
  { judul: "Pengalaman", Number: "2++", Discripsi: "mdnanwdowa" },
  { judul: "Projeck", Number: "5++", Discripsi: "andkkaweod" },
  { judul: "Bahasa", Number: "5++", Discripsi: "oakadlawdad" },
];

const Cardabout = () => {
  return (
    <div className="relative bottom-36 left-56 flex flex-wrap gap-4 mt-8 cursor-pointer">
      {data.map((item) => (
        <div key={item.judul} className="relative p-4 w-42 h-28 bg-gray-100 shadow-lg rounded-lg border border-transparent hover:border-[#52eefa] transition-all duration-300">
          <h3 className="font-semibold text-sm">{item.judul}</h3>
          <p className="font-bold text-2xl text-gray-400">{item.Number}</p>
          <p>{item.Discripsi}</p>
        </div>
      ))}
    </div>
  );
};

export default Cardabout;
