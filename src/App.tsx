import Header from './components/Header/Header'
import Hero from './components/HeroSection/Hero'
import Products from './components/ProductSection/Products'
import Trabajos from './components/TrabajosSection/Trabajos'

function App() {

  return (
    <body className='bg-background'>
      <nav>
        <Header />
      </nav>
      <div className='px-14 py-20'>

        <section> <Hero /></section>
        <section><Trabajos /></section>
        <section><Products /></section>
        {/* <section>Servicios electricidad</section> */}
        {/* <section>Servicios albañileria</section> */}
        {/* <section>Que ofrecemos?</section> */}
        {/* <section>Sobre mi Juan</section> */}
        {/* <section>Sobre mi damian</section> */}
        {/* <section>Contactame</section> */}
        <footer></footer>
      </div>
    </body>
  )
}

export default App
