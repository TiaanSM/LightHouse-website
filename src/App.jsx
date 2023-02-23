import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Main from './components/Main'
import ServicesSection from './components/ServicesSection'
import About from './components/About'

function App() {

  // bg: #070707

  return (
    <div className="App">

      <Navbar/>
      <Header/>
      <Main/>
      <ServicesSection/>
      <About/>
      
    </div>
  )
}

export default App
