import { FaTools, FaIndustry, FaHome, FaStore } from "react-icons/fa";
import ServiceBanner from "../UI/ServiceBanner";

const CarService = () => {
  const services = [
    { title: "24/7 Servicio de Emergencias", icon: <FaTools size={22} /> },
    { title: "Industria", icon: <FaIndustry size={22} /> },
    { title: "Hogar", icon: <FaHome size={22} /> },
    { title: "Comercio", icon: <FaStore size={22} /> },
  ];

  return <ServiceBanner services={services} />;
};

export default CarService;
