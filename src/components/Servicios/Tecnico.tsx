import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import ButtonSolicitar from "../UI/ButtonSolicitar";

const Tecnico: React.FC = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-12 px-4 md:px-8">
      {/*TODO Columna izquierda */}
      <div className="relative flex-shrink-0">
        <div className="right-28 bottom-54 -z-10 absolute border-9 border-cta w-28 md:w-40 h-[calc(100%-12rem)] -translate-x-16"></div>

        <img
          src="/tecnico.webp"
          alt="Tecnico"
          className="shadow-md rounded-tl-4xl rounded-br-4xl w-72 h-auto"
        />

        <img
          src="/tecnico2.webp"
          alt="Aire acondicionado"
          className="bottom-9 -left-10 absolute shadow-lg border-[#2F456F] border-6 rounded-r-full rounded-l-full w-36 h-24"
        />
      </div>

      {/*TODO Columna derecha */}
      <div className="flex flex-col gap-6 max-w-md md:text-left text-center">
        <h3 className="relative flex justify-center md:justify-start items-center gap-2 font-montserrat text-gray-300 text-lg">
          Técnico Aire Acondicionado
          <span className="block bg-yellow-400 w-6 h-0.5"></span>
        </h3>

        <h2 className="font-bold text-white text-2xl md:text-4xl">
          Expertos en Instalación y Mantenimiento
        </h2>

        <p className="text-gray-300 text-sm">
          Brindamos instalación, mantenimiento y reparación de equipos de aire
          acondicionado. Nos especializamos en limpieza de filtros, recarga de
          gas y servicios preventivos para garantizarte confort, eficiencia y
          durabilidad en tu sistema de climatización.
        </p>

        <div className="flex justify-center md:justify-start gap-4 mt-4">
          <ButtonSolicitar
            icon={<BsWhatsapp />}
            whatsappNumber="+541154781055"
            text="Solicitar"
          />
        </div>
      </div>
    </div>
  );
};

export default Tecnico;
