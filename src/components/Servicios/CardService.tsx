import React from "react";
import { FaTools, FaIndustry, FaHome, FaStore } from "react-icons/fa";

const CarService: React.FC = () => {
  const services = [
    { title: "Emergencias 24/7", icon: <FaTools size={22} /> },
    { title: "Industria", icon: <FaIndustry size={22} /> },
    { title: "Hogar", icon: <FaHome size={22} /> },
    { title: "Comercio", icon: <FaStore size={22} /> },
  ];

  return (
    <div className="flex justify-center items-center gap-6 bg-gray-900 px-6 py-9 w-full text-cta">
      {services.map((service, index) => (
        <React.Fragment key={index}>
          <div className="flex items-center gap-2">
            {service.icon}
            <span className="font-semibold text-sm md:text-base">
              {service.title}
            </span>
          </div>
          {index < services.length - 1 && (
            <span className="opacity-60 text-cta">|</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CarService;
