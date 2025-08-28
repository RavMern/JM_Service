import React from "react";
import { motion } from "framer-motion";

type Service = {
  title: string;
  icon: React.ReactNode;
};

interface ServiceBannerProps {
  services: Service[];
}

const ServiceBanner: React.FC<ServiceBannerProps> = ({ services }) => {
  return (
    <div className="bg-gray-900 shadow-md w-full overflow-hidden text-cta">
      {/*TODO Desktop banner fijo */}
      <div className="hidden md:flex justify-center items-center gap-6 px-6 py-8">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <div className="flex items-center gap-2">
              {service.icon}
              <span className="font-semibold text-base">{service.title}</span>
            </div>
            {index < services.length - 1 && (
              <span className="opacity-60 text-cta">|</span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/*TODO Para Mobile va carrusel */}
      <div className="md:hidden relative py-8 overflow-hidden">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        >
          {[...services, ...services].map((service, index) => (
            <div key={index} className="flex items-center gap-2 px-4 min-w-max">
              {service.icon}
              <span className="font-semibold text-sm">{service.title}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceBanner;
