import React from "react";
import { BsWhatsapp } from "react-icons/bs";

import ButtonSolicitar from "../UI/ButtonSolicitar";

const Contratista: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-12 px-4 md:px-8">
      {/*TODO Columna izquierda */}
      <div className="flex flex-col gap-10 max-w-md md:text-left text-center">
        <h2 className="font-bold text-white text-2xl md:text-4xl">
          Contratista Albañileria
        </h2>

        <p className="text-gray-300 text-sm">
          Nos encargamos de cada instalación eléctrica con la máxima seguridad y
          calidad, para que disfrutes de tu hogar o negocio sin preocupaciones.
          Nos encargamos de cada instalación eléctrica con la máxima seguridad y
          calidad, para que disfrutes de tu hogar o negocio sin preocupaciones.
        </p>

        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <ButtonSolicitar
            icon={<BsWhatsapp />}
            whatsappNumber="541112345678"
            text="Solicitar"
          />
        </div>
      </div>

      {/*TODO Columna derecha */}
      <div className="relative flex-shrink-0">
        <div className="top-20 left-62 -z-10 absolute border-9 border-cta w-28 md:w-40 h-[calc(100%-12rem)] -translate-x-16"></div>

        <img
          src="/contratista.webp"
          alt="Instalación"
          className="shadow-md rounded-tl-4xl rounded-br-4xl w-72 h-auto"
        />

        <img
          src="/contratista2.webp"
          alt="Aire acondicionado"
          className="bottom-9 -left-10 absolute shadow-lg border-[#2F456F] border-6 rounded-r-full rounded-l-full w-36 h-24"
        />
      </div>
    </div>
  );
};

export default Contratista;
