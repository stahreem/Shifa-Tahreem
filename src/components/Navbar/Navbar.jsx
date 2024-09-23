import React, { useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {
  const [nav, setNav] = useState(false)

  const hadleClickHamburger = () => setNav(!nav)

  return (
    <nav>
    <div className='fixed w-full h-[80px] flex justify-center bg-[#010d1d] text-gray-300 px-8 font-serif'>
      <ul className=" text-l hidden md:flex gap-x-10  justify-center pt-5">  {/* mx-10 */}
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
     

      {/* Hamburger */}
      <div 
      onClick= {hadleClickHamburger}
      className=" md:hidden cursor-pointer text-3xl ml-[540px] mt-6 z-10">
      {!nav ? <FaBars/>: <FaTimes/>}
      </div>

      {/* Mobile menu */}
      
      <ul className= {!nav ? 'hidden': "absolute top-0 left-0 w-full h-screen bg-[#010d1d] flex flex-col justify-center items-center"} >
        <li className="py-6 text-3xl">Home</li>
        <li className="py-6 text-3xl">About</li>
        <li className="py-6 text-3xl">Skills</li>
        <li className="py-6 text-3xl">Project</li>
        <li className="py-6 text-3xl">Contact</li>
      </ul>
      </div>
      {/* social icons */}
    <div></div>
    
    </nav>
  )
}

export default Navbar