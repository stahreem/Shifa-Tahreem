import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import bg from '../../assets/bg.svg';
import pp from '../../assets/pp.svg';
import Typewriter from 'react-typewriter-effect';

function Home() {
  return (
    <div name="home" className="w-full h-screen font-serif text-white flex flex-col justify-center items-center text-center px-4">
      {/* bg-gradient-to-b from-dark-blue via-blue to-dark-purple  */}
      <div className="w-full h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl mb-4 sm:mt-5 md:text-5xl">
          <Typewriter
            text="Shifa Tahreem"
            cursorColor="#ff4081"
            typeSpeed={200} // Slower typing speed
            deleteSpeed={100} // Speed of deleting text
            delay={2000} // Delay before starting to type
            repeat={true} // Repeats indefinitely
            startDelay={500} // Delay before the first type
          />
        </h1>
        <p className="text-2xl text-gray-300 md:text-3xl">I'm a Full-Stack Developer</p>
        <p className="text-gray-400 mx-2 md:mx-40 md:mx-20">
          I am a skilled full-stack developer with expertise in building dynamic and scalable web applications. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have a strong foundation in both frontend and backend development. My focus has been on designing responsive UIs, developing efficient APIs, and optimizing database performance. I actively explore new technologies and enjoy contributing to real-world projects and open-source initiatives.
        </p>
        <div>
          <button className='p-3 mt-3 border-4 border-[#ff4081] bg-[#ff4081] text-white rounded-md hover:bg-transparent hover:text-[#ff4081] transition duration-300'>
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
