import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  // useEffect(() => {
  //   AOS.init({ duration: 1000 }); // Initialize AOS with a duration for the animations
  // }, []);

  return (
    <div
      name="about"
      className="flex flex-col items-center justify-center w-full h-screen px-4 font-serif text-center text-white"
    >
      <h1 className="mt-[-50px] mb-4 text-4xl"
      data-aos="fade-in" 
      data-aos-id="super-duper"
      >About Me</h1>
      <div className="flex flex-col p-x-10 md:mt-5">
        <p
          className="text-gray-100 md:mr-40"
          data-aos="fade-left"
        >
          I’m Shifa Tahreem, a passionate Full-Stack Developer with a strong background in both frontend and backend technologies.<br/> My journey in web development began a few years ago, driven by a deep curiosity about how the web works. Since then,<br/> I’ve immersed myself in various projects, from designing intuitive user interfaces to building scalable backend systems.
        </p>
        <p
          className="my-10 text-gray-100 md:mx-40 md:ml-10"
          data-aos="fade-right"
          // text-gray-100 md:mr-40
        >
          Throughout this journey, I’ve specialized in the MERN stack, enabling me to create dynamic and responsive applications.<br/> I’m constantly exploring new technologies and love the challenge of solving complex problems with clean, efficient code.
        </p>
        <p
          className="text-gray-100 md:mx-40 md:mr-10"
          data-aos="fade-left"
        >
          I’m a firm believer in continuous learning and love collaborating on projects that push the boundaries of innovation.<br/> When I’m not coding, I enjoy contributing to open-source projects and staying updated with the latest industry trends.
        </p>
        <div><button
        offset="50"
        data-aos="fade-right"
        className='p-3 mt-5 border-4 border-[#ff4081] bg-[#ff4081] text-white rounded-md hover:bg-transparent hover:text-[#ff4081] transition duration-300'>
            Download CV
          </button></div>
      </div>
    </div>
  );
}

export default About;
