import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Hero from './sections/Hero'
import Badges from './sections/Badges'
import About from './sections/About'
import Values from './sections/Values'
import Team from './sections/Team'
import Policies from './sections/Policies'
import Contact from './sections/Contact'
import './index.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Badges />
        <About />
        <Values />
        <Team />
        <Policies />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
