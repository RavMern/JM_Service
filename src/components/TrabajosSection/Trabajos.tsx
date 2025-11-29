import React from "react";

const trabajos = [
  {
    imageUrl: "/descarga.webp",
    titulo: "Escuela N°59",
    subTitulo:
      "Instalación eléctrica completa, mantenimiento preventivo y mejoras en seguridad.",
  },
  {
    imageUrl: "electricista.webp",
    titulo: "Clínica San Miguel",
    subTitulo:
      "Optimización de sistemas eléctricos críticos y cableado de alta confiabilidad.",
  },
  {
    imageUrl: "/pinsa.webp",
    titulo: "Empresa LNS",
    subTitulo:
      "Actualización de infraestructura eléctrica y mejoras en sistemas lumínicos.",
  },
];

function Trabajos(): React.ReactElement {
  return (
    <div className="relative px-4 md:px-14 pt-22 overflow-hidden">
      {/* DOTTED GRID BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* TITULO */}
        <header className="mb-12 text-left">
          <h3 className="z-10 relative font-bold text-white text-3xl md:text-5xl">
            Trabajos realizados
          </h3>
          <span className="block bg-cta mt-1 rounded-full w-10 h-1" />
        </header>

        {/* GRID RESPONSIVE */}
        <section className="z-10 relative gap-10 grid grid-cols-1 md:grid-cols-3">
          {trabajos.map((trabajo, index) => (
            <div
              key={index}
              className="group flex flex-col gap-3 bg-primary-dark/40 shadow-lg hover:shadow-2xl backdrop-blur-md border border-white/5 rounded-lg overflow-hidden transition-all hover:-translate-y-1 duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={trabajo.imageUrl}
                  alt={trabajo.titulo}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="px-4 pb-5">
                <h5 className="font-semibold text-white text-xl">
                  {trabajo.titulo}
                </h5>

                <p className="mt-1 text-subTitle leading-relaxed">
                  {trabajo.subTitulo}
                </p>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Trabajos;
