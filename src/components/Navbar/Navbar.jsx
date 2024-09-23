import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClickHamburger = () => setNav(!nav);

  return (
    <nav className="w-full h-[90px] fixed z-10 ">
      {/* Main Navbar */}
      <div className="flex justify-center items-center h-full">
        {/* Navbar links for larger screens */}
        <ul className="hidden md:flex flex-row justify-center items-center text-gray-200 gap-7 text-xl">
          <li className="relative text-white group">
            <Link to="home" smooth={true} duration={500}>Home</Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#ff4081] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </li>
          <li className="relative text-white group">
            <Link to="about" smooth={true} duration={500}>About</Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#ff4081] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </li>
          <li className="relative text-white group">
            <Link to="skills" smooth={true} duration={500}>Skills</Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#ff4081] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </li>
          <li className="relative text-white group">
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#ff4081] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </li>
          <li className="relative text-white group">
            <Link to="contact" smooth={true} duration={500}>Contact</Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#ff4081] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </li>
        </ul>

        {/* Hamburger Menu for smaller screens */}
        <div className="md:hidden ml-auto z-10 cursor-pointer absolute right-20 text-white" onClick={handleClickHamburger}>
          {!nav ? <GiHamburgerMenu size={30} /> : <FaTimes size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          nav ? "flex" : "hidden"
        } flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#010d1d] text-gray-200 text-2xl md:hidden`}
      >
        <li className="py-6" onClick={handleClickHamburger}>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="py-6" onClick={handleClickHamburger}>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="py-6" onClick={handleClickHamburger}>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="py-6" onClick={handleClickHamburger}>
          <Link to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className="py-6" onClick={handleClickHamburger}>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
