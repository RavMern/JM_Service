import Header from './components/Header/Header'
import Hero from './components/HeroSection/Hero'
import Products from './components/ProductSection/Products'
import Trabajos from './components/TrabajosSection/Trabajos'
import RoutesProvider from './RoutesProvider'

function App() {

  return (
    <body className='bg-background'>
      <RoutesProvider />

    </body>
  )
}

export default App
