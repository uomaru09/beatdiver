import Nav from './components/Nav'
import Hero from './components/Hero'
import Concept from './components/Concept'
import Features from './components/Features'
import Collection from './components/Collection'
import MiddleBand from './components/MiddleBand'
import Lookbook from './components/Lookbook'
import Footer from './components/Footer'
import { LangProvider } from './context/LangContext'

export default function App() {
  return (
    <LangProvider>
      <div className="min-h-screen bg-[#0d0f1a]">
        <Nav />
        <Hero />
        <Concept />
        <Features />
        <Collection />
        <MiddleBand />
        <Lookbook />
        <Footer />
      </div>
    </LangProvider>
  )
}
