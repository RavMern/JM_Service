import React from 'react'

const productos = [
    {
        imageUrl: "https://http2.mlstatic.com/D_NQ_NP_839539-MLA31428868580_072019-O.webp",
        titulo: "Escuela N°59",
        subTitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea reprehenderit illum odit est consequuntur",
    },
    {
        imageUrl: "https://i.ytimg.com/vi/1se9kYt9HZ0/maxresdefault.jpg",
        titulo: "Clinica San miguel",
        subTitulo: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Ea reprehenderit illum odit est consequuntur ",
    }
]
function Products(): React.ReactElement {
    return (
        <div className='max-h-[1200px]'>
            <div className='m-auto max-w-7xl'>
                <header>
                    <h3 className='font-bold text-white text-3xl'>Top Products</h3>
                </header>
                <section className='flex flex-row justify-around items-center gap-14 my-10'>
                    {productos.map((producto, index) => (
                        <div key={index} className='flex flex-col items-center w-full'>
                            <img src={producto.imageUrl} alt={producto.titulo} className='rounded-md w-full h-64' />
                            <h5 className='w-full font-bold text-white text-xl text-left'>{producto.titulo}</h5>
                            <p className='w-full text-md text-primary-light text-left'>{producto.subTitulo}</p>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    )
}

export default Products