import Instalacion from "../components/Servicios/Instalacion";
import Tecnico from "../components/Servicios/Tecnico";

function Servicios() {
  return (
    <>
      <div className="w-full">
        <img
          src="/portada-electricista.jpg"
          alt="Instalación"
          className="w-full h-64 md:h-96 object-cover"
        />
      </div>

      {/* Contenido con padding */}
      <div className="space-y-10 px-4 md:px-8">
        <h1 className="-top-6 md:-top-16 relative font-bold text-white text-4xl md:text-8xl">
          Servicios
          <span className="right-0 bottom-0 left-22 md:left-60 absolute bg-orange-400 -my-2 w-18 md:w-46 h-1"></span>
        </h1>
        <section>
          <Instalacion />
        </section>
        <section>
          <Tecnico />
        </section>
      </div>
    </>
  );
}
export default Servicios;
