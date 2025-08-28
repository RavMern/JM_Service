import React from "react";

type Service = {
  title: string;
  icon: React.ReactNode;
};

interface ServiceBannerProps {
  services: Service[];
}

const ServiceBanner: React.FC<ServiceBannerProps> = ({ services }) => {
  return (
    <div className="flex justify-center items-center gap-6 bg-gray-900 shadow-md px-6 py-6 w-full text-cta">
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

export default ServiceBanner;
