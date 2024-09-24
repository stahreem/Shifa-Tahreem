import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import Typewriter from 'react-typewriter-effect';

function Home() {
  return (
    <div name="home" className="flex flex-col items-center justify-center w-full h-screen px-4 font-serif text-center text-white"
    >
      {/* bg-gradient-to-b from-dark-blue via-blue to-dark-purple  */}
      <div className="flex flex-col items-center justify-center w-full h-full px-4 text-center"
      data-aos="zoom-out">
        <h1 className="mb-4 text-4xl sm:mt-5 md:text-5xl">
          {/* <Typewriter
            text="Shifa Tahreem"
            cursorColor="#ff4081"
            typeSpeed={200} // Slower typing speed
            deleteSpeed={100} // Speed of deleting text
            delay={2000} // Delay before starting to type
            repeat={true} // Repeats indefinitely
            startDelay={500} // Delay before the first type
          /> */}
          Shifa Tahreem
        </h1>
        <p className="text-2xl text-gray-300 md:text-3xl">I'm a Full-Stack Developer</p>
        <p className="mx-2 text-gray-400 md:mx-40 md:mx-20">
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
