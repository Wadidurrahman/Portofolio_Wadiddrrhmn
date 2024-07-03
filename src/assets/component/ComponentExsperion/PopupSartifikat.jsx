import React from "react";

const PopupSertifikat = ({ images, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative rounded-lg w-4/5 md:w-1/2 lg:w-2/3 bg-white p-4">
        <button onClick={onClose} className="absolute top-4 right-4 text-red-600 text-3xl font-bold focus:outline-none">
          &times;
        </button>
        <div className="flex flex-wrap justify-center">
          {images.map((item) => (
            <div key={item.id} className="p-4 m-4">
              <img src={item.src} alt={`Sertifikat ${item.id}`} className="w-full h-auto rounded-lg" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopupSertifikat;
