import { BsWhatsapp } from "react-icons/bs";
import ButtonSolicitar from "../UI/ButtonSolicitar";

const Instalacion = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center gap-20">
      {/*TODO Columna izquierda */}
      <div className="flex-shrink-0">
        <img
          src="/Image.png"
          alt="Instalación"
          className="shadow-md rounded-lg w-full max-w-sm"
        />
      </div>
      {/*TODO Columna derecha */}
      <div className="flex flex-col gap-6 max-w-md md:text-left text-center">
        <h2 className="font-bold text-white text-2xl">x Alineación</h2>
        <p className="text-gray-300">
          Nos encargamos de cada instalación eléctrica con la máxima seguridad y
          calidad, para que disfrutes de tu hogar o negocio sin preocupaciones.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
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

export default Instalacion;
