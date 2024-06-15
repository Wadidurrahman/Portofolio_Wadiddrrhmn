import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgp1 from "../../aset-project/p1.png";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ModalDetail = ({ isOpen, onClose, title, imageUrl, content, githubLink }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-1/2 h-4/3 p-4 rounded-md shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <button className="text-gray-500 hover:text-gray-800" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="mt-1">
          <img src={imgp1} alt={title} className="w-full h-48 object-cover rounded-md mb-2" />
          <p className="text-gray-600 mb-4 text-xs">{content}</p>
          <div className="flex justify-end">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-gray-300 duration-300 flex items-center mr-2">
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              Repository
            </a>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 font-semibold duration-300" onClick={onClose}>
              Batal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;
