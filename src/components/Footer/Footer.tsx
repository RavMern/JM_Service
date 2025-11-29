import React from "react";
import { Link } from "react-router-dom";

function Footer(): React.ReactElement {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 to-primary-light px-10 py-10 md:py-12 border-white/10 border-t">
      {/* CONTENEDOR PRINCIPAL */}
      <div className="flex md:flex-row flex-col md:justify-between gap-12 md:gap-0 w-full">
        {/* IZQUIERDA */}
        <section className="flex flex-col justify-between w-full">
          {/* LOGO */}
          <div className="flex flex-row items-baseline gap-1 mb-4 font-bold text-white">
            <h1 className="text-cta md:text-3xl text-4xl">JM</h1>
            <h2 className="md:text-3xl text-4xl">Service</h2>
          </div>

          {/* DESARROLLADOR */}
          <a
            href="https://wa.me/5492615515398"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar desarrollador por WhatsApp"
            className="group w-fit font-semibold text-subTitle hover:text-gray-300 transition-colors duration-200"
          >
            Desarrollado por
            <span className="px-1 font-bold text-white group-hover:text-cta transition-colors duration-200">
              Ravmern
            </span>
          </a>
        </section>

        {/* DERECHA */}
        <section className="flex flex-row justify-between w-full">
          {/* COLUMN 1 */}
          <ul className="flex flex-col gap-2 pr-6 border-subTitle/30 border-r-2 w-full font-medium text-gray-200 md:text-left text-center">
            <li className="mb-1 font-semibold text-white">Páginas</li>
            <li className="hover:text-cta duration-200">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-cta duration-200">
              <Link to="/Servicios">Servicios</Link>
            </li>
            <li className="hover:text-cta duration-200">
              <a
                href="https://jmservice.tiendanegocio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tienda Online
              </a>
            </li>
          </ul>

          {/* COLUMN 2 */}
          <ul className="flex flex-col gap-2 pl-6 w-full font-medium text-gray-200 md:text-left text-center">
            <li className="mb-1 font-semibold text-white">Nosotros</li>
            <li className="hover:text-cta duration-200">
              <Link to="/about/electricista">Sobre Juan M</Link>
            </li>
            <li className="hover:text-cta duration-200">
              <Link to="/about/albanil">Sobre Damián</Link>
            </li>
          </ul>
        </section>
      </div>

      {/* COPYRIGHT */}
      <p className="opacity-70 mt-10 text-gray-300 text-sm text-center">
        © {new Date().getFullYear()} JM Service — Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
