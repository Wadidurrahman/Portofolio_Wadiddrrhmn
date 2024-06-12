import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs, faHtml5, faCss3Alt, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons"; // Mengimpor ikon bahasa pemrograman
import { faTailwind, faDatabase } from "@fortawesome/free-brands-svg-icons"; // Mengimpor ikon Tailwind CSS dan database dari Font Awesome

const MyComponent = () => {
  return (
    <div className="relative bg-gray-100 rounded-md p-10 space-x-10">
      <FontAwesomeIcon icon={faJs} size="3x" color="#F0DB4F" />
      <FontAwesomeIcon icon={faHtml5} size="3x" color="#E34F26" />
      <FontAwesomeIcon icon={faCss3Alt} size="3x" color="#1572B6" />
      <FontAwesomeIcon icon={faNodeJs} size="3x" color="#68A063" />
      <FontAwesomeIcon icon={faReact} size="3x" color="#61DAFB" />
    </div>
  );
};

export default MyComponent;
