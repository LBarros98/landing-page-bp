import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import CTA from './components/CTA'
import About from './components/About'
import Steps from './components/Steps'
import Diferenciais from './components/Diferenciais'
import Depoimentos from './components/Depoimentos'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal variant="fadeUp">
          <Services />
        </Reveal>
        <Reveal variant="fadeLeft">
          <CTA />
        </Reveal>
        <Reveal variant="fadeRight">
          <About />
        </Reveal>
        <Reveal variant="scale">
          <Steps />
        </Reveal>
        <Reveal variant="slideUp">
          <Diferenciais />
        </Reveal>
        <Reveal variant="fadeIn">
          <Depoimentos />
        </Reveal>
        <Reveal variant="fadeLeft">
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}

export default App
