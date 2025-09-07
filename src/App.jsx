import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


function App(){
  return(
   <div className='bg-black min-h-screen text-white'>
    <Header />
    <Hero />
    <Services />
    <About />
    <Contact />
    <Footer/>

   </div>
  )
}

export default App