import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll"; // Import Link from react-scroll

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClickHamburger = () => setNav(!nav);

  return (
    <nav className="w-full h-[90px] fixed z-10">
      {/* Main Navbar */}
      <div className="flex items-center justify-center h-full">
        {/* Navbar links for larger screens */}
        <ul className="flex-row items-center justify-center hidden text-xl text-gray-200 md:flex gap-7">
          <li className="relative text-white group">
            <Link to="home" smooth={true} duration={500} onClick={() => setNav(false)}>
              Home
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#ff4081] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </li>
          <li className="relative text-white group">
            <Link to="about" smooth={true} duration={500} onClick={() => setNav(false)}>
              About
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#ff4081] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </li>
          <li className="relative text-white group">
            <Link to="skills" smooth={true} duration={500} onClick={() => setNav(false)}>
              Skills
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#ff4081] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </li>
          <li className="relative text-white group">
            <Link to="projects" smooth={true} duration={500} onClick={() => setNav(false)}>
              Projects
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#ff4081] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </li>
          <li className="relative text-white group">
            <Link to="contact" smooth={true} duration={500} onClick={() => setNav(false)}>
              Contact
            </Link>
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#ff4081] transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </li>
        </ul>

        {/* Hamburger Menu for smaller screens */}
        <div className="absolute z-20 ml-auto text-white cursor-pointer md:hidden right-20" onClick={handleClickHamburger}>
          {!nav ? <GiHamburgerMenu size={30} /> : <FaTimes size={30} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          nav ? "flex" : "hidden"
        } flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#010d1d] text-gray-200 text-2xl md:hidden z-10`}
      >
        <li className="py-6" onClick={handleClickHamburger}>
          <Link to="home" smooth={true} duration={500} onClick={() => setNav(false)}>
            Home
          </Link>
        </li>
        <li className="py-6" onClick={handleClickHamburger}>
          <Link to="about" smooth={true} duration={500} onClick={() => setNav(false)}>
            About
          </Link>
        </li>
        <li className="py-6" onClick={handleClickHamburger}>
          <Link to="skills" smooth={true} duration={500} onClick={() => setNav(false)}>
            Skills
          </Link>
        </li>
        <li className="py-6" onClick={handleClickHamburger}>
          <Link to="projects" smooth={true} duration={500} onClick={() => setNav(false)}>
            Projects
          </Link>
        </li>
        <li className="py-6" onClick={handleClickHamburger}>
          <Link to="contact" smooth={true} duration={500} onClick={() => setNav(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
