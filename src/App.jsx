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
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <CTA />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Steps />
        </Reveal>
        <Reveal>
          <Diferenciais />
        </Reveal>
        <Reveal>
          <Depoimentos />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  )
}

export default App
