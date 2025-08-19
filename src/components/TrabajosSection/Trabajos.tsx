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
        <div className='max-h-[1200px]'>
            <div className='m-auto max-w-7xl'>

                <header>
                    <h3 className='font-bold text-white text-3xl'>Trabajos realizados</h3>
                </header>
                <section className='flex flex-row justify-around items-center gap-14 my-10'>
                    {trabajos.map((trabajo, index) => (
                        <motion.div
                            whileHover={{ scale: 1.03 }}
                            key={index} className='flex flex-col items-center hover:drop-shadow-2xl w-full transition-all duration-200'>
                            <motion.img
                                src={trabajo.imageUrl} alt={trabajo.titulo} className='rounded-md w-full h-80' />
                            <h5 className='w-full font-bold text-white text-xl text-left'>{trabajo.titulo}</h5>
                            <p className='w-full text-md text-primary-light text-left'>{trabajo.subTitulo}</p>
                        </motion.div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Trabajos