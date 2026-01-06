import About from "./(components)/about";
import Hero from "./(components)/hero";
import Services from "./(components)/services";
import Testimonials from "./(components)/testimonials";
import Footer from "./(components)/footer";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <Footer/>
    </main>
  )
}