import React from "react";
import { DiScriptcs } from "react-icons/di";

const Service = () => {
  const services = [
    {
      title: "Web Development",
      description: "Membangun website modern dan responsif.",
      icon: "🌐",
    },
    {
      title: "UI/UX Design",
      description: "Desain antarmuka pengguna yang menarik.",
      icon: "🎨",
    },
    {
      title: "Collaboration Team",
      description: "Optimisasi mesin pencari untuk visibilitas.",
      icon: "🚀",
    },
  ];

  return (
    <div className="py-36 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">Layanan Kami</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="text-lg font-semibold text-center">{service.title}</h3>
              <p className="mt-2 text-gray-600 text-sm text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
