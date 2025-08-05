import React from 'react'

function Hero(): React.ReactElement {
    return (
        <div className='bg-background h-svh max-h-[1200px]'>
            <div className='m-auto max-w-7xl'>
                <header className='flex flex-col gap-6'>
                    <h2 className='font-bold text-white text-3xl'>JM Service</h2>
                    <p className='w-[700px] text-md text-primary-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam maxime illo deserunt animi ut ducimus omnis. Illo labore, fuga natus numquam sapiente veniam harum, repellendus asperiores quaerat doloremque, eius at.</p>
                    <button className='bg-cta p-2 rounded-md w-max font-semibold text-md text-white'>Conocer Más</button>
                </header>
                <section className='my-4 rounded-lg h-96 overflow-hidden'>
                    <img src="https://cdn.manomano.com/media/edison/0/e/5/b/0e5be98f471a.jpg" alt="WorkDone" />
                </section>
            </div>
        </div>
    )
}

export default Hero