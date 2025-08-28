import React from 'react'
import { motion } from "framer-motion"
import { MdOutlineArrowRight } from 'react-icons/md'
const productos = [
    {
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_839539-MLA31428868580_072019-O.webp",
        titulo: "Elevador Dolar 15000 VA (Rango 140v-220v)",
        linkProd: "https://jmservice.tiendanegocio.com/producto/15000-va-rango-140v-220v/elevador-dolar-15000-va-rango-140v-220v",
    },
    {
        imageUrl: "https://i.ytimg.com/vi/1se9kYt9HZ0/maxresdefault.jpg",
        titulo: "Elevador Electro Tec 16000 VA ( Rango 140v-220v )",
        linkProd: "https://jmservice.tiendanegocio.com/producto/16000-va-rango-140v-220v/elevador-electro-tec-16000-va-rango-140v-220v-",
    }
]
function Products(): React.ReactElement {
    return (
        <div className='px-4 h-auto max-h-[1200px]'>
            <div className='m-auto max-w-7xl'>
                <header className='flex flex-row justify-between items-center py-7'>
                    <h3 className='font-bold text-white text-3xl'>Productos</h3>
                    <a href='https://jmservice.tiendanegocio.com' className='flex flex-row items-center font-semibold text-white'>
                        <h5>Ver más</h5>
                        <MdOutlineArrowRight className='text-cta' size={30} />
                    </a>
                </header>
                <section className='relative flex md:flex-row flex-col justify-around items-center gap-24 md:gap-14 py-4'>
                    <motion.div
                        initial={{ translateX: -200, opacity: 0 }}
                        whileInView={{ translateX: 0, opacity: 1 }}
                        transition={{ duration: 1.5, }}
                        viewport={{ once: true }}
                        className="-top-5 -right-5 z-0 absolute border-[10px] border-cta/40 w-32 md:w-20 h-20"></motion.div>
                    <motion.div
                        initial={{ translateX: 200, opacity: 0 }}
                        whileInView={{ translateX: 0, opacity: 1 }}
                        transition={{ duration: 1.5, }}
                        viewport={{ once: true }}
                        className="bottom-15 -left-5 z-0 absolute border-[10px] border-cta/40 w-32 md:w-20 h-20"></motion.div>
                    {productos.map((producto, index) => (
                        <a href={producto.linkProd} key={index} className='group z-30 flex flex-col items-center gap-2 hover:drop-shadow-lg w-full hover:scale-[102%] duration-200'>
                            <img src={producto.imageUrl} alt={producto.titulo} className='rounded-md w-full h-64' />
                            <h5 className='px-2 w-full font-semibold text-white text-lg text-left'>{producto.titulo}</h5>
                        </a>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Products