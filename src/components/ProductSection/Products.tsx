"use client";
import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";

interface Producto {
  imageUrl: string;
  titulo: string;
}

const productos: Producto[] = [
  {
    imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_839539-MLA31428868580_072019-O.webp",
    titulo: "Elevador Dolar 15000 VA (Rango 140v-220v)",
  },
  {
    imageUrl: "https://i.ytimg.com/vi/1se9kYt9HZ0/maxresdefault.jpg",
    titulo: "Elevador Electro Tec 16000 VA (Rango 140v-220v)",
  },
];

const whatsappNumber = "+541154781055";
const presetMessage =
  "Hola, estoy interesado en obtener más información sobre los elevadores. \n\n#web-JM-Service";

const Products: React.FC = () => {
  return (
    <section className="mx-auto px-4 md:py-14 max-w-7xl">
      <header className="flex justify-between items-center mb-10">
        <h2 className="font-bold text-white text-5xl">
          Productos
          <span className="block bg-cta mt-1 rounded-full w-10 h-1" />
        </h2>
      </header>

      {/* Grid de productos */}
      <div className="gap-14 grid grid-cols-1 sm:grid-cols-2">
        {productos.map((producto) => (
          <div
            key={producto.titulo}
            className="group flex flex-col bg-white/5 hover:shadow-xl backdrop-blur-md border border-white/10 rounded-lg w-full overflow-hidden hover:scale-[101%] transition-all duration-300"
          >
            <div className="w-full h-64 overflow-hidden">
              <img
                src={producto.imageUrl}
                alt={producto.titulo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <article className="flex flex-col gap-4 p-4">
              <h3 className="font-semibold text-white text-lg leading-tight">
                {producto.titulo}
              </h3>

              {/* Botón WhatsApp */}
              <motion.a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  presetMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center gap-2 bg-cta shadow-lg px-5 py-3 rounded-lg text-white cursor-pointer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(255,165,0,0.6)",
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 10px rgba(255,165,0,0.3)",
                    "0 0 20px rgba(255,165,0,0.5)",
                    "0 0 10px rgba(255,165,0,0.3)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <BsWhatsapp size={24} />
                Consultar Elevador
              </motion.a>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
