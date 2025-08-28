import { motion } from "framer-motion";
import Contratista from "../components/Servicios/Contratista";
import Instalacion from "../components/Servicios/Instalacion";
import Tecnico from "../components/Servicios/Tecnico";
import CarService from "../components/Servicios/CardService";
import BuilderService from "../components/Servicios/BuilderService";
import RefrigerationService from "../components/Servicios/RefrigerationService";

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
          <div className="z-10 relative py-10 h-full">
            <motion.div
              initial={{ translateX: -200, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "circInOut" }}
              viewport={{ once: true }}
              className="right-10 absolute border-9 border-cta w-28 md:w-46 h-[calc(100%-7rem)] -translate-x-16"
            ></motion.div>
            <motion.div
              initial={{ translateX: 200, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "circInOut" }}
              viewport={{ once: true }}
              className="flex flex-col justify-center m-auto h-full"
            >
              <h1 className="relative mb-2 font-bold text-white text-3xl md:text-5xl">
                <span className="text-cta md:text-6xl">JM</span> Service
                <span className="block md:-bottom-1 left-32 md:left-55 absolute bg-cta w-16 md:w-18 h-0.5 -translate-x-1/2"></span>
              </h1>
              <p className="mt-2 max-w-md font-montserrat text-gray-200 text-end">
                Electricidad y servicios
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="z-20 relative -mt-8 md:mb-0">
        <CarService />
      </div>

      <div className="space-y-10 px-4 md:px-8 py-12 md:py-9">
        <section>
          <Instalacion />
        </section>
        <section>
          <RefrigerationService />
        </section>
        <section>
          <Tecnico />
        </section>
        <section>
          <BuilderService />
        </section>
        <section>
          <Contratista />
        </section>
      </div>
    </>
  );
}

export default Servicios;
