import React from 'react'
import { motion } from "framer-motion"
const trabajos = [
    {
        imageUrl: "https://ss-static-01.esmsv.com/id/170655/galeriaimagenes/obtenerimagen/?id=534&tipoEscala=crop&width=977&height=977",
        titulo: "Escuela N°59",
        subTitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea reprehenderit illum odit est consequuntur",
    },
    {
        imageUrl: "https://st.depositphotos.com/1140262/1473/i/450/depositphotos_14731059-stock-photo-electrician-peeling-off-wires.jpg",
        titulo: "Clinica San miguel",
        subTitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea reprehenderit illum odit est consequuntur ",
    },
    {
        imageUrl: "https://www.selectoradelcentro.com.ar/wp-content/uploads/2019/05/electricista.jpg",
        titulo: "Empresa LNS",
        subTitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea reprehenderit illum odit est consequuntur  ",
    }
]

function Trabajos(): React.ReactElement {
    return (
        <div className='flex items-center px-4 h-auto max-h-[1200px]'>
            <div className='relative m-auto max-w-7xl'>
                <header>
                    <h3 className='font-bold text-white text-3xl'>Trabajos realizados</h3>
                </header>
                <motion.div
                    initial={{ translateX: -200, opacity: 0 }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    transition={{ duration: 1.5, }}
                    viewport={{ once: true }}
                    className="-top-12 -right-8 z-0 absolute border-9 border-cta w-32 md:w-96 h-96"></motion.div>
                <motion.div
                    initial={{ translateX: 200, opacity: 0 }}
                    whileInView={{ translateX: 0, opacity: 1 }}
                    transition={{ duration: 1.5, }}
                    viewport={{ once: true }}
                    className="-bottom-12 -left-8 z-0 absolute border-9 border-cta w-32 md:w-96 h-96"></motion.div>
                <section className='z-10 flex md:flex-row flex-col justify-around items-center gap-14 my-10'>
                    {trabajos.map((trabajo, index) => (
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            key={index} className='z-30 flex flex-col items-center gap-2 hover:drop-shadow-2xl w-full transition-all duration-200'>
                            <motion.img
                                src={trabajo.imageUrl} alt={trabajo.titulo} className='rounded-md w-full h-80' />
                            <h5 className='w-full font-bold text-white text-xl text-left'>{trabajo.titulo}</h5>
                            <div className='px-2'>

                                <p className='w-full text-md text-subTitle text-left'>{trabajo.subTitulo}</p>
                            </div>
                        </motion.div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Trabajos