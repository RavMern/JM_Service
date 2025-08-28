import React from 'react'
import { motion } from "framer-motion"

function Hero(): React.ReactElement {
    return (
        <div className='z-50 bg-background bg-cover bg-no-repeat bg-center m-auto w-full max-w-[1500px] min-h-screen max-h-[1200px]' style={{ backgroundImage: `url("https://mtcopeland.com/wp-content/uploads/2022/01/shutterstock_1815897341-min-scaled.jpg")` }}>

            <div className='z-40 bg-primary-dark/30 backdrop-blur-[2px] m-auto w-full max-w-[1500px] h-svh max-h-svh md:max-h-[1200px]'  >
                <header className='flex flex-col justify-center items-start gap-6 px-2 md:px-20 h-full'>
                    <div className="items-bottom relative flex flex-row items-baseline gap-3 mb-2 font-bold text-white text-5xl md:text-8xl">
                        <motion.div
                            initial={{ translateX: -200, opacity: 0 }}
                            whileInView={{ translateX: 0, opacity: 1 }}
                            transition={{ duration: 2, ease: "circInOut" }}
                            viewport={{ once: true }}
                            className="hidden md:inline -top-20 right-82 absolute border-r-9 border-r-cta/40 w-28 md:w-52 h-56"
                        ></motion.div>
                        <motion.h1 initial={{ translateX: -200, opacity: 0 }}
                            whileInView={{ translateX: 0, opacity: 1 }}
                            transition={{ duration: 1.5, }}
                            viewport={{ once: true }} className="text-cta md:text-9xl">JM</motion.h1>
                        <motion.h2
                            initial={{ translateX: 200, opacity: 0 }}
                            whileInView={{ translateX: 0, opacity: 1 }}
                            transition={{ duration: 1.5, }}
                            viewport={{ once: true }}
                            className='h-max'
                        >
                            Service

                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ translateX: -200, opacity: 0 }}
                        whileInView={{ translateX: 0, opacity: 1 }}
                        transition={{ duration: 1.5, }}
                        viewport={{ once: true }}
                        className="mt-2 max-w-2xl text-gray-200 text-md md:text-lg text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi vel nulla veniam! Quasi soluta unde, mollitia maxime atque est esse repellendus, natus dicta iste illo voluptatum commodi dolorem ipsa facilis.
                    </motion.p>
                    <motion.button
                        initial={{ translateX: -180, opacity: 0 }}
                        whileInView={{ translateX: 0, opacity: 1 }}
                        transition={{ duration: 1.3, }}
                        viewport={{ once: true }} className='bg-cta hover:bg-[#dd8e17] p-2 rounded-md w-max font-semibold text-md text-white text-lg duration-200 cursor-pointer'>Conocer Más</motion.button>
                </header>
            </div>
        </div >
    )
}

export default Hero