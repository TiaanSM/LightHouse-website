import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Main from './components/Main'
import AnimatedSection from './components/AnimatedSection'
import ServicesSection from './components/ServicesSection'
import About from './components/About'
import Footer from './components/Footer'
import { useInView } from 'react-intersection-observer';

function App() {

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.20,
  });

  return (
    <div className="App">

      <Navbar inView={inView}/>
      <Header/>
      <Main/>
      <AnimatedSection/>
      <div ref={ref}>
      <ServicesSection inView={inView} />
      </div>
      <About/>
      <Footer/>
      
    </div>
  )
}

export default App
