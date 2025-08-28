import React from "react";
import { FaShieldAlt, FaLock, FaFileInvoice, FaTools } from "react-icons/fa";
import { motion } from "framer-motion"
function Data(): React.ReactElement {
    const items = [
        {
            icon: <FaShieldAlt size={30} className="text-cta" />,
            title: "Seguro por accidentes",
            desc: "Cobertura completa para brindar tranquilidad en cada trabajo.",
        },
        {
            icon: <FaFileInvoice size={30} className="text-cta" />,
            title: "Facturación tipo A",
            desc: "Emitimos facturas tipo A y B para empresas y particulares.",
        },
        {
            icon: <FaLock size={30} className="text-cta" />,
            title: "Servicio matriculado",
            desc: "Trabajos realizados por electricistas certificados.",
        },
        {
            icon: <FaTools size={30} className="text-cta" />,
            title: "Mantenimiento preventivo",
            desc: "Planes de revisión y mantenimiento para evitar fallas futuras.",
        },
    ];

    return (
        <section className="py-20 text-white">
            <div className="relative mx-auto px-4 max-w-6xl">
                <header className="mb-12 text-left">
                    <h2 className="font-bold text-4xl md:text-5xl">Qué ofrecemos?</h2>
                </header>
                <motion.div
                    initial={{ translateX: -200, opacity: 0 }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    transition={{ duration: 1.5, }}
                    viewport={{ once: true }}
                    className="-right-20 -bottom-40 z-0 absolute border-[10px] border-cta/40 w-32 md:w-44 h-56"></motion.div>
                <motion.div
                    initial={{ translateX: 200, opacity: 0 }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    transition={{ duration: 1.5, }}
                    viewport={{ once: true }}
                    className="-top-35 -left-13 z-0 absolute border-[10px] border-cta/40 w-32 md:w-44 h-56"></motion.div>
                <div className="gap-12 grid grid-cols-1 md:grid-cols-2">
                    {items.map((item, index) => (
                        <div key={index} className="z-40 flex flex-col gap-3">
                            <div>{item.icon}</div>
                            <h3 className="font-semibold text-xl">{item.title}</h3>
                            <p className="font-medium text-gray-300">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Data;