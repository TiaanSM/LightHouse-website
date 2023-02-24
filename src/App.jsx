import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Main from './components/Main'
import AnimatedSection from './components/AnimatedSection'
import ServicesSection from './components/ServicesSection'
import About from './components/About'
import Footer from './components/Footer'

function App() {

  // bg: #070707

  return (
    <div className="App">

      <Navbar/>
      <Header/>
      <Main/>
      <AnimatedSection/>
      <ServicesSection/>
      <About/>
      <Footer/>
      
    </div>
  )
}

export default App
