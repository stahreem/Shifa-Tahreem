import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import {Link} from 'react-dom'
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#010d1d] font-serif'>
    {/* Container */}
    <div className='max-w-[1000px] left-0 mx-[10px] px-8 flex flex-col justify-center h-full'>
      <p className='text-emerald-800'>Hi, my name is</p>
      <h1 className='text-3xl sm:text-5xl font-bold text-[#ffffff]'>
            Shifa Tahreem 
      </h1>
      <h2 className='text-xl sm:text-4xl font-bold text-[#8892b0]'>
        I'm a Full Stack Developer.
      </h2>
      <p className='text-[#8892b0] py-4 max-w-[800px]'>
      I am a passionate third-year student specializing in web development, with hands-on experience in building dynamic websites using the MERN stack (MongoDB, Express, React, and Node.js). I enjoy turning creative ideas into functional web applications and have a keen eye for detail when it comes to front-end design, utilizing tools like Tailwind CSS and Bootstrap. I am constantly learning and looking for opportunities to apply my skills in real-world projects. 
      </p>
      <div>
        <a></a>
              </div>
      <div>
        <button className='flex items-center px-6 py-3 my-2 text-white border-2 group hover:bg-emerald-800 hover:border-emerald-800'>
          View Work
          <span className='duration-300 group-hover:rotate-90'>
            <HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Home