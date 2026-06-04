import Nav from './components/Nav'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Story from './components/Story'
import Lookbook from './components/Lookbook'
import Instagram from './components/Instagram'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LangProvider } from './context/LangContext'

export default function App() {
  return (
    <LangProvider>
      <div className="min-h-screen">
        <Nav />
        <Hero />
        <Collection />
        <Story />
        <Lookbook />
        <Instagram />
        <Contact />
        <Footer />
      </div>
    </LangProvider>
  )
}
