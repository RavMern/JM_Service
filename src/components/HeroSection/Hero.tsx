import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceHighlightsBar from "./ServiceHighlightsBar";

function Hero(): React.ReactElement {
  return (
    <div
      className="z-50 relative bg-background bg-cover bg-no-repeat bg-center m-auto w-full max-w-[1500px] min-h-[80vh] max-h-[1200px]"
      style={{
        backgroundImage: `url("/elect.webp")`,
      }}
    >
      <div className="z-40 relative bg-primary-dark/30 backdrop-blur-[2px] m-auto w-full max-w-[1500px] h-svh max-h-svh md:max-h-[1200px]">
        <header className="flex flex-col justify-center items-center md:items-start gap-6 px-2 md:px-20 h-[80%]">
          <div className="z-10 relative py-10 h-full">
            <motion.div
              initial={{ translateX: -200, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "circInOut" }}
              viewport={{ once: true }}
              className="top-32 right-52 md:right-35 absolute border-cta border-r-9 h-28 md:h-36 md:-translate-x-16"
            ></motion.div>
            <motion.div
              initial={{ translateX: 200, opacity: 0 }}
              whileInView={{ translateX: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "circInOut" }}
              viewport={{ once: true }}
              className="flex flex-col justify-center my-12 h-full"
            >
              <h1 className="relative mb-2 font-bold text-white text-6xl">
                <span className="text-cta md:text-8xl">JM</span> Service
                <span className="block md:-bottom-1 left-65 md:left-75 absolute bg-cta w-22 md:w-28 h-1 -translate-x-1/2"></span>
              </h1>
              <p className="md:-left-4 z-10 relative mt-2 max-w-md font-base font-montserrat text-gray-200 md:text-lg text-xl text-end">
                Electricidad y servicios
              </p>
            </motion.div>
          </div>

          <p className="-mt-6 md:mt-1 max-w-2xl md:font-light text-gray-200 md:text-lg text-xl md:text-left text-center">
            JM-SERVICE – Seguridad, Confort y Soluciones Electromecánicas Más de
            10 años brindando confianza a los hogares argentinos En JMSERVICE
            ofrecemos un servicio profesional y confiable respaldado por más de
            una década de experiencia en el rubro. Nos especializamos en brindar
            soluciones integrales que combinan seguridad, eficiencia y calidad,
            adaptándonos a las necesidades de cada cliente.
          </p>

          <button className="bg-cta hover:bg-[#dd8e17] my-6 p-3 md:p-2 rounded-lg w-max font-semibold text-md text-white md:text-lg text-2xl duration-200 cursor-pointer">
            <Link to={"/servicios"}>Conocer Más</Link>
          </button>
        </header>

        {/* BANNER SUPERPUESTO */}
        <ServiceHighlightsBar />
      </div>
    </div>
  );
}

export default Hero;
