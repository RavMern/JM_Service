import React from 'react'
import Hero from '../components/HeroSection/Hero'
import Trabajos from '../components/TrabajosSection/Trabajos'
import Products from '../components/ProductSection/Products'
import Data from '../components/Data/Data'

function Home(): React.ReactElement {
    return (
        <div className='flex flex-col gap-20'>
            <section> <Hero /></section>
            <section><Trabajos /></section>
            <section className="bg-gray-900 mt-96 md:mt-0 py-14 w-full">
                <div className="mx-auto max-w-6xl text-white text-center">
                    <h2 className="mb-4 font-bold text-3xl md:text-3xl">
                        +20 años brindando soluciones eléctricas confiables
                    </h2>
                    <p className="opacity-90 text-lg md:text-xl">
                        Acompañando hogares y empresas con experiencia y calidad.
                    </p>
                </div>
            </section>
            <Data />
            <section><Products /></section>
        </div>
    )
}

export default Home