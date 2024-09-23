import './App.css'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import React from "react"

function App() {


  return (
    <div className='border-solid rounded-xl border-[#e80f0f] '>
     <Navbar className="fixed" />
     <Home/>
    </div>
  )
}

export default App;
