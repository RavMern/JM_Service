import React from "react";
import { FaShieldAlt, FaLock, FaFileInvoice, FaTools } from "react-icons/fa";

function Data(): React.ReactElement {
  const items = [
    {
      icon: <FaShieldAlt size={34} className="drop-shadow text-cta" />,
      title: "Seguro por accidentes",
      desc: "Cobertura completa para brindar tranquilidad en cada trabajo.",
    },
    {
      icon: <FaFileInvoice size={34} className="drop-shadow text-cta" />,
      title: "Facturación tipo A",
      desc: "Emitimos facturas tipo A y B para empresas y particulares.",
    },
    {
      icon: <FaLock size={34} className="drop-shadow text-cta" />,
      title: "Servicio matriculado",
      desc: "Trabajos realizados por electricistas certificados.",
    },
    {
      icon: <FaTools size={34} className="drop-shadow text-cta" />,
      title: "Mantenimiento preventivo",
      desc: "Planes de revisión y mantenimiento para evitar fallas futuras.",
    },
  ];

  return (
    <section className="text-white">
      <div className="mx-auto px-4 max-w-6xl">
        {/* TÍTULO */}
        <header className="mb-14 text-left">
          <h2 className="font-bold text-white text-4xl md:text-5xl">
            Qué ofrecemos
            <span className="block bg-cta mt-1 rounded-full w-10 h-1" />
          </h2>
          <p className="mt-2 text-gray-300 text-lg">
            Servicios profesionales y certificados para tu seguridad.
          </p>
        </header>

        {/* GRID DE ITEMS */}
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col gap-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm p-6 border border-white/10 hover:border-cta/40 rounded-xl transition-all duration-300"
            >
              <div className="group-hover:scale-105 transition-transform duration-300">
                {item.icon}
              </div>

              <h3 className="font-semibold text-white text-2xl">
                {item.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Data;
