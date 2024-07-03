import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ModalDetail = ({ isOpen, onClose, title, image, content, githubLink }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-1/2 h-[82%] px-4 py-1 rounded-md shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <button className="text-gray-500 hover:text-gray-800" onClick={onClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className="mb-4">
          <img src={image} alt={title} className="w-full h-64 object-cover rounded-md " />
          <p className="text-gray-600 text-xs">{content}</p>
        </div>
        <div className="flex justify-end">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black font-semibold rounded-md hover:text-white hover:bg-black duration-300 flex items-center mr-2 shadow-lg">
            <FontAwesomeIcon icon={faGithub} className="mr-2" />
            Repository
          </a>
          <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-gray-300 font-semibold duration-300 shadow-lg" onClick={onClose}>
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDetail;
