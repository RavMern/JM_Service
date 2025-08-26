import Instalacion from "../components/Servicios/Instalacion";
import Tecnico from "../components/Servicios/Tecnico";

function Servicios() {
  return (
    <>
      <div className="relative w-full">
        <img
          src="/portada-electricista.jpg"
          alt="Instalación"
          className="w-full h-64 md:h-96 object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 px-4 text-center">
          <div className="left-152 absolute border-9 border-cta/40 w-28 md:w-46 h-3/4 -translate-x-1/2"></div>

          <div className="z-10 relative">
            <h1 className="relative mb-2 font-bold text-white text-3xl md:text-5xl">
              <span className="text-cta md:text-6xl">JM</span> Service
              <span className="-bottom-1 left-55 absolute bg-cta w-16 md:w-18 h-0.5 -translate-x-1/2"></span>
            </h1>
            <p className="mt-2 max-w-md text-gray-200 text-end">
              Electricidad y servicios
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-10 px-4 md:px-8 md:py-9">
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
