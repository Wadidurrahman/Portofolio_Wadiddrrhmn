import React from "react";
import { FiSend } from "react-icons/fi";

const FormTable = () => {
  const data = [
    {
      judul: "Tinggalkan Pesan",
      isi: "Anda dapat mengirim pesan untuk berkomunikasi dengan saya melalui form di bawah ini",
    },
  ];

  return (
    <div>
      {data.map((item, index) => (
        <div key={index} className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
          <h2 className="text-lg font-semibold text-[#38BDF8] mt-8">{item.judul}</h2>
          <p className="text-sm text-gray-400 ">{item.isi}</p>
          <form className="border w-full p-6 rounded-lg mt-4 bg-gray-50 shadow-sm">
            <div className="gap-4 mb-4">
              <label className="block text-sm font-medium text-gray-700">Nama :</label>
              <input type="text" className="w-full border-b-2 border-gray-300 focus:border-[#38BDF8] focus:outline-none transition duration-300 ease-in-out px-4 py-2" placeholder="Masukkan Nama Anda" />
            </div>
            <div className="gap-4 mb-4">
              <label className="block text-sm font-medium text-gray-700">Pesan :</label>
              <textarea className="w-full border-b-2 border-gray-300 focus:border-[#38BDF8] focus:outline-none transition duration-300 ease-in-out px-4 py-2" placeholder="Masukkan Pesan Anda"></textarea>
            </div>
            <div className="flex justify-end">
              <button type="submit" className="flex items-center bg-[#38BDF8] text-white font-semibold px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-[#0ea5e9]">
                Kirim
                <FiSend className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      ))}
    </div>
  );
};

export default FormTable;
