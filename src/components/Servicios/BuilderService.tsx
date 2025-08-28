import { FaBuilding, FaLayerGroup, FaBrush, FaThLarge } from "react-icons/fa";
import ServiceBanner from "../UI/ServiceBanner";

const BuilderService = () => {
  const services = [
    { title: "Cimientos y estructuras", icon: <FaBuilding size={22} /> },
    { title: "Levantamiento de paredes", icon: <FaLayerGroup size={22} /> },
    { title: "Revoques y terminaciones", icon: <FaBrush size={22} /> },
    { title: "Colocación de pisos", icon: <FaThLarge size={22} /> },
  ];

  return <ServiceBanner services={services} />;
};

export default BuilderService;
