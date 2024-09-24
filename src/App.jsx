import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './components/About/About'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import React from "react"
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles globally
function App() {
  
  useEffect(() => {
    AOS.init({
      offset: 200, // offset (in px) from the original trigger point
      duration: 3000, // values from 0 to 3000, with step 50m
    });
  }, []);

  return (
    <div className='bg-gradient-to-b from-dark-blue via-blue to-dark-purple '>
     <Navbar/>
     <Home/>
     <About/>
     <Skills/>
     <Projects/>
     <Contact/>
    </div>
  )
}

export default App;
