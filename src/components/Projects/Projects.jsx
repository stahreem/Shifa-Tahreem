import React from 'react';
import tm from '../../assets/tm.png';

function Projects() {
  return (
    <div name="projects" className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 overflow-hidden font-serif text-center text-white">
      <h1 className="mb-8 text-3xl font-semibold" data-aos="fade-in" data-aos-id="super-duper">
      Past Projects
      </h1>
      
      {/* Project Card */}
      <div className='flex flex-col items-center justify-center w-full p-5 mb-8 border-2 rounded-lg lg:flex-row lg:max-w-4xl border-slate-800 bg-slate-800'
      data-aos="fade-down">
        
        {/* Image Section */}
        <div className='flex justify-center w-full mb-6 lg:w-1/2 lg:mb-0'>
          <img src={tm} className='w-full h-auto max-w-sm rounded-lg lg:max-w-full' alt="Task Management"/>
        </div>
        
        {/* Content Section */}
        <div className='w-full lg:w-1/2 lg:text-left lg:pl-6'>
          <h2 className="mb-4 text-xl font-semibold">Task Management</h2>
          <p className="mb-4 text-[15px] font-[550px] text-gray-200">A Task Management application with CRUD operations, utilizing MongoDB for data storage, and built with Node.js, Express, and API integration for user authentication.</p>
          
          {/* Tech Stack List */}
          <ul className='flex flex-row items-center gap-5 text-xs font-semibold lg:items-start'>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>HTML</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>CSS</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Node.js</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>MongoDB</li>
          </ul>
          <div className="flex mt-5 space-x-4">
            <button className="px-6 py-2 font-semibold bg-[#38b2ac] text-white rounded-md hover:bg-transparent hover:text-[#38b2ac] border-2 border-[#38b2ac] transition duration-300">
              <a
              href='https://github.com/stahreem/Task-Management-'>
              Source Code
              </a>
            </button>
            <button className="px-6 py-2 mr-4 bg-[#1E90FF] font-semibold text-white rounded-md hover:bg-transparent hover:text-[#1E90FF] border-2 border-[#1E90FF] transition duration-300"
            >
              <a
              href=''
              >
              View Project
              </a>
            </button>
          </div>
        </div>
      </div>
      

      {/* Repeat similar card structure for other projects */}

      <div className='flex flex-col items-center justify-center w-full p-5 mb-8 border-2 rounded-2xl lg:flex-row lg:max-w-4xl border-slate-800 bg-slate-800'
      data-aos="fade-down">
        
        {/* Image Section */}
        <div className='flex justify-center w-full mb-6 lg:w-1/2 lg:mb-0'>
          <img src={tm} className='w-full h-auto max-w-sm rounded-lg lg:max-w-full' alt="Task Management"/>
        </div>
        
        {/* Content Section */}
        <div className='w-full lg:w-1/2 lg:text-left lg:pl-6'>
          <h2 className="mb-4 text-xl font-semibold">Task Management</h2>
          <p className="mb-4 text-[15px] font-[550px] text-gray-200">A Task Management application with CRUD operations, utilizing MongoDB for data storage, and built with Node.js, Express, and API integration for user authentication.</p>
          
          {/* Tech Stack List */}
          <ul className='flex flex-wrap items-center gap-5 text-xs font-semibold lg:items-start'>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>HTML</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>CSS</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Node.js</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>MongoDB</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Tailwind css</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>React</li>
          </ul>
          <div className="flex mt-5 space-x-4">
            <button className="px-6 py-2 font-semibold bg-[#38b2ac] text-white rounded-md hover:bg-transparent hover:text-[#38b2ac] border-2 border-[#38b2ac] transition duration-300">
              <a
              href='https://github.com/stahreem/Task-Management-'>
              Source Code
              </a>
            </button>
            <button className="px-6 py-2 mr-4 font-semibold bg-[#1E90FF] text-white rounded-md hover:bg-transparent hover:text-[#1E90FF] border-2 border-[#1E90FF] transition duration-300"
            >
              <a
              href=''
              >
              View Project
              </a>
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Projects;
