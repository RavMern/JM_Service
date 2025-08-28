import React from "react";
import { BsWhatsapp } from "react-icons/bs";

import ButtonSolicitar from "../UI/ButtonSolicitar";

const Contratista: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-12 px-4 md:px-8">
      {/*TODO Columna izquierda */}
      <div className="flex flex-col gap-6 max-w-md md:text-left text-center">
        <h3 className="relative flex justify-center md:justify-start items-center gap-2 font-montserrat text-gray-300 text-lg">
          <span className="block bg-yellow-400 w-6 h-0.5"></span>
          Contratista Albañil
        </h3>

        <h2 className="font-bold text-white text-2xl md:text-3xl">
          Experiencia y Profesionalismo en Cada Proyecto
        </h2>

        <p className="text-gray-300 text-sm">
          Realizamos cimientos, paredes, revoques y colocación de pisos con los
          más altos estándares de calidad. Nuestro compromiso es brindarte
          construcciones sólidas, seguras y terminaciones impecables para tu
          hogar o proyecto.
        </p>

        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <ButtonSolicitar
            icon={<BsWhatsapp />}
            whatsappNumber="+5491134705822"
            text="Solicitar"
          />
        </div>
      </div>

      {/*TODO Columna derecha */}
      <div className="relative flex-shrink-0 my-6 md:my-0">
        <span className="-top-6 md:-top-6 left-52 md:left-50 z-10 absolute border-9 border-cta w-38 md:w-46 h-[calc(100%-12rem)] -translate-x-10"></span>

        <img
          src="/contratista.webp"
          alt="Instalación"
          className="z-10 relative shadow-md rounded-tl-4xl rounded-br-4xl w-72 h-auto"
        />

        <img
          src="/contratista2.webp"
          alt="Aire acondicionado"
          className="bottom-9 -left-10 z-20 absolute shadow-lg border-[#2F456F] border-6 rounded-r-full rounded-l-full w-36 h-24"
        />
      </div>
    </div>
  );
};

export default Contratista;
