import { FaSnowflake, FaTools, FaFan, FaTint } from "react-icons/fa";
import ServiceBanner from "../UI/ServiceBanner";

const RefrigerationService = () => {
  const services = [
    {
      title: "Instalación",
      icon: <FaSnowflake size={22} />,
    },
    { title: "Limpieza de filtros", icon: <FaFan size={22} /> },
    { title: "Mantenimiento", icon: <FaTools size={22} /> },
    { title: "Recarga de gas ", icon: <FaTint size={22} /> },
  ];

  return <ServiceBanner services={services} />;
};

export default RefrigerationService;
