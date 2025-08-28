import React from 'react'
import { Link } from 'react-router-dom'

function Footer(): React.ReactElement {
    return (
        <footer className='flex md:flex-row flex-col gap-10 md:gap-0 bg-primary-light px-10 py-5 min-h-44'>
            <section className='flex flex-col justify-between w-full'>
                <div className='items-bottom relative flex flex-row items-baseline gap-1 mb-2 w-full font-bold text-white md:text-xl text-5xl'>
                    <h1 className="text-cta md:text-2xl">JM</h1>
                    <h2 className='h-max'>
                        Service
                    </h2>
                </div>
                <a className='group font-semibold text-subTitle'>Desarrollado por
                    <span className='px-1 font-bold group-hover:text-purple-700/40 duration-200'>
                        Ravmern
                    </span>
                </a>
            </section>
            <section className='flex flex-row justify-between items-top w-full'>
                <ul className='flex flex-col gap-2 border-r-2 border-r-subTitle w-full font-medium text-gray-200 text-center'>
                    <li className='font-semibold text-white'>Paginas</li>
                    <li className='hover:text-cta duration-200'><Link to={"/"}>
                        Home
                    </Link></li>
                    <li className='hover:text-cta duration-200'> <Link to={"/Servicios"}>
                        Servicios
                    </Link></li>
                    <li className='hover:text-cta duration-200'>
                        <a href="https://jmservice.tiendanegocio.com">Tienda Online</a>
                    </li>
                </ul>
                <ul className='flex flex-col gap-2 w-full font-medium text-gray-200 text-center'>
                    <li className='font-semibold text-white'>Nosotros</li>
                    <li className='hover:text-cta duration-200'> <Link to={"/about/electricista"}>
                        Sobre Juan M
                    </Link></li>
                    <li className='hover:text-cta duration-200'> <Link to={"/about/albanil"}>
                        Sobre David
                    </Link></li>
                </ul>
            </section>
        </footer>
    )
}

export default Footer