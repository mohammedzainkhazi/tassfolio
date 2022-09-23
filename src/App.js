import React from 'react'
import Home from './coponents/Home'
import NavBar from './coponents/NavBar'
import  Education from './coponents/Education'
import Projects from './coponents/Projects'
import Contact from './coponents/Contact'
import Footer from './coponents/Footer'




export default function App() {
  return (
    <div>
        <NavBar/>
        <Home/>
        <Education/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  )
}

