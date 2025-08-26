import React from "react";
import { FaTools, FaIndustry, FaHome, FaStore } from "react-icons/fa";

const CarService: React.FC = () => {
  const cards = [
    { title: "24/7 Servicio de Emergencias", icon: <FaTools size={30} /> },
    { title: "Industria", icon: <FaIndustry size={30} /> },
    { title: "Hogar", icon: <FaHome size={30} /> },
    { title: "Comercio", icon: <FaStore size={30} /> },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 md:px-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center bg-gray-900 shadow-md p-6 rounded-lg w-60 text-cta"
        >
          {card.icon}
          <h3 className="mt-4 font-bold text-cta text-lg text-center">
            {card.title}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default CarService;
