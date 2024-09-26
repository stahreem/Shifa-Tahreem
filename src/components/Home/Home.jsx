import React from 'react';

function Home() {
  return (
    <div name="home" className="flex flex-col items-center justify-center w-full h-screen px-4 overflow-x-hidden font-serif text-center text-white"
    >
      <div className="flex flex-col items-center justify-center w-full h-full px-4 text-center"
      data-aos="zoom-out">
        <h1 className="mb-4 text-4xl font-bold sm:mt-5 md:text-5xl">
          Shifa Tahreem
        </h1>
        <p className="text-2xl font-semibold text-gray-300 md:text-3xl">I'm a Web Developer</p>
        <p className="mx-2 text-gray-400 md:mx-20">
          I am a skilled Web developer with expertise in building dynamic and scalable web applications. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and have a strong foundation in both frontend and backend development. My focus has been on designing responsive UIs, developing efficient APIs, and optimizing database performance. I actively explore new technologies and enjoy contributing to real-world projects and open-source initiatives.
        </p>
        <div>
          <button className='p-3 mt-3 border-4 border-[#ff4081] bg-[#ff4081] text-white rounded-md hover:bg-transparent hover:text-[#ff4081] transition duration-300'>
            <a
             href="/shifa.pdf"
             download="My_CV.pdf">
            Download CV
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
