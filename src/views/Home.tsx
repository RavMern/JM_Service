import React from 'react'
import Hero from '../components/HeroSection/Hero'
import Trabajos from '../components/TrabajosSection/Trabajos'
import Products from '../components/ProductSection/Products'

function Home(): React.ReactElement {
    return (
        <div >

            <section> <Hero /></section>
            <section><Trabajos /></section>
            <section><Products /></section>
        </div>
    )
}

export default Home