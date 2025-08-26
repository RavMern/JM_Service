import React from "react";
import { BsWhatsapp } from "react-icons/bs";

import ButtonSolicitar from "../UI/ButtonSolicitar";

const Tecnico: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col-reverse justify-center items-center gap-20 px-4 md:px-8">
      {/*TODO Columna izquierda: imagen */}
      <div className="flex-shrink-0">
        <img
          src="/tecnico.jpg"
          alt="Técnico"
          className="shadow-md rounded-lg w-full max-w-sm"
        />
      </div>

      {/*TODO Columna derecha: texto, marquee y botón */}
      <div className="flex flex-col gap-6 max-w-md md:text-left text-center">
        <h2 className="font-bold text-white text-2xl">
          Técnico Aire Acondicionado
        </h2>

        <p className="text-gray-300">
          Nos encargamos de cada instalación con la máxima seguridad y calidad,
          para que tu equipo funcione a la perfección y sin preocupaciones.
        </p>

        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <ButtonSolicitar
            icon={<BsWhatsapp />}
            whatsappNumber="541112345678"
            text="Solicitar"
          />
        </div>
      </div>
    </div>
  );
};

export default Tecnico;
