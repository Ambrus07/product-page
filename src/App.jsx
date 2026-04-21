import ImageCarousel from "./components/Carousel"
import Navbar from "./components/Navbar"
import { ProductSection } from "./components/ProductSection"

const App = () => {
  return (
    <main>
      <Navbar/>

      <section className="contentWrapper">
        <ImageCarousel/>


        <ProductSection/>


      </section>
      

    </main>
  )
}

export default App