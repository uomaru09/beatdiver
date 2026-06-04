import Nav from './components/Nav'
import Hero from './components/Hero'
import Collection from './components/Collection'
import Story from './components/Story'
import Lookbook from './components/Lookbook'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Collection />
      <Story />
      <Lookbook />
      <Contact />
      <Footer />
    </div>
  )
}
