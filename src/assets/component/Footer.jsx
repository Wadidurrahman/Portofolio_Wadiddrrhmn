import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full  flex flex-col z-20 bg-gray-800 text-white py-8 mt-[85rem]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-semibold">Portofolio Saya</h2>
          <p className="mt-2 text-gray-400">Terima kasih telah mengunjungi portofolio saya.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="mb-4 md:mb-0 md:mr-8">
            <h3 className="text-xl font-semibold">Hubungi Saya</h3>
            <p className="text-gray-400">Email: contoh@example.com</p>
            <p className="text-gray-400">Telepon: +62 123 456 789</p>
          </div>
          <div className="flex gap-4">
            <a href="https://linkedin.com/in/wadidurrahman" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-600 transition duration-300" />
            </a>
            <a href="https://github.com/wadidurrahman" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-gray-500 transition duration-300" />
            </a>
            <a href="https://instagram.com/Wadidurrhmn" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-600 transition duration-300" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4">
        <p className="text-center text-gray-400">© 2024 Portofolio wadidurrahman.</p>
      </div>
    </footer>
  );
};

export default Footer;
