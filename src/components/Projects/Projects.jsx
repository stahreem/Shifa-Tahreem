import React from 'react';
import tm from '../../assets/tm.png';
import cc from '../../assets/cc.png';
import tc from '../../assets/tc.png'
import fd from '../../assets/fd.jpeg'
import pg from '../../assets/pg.png'
import cm from '../../assets/cm.jpg'
function Projects() {
  return (
    <div name="projects" className="flex flex-col items-center justify-center w-full min-h-screen px-4 py-8 overflow-hidden font-serif text-center text-white">
      <h1 className="mb-8 text-3xl font-semibold" data-aos="fade-in" data-aos-id="super-duper">
      Past Projects
      </h1>
      
      {/* 1st Project - task management */}
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
      

      {/* 2nd projects  currency conveter*/}

      <div className='flex flex-col items-center justify-center w-full p-5 mb-8 border-2 rounded-2xl lg:flex-row lg:max-w-4xl border-slate-800 bg-slate-800'
      data-aos="fade-down">
        
        {/* Image Section */}
        <div className='flex justify-center w-full mb-6 lg:w-1/2 lg:mb-0'>
          <img src={cc} className='w-full h-auto max-w-sm rounded-lg lg:max-w-full' alt="Task Management"/>
        </div>
        
        {/* Content Section */}
        <div className='w-full lg:w-1/2 lg:text-left lg:pl-6'>
          <h2 className="mb-4 text-xl font-semibold">Currency Converter</h2>
          <p className="mb-4 text-[15px] font-[550px] text-gray-200">A responsive Currency Converter application that utilizes a custom hook with useEffect to fetch real-time exchange rates via an API. Users can easily convert any currency to another, thanks to the intuitive interface and a handy swap function.</p>
          
          {/* Tech Stack List */}
          <ul className='flex flex-wrap items-center gap-5 text-xs font-semibold lg:items-start'>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>React</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Tailwind css</li>
           
          </ul>
          <div className="flex mt-5 space-x-4">
            <button className="px-6 py-2 font-semibold bg-[#38b2ac] text-white rounded-md hover:bg-transparent hover:text-[#38b2ac] border-2 border-[#38b2ac] transition duration-300">
              <a
              href='https://github.com/stahreem/Currency-Converter-React-'>
              Source Code
              </a>
            </button>
            <button className="px-6 py-2 mr-4 font-semibold bg-[#1E90FF] text-white rounded-md hover:bg-transparent hover:text-[#1E90FF] border-2 border-[#1E90FF] transition duration-300"
            >
              <a
              href='https://globalexchanger.netlify.app/'
              >
              View Project
              </a>
            </button>
          </div>
        </div>
      </div>


 {/* 3nd projects Pass word generator */}

  <div className='flex flex-col items-center justify-center w-full p-5 mb-8 border-2 rounded-2xl lg:flex-row lg:max-w-4xl border-slate-800 bg-slate-800'
      data-aos="fade-down">
        
        {/* Image Section */}
        <div className='flex justify-center w-full mb-6 lg:w-1/2 lg:mb-0'>
          <img src={pg} className='w-full h-auto max-w-sm rounded-lg lg:max-w-full' alt="Task Management"/>
        </div>
        
        {/* Content Section */}
        <div className='w-full lg:w-1/2 lg:text-left lg:pl-6'>
          <h2 className="mb-4 text-xl font-semibold">Password-Generator</h2>
          <p className="mb-4 text-[15px] font-[550px] text-gray-200">In this website you can create any password which can be customized with numbers and special character and i will be using vite react and has reaponsive</p>
          
          {/* Tech Stack List */}
          <ul className='flex flex-wrap items-center gap-5 text-xs font-semibold lg:items-start'>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>React</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Tailwind css</li>
           
          </ul>
          <div className="flex mt-5 space-x-4">
            <button className="px-6 py-2 font-semibold bg-[#38b2ac] text-white rounded-md hover:bg-transparent hover:text-[#38b2ac] border-2 border-[#38b2ac] transition duration-300">
              <a
              href=''>
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


  {/* 4nd projects  twitter clone */}


 <div className='flex flex-col items-center justify-center w-full p-5 mb-8 border-2 rounded-2xl lg:flex-row lg:max-w-4xl border-slate-800 bg-slate-800'
      data-aos="fade-down">
        
        {/* Image Section */}
        <div className='flex justify-center w-full mb-6 lg:w-1/2 lg:mb-0'>
          <img src={tc} className='w-full h-auto max-w-sm rounded-lg lg:max-w-full' alt="Task Management"/>
        </div>
        
        {/* Content Section */}
        <div className='w-full lg:w-1/2 lg:text-left lg:pl-6'>
          <h2 className="mb-4 text-xl font-semibold">Twitter Clone 🐦</h2>
          <p className="mb-4 text-[15px] font-[550px] text-gray-200">A full-stack Twitter clone built using the MERN stack with jQuery for smooth DOM manipulation and Hot Toast for real-time notifications. Users can upload images through Cloudinary and enjoy secure user authentication for logging in and posting.</p>
          
          {/* Tech Stack List */}
          <ul className='flex flex-wrap items-center gap-5 text-xs font-semibold lg:items-start'>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>React</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Tailwind css</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Cloudinary</li>
          <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Express</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Node.js</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>MongoDB</li>
           
          </ul>
          <div className="flex mt-5 space-x-4">
            <button className="px-6 py-2 font-semibold bg-[#38b2ac] text-white rounded-md hover:bg-transparent hover:text-[#38b2ac] border-2 border-[#38b2ac] transition duration-300">
              <a
              href='https://github.com/stahreem/twitter-clone'>
              Source Code
              </a>
            </button>
            <button className="px-6 py-2 mr-4 font-semibold bg-[#1E90FF] text-white rounded-md hover:bg-transparent hover:text-[#1E90FF] border-2 border-[#1E90FF] transition duration-300"
            >
              <a
              href='https://mini-project-ypqy.onrender.com/login'
              >
              View Project
              </a>
            </button>
          </div>
        </div>
      </div>
      
 {/* 5th projects Food delivery    */}

 <div className='flex flex-col items-center justify-center w-full p-5 mb-8 border-2 rounded-2xl lg:flex-row lg:max-w-4xl border-slate-800 bg-slate-800'
      data-aos="fade-down">
        
        {/* Image Section */}
        <div className='flex justify-center w-full mb-6 lg:w-1/2 lg:mb-0'>
          <img src={fd} className='w-full h-auto max-w-sm rounded-lg lg:max-w-full' alt="Task Management"/>
        </div>
        
        {/* Content Section */}
        <div className='w-full lg:w-1/2 lg:text-left lg:pl-6'>
          <h2 className="mb-4 text-xl font-semibold">🍕 Food Delivery Website  </h2>
          <p className="mb-4 text-[15px] font-[550px] text-gray-200">A dynamic platform built with user authentication and role-based access. It features two roles: Users and Restaurant Owners. Users can browse various dishes, add them to their cart, and place orders. Restaurant owners have the ability to add and manage their food items on the website. With a seamless ordering process and user-friendly design, the platform offers a smooth experience for both users and restaurant owners.</p>
          
          {/* Tech Stack List */}
          <ul className='flex flex-wrap items-center gap-5 text-xs font-semibold lg:items-start'>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>React</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Tailwind css</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Node js</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Express</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>MongoDB</li>
          </ul>
          <div className="flex mt-5 space-x-4">
            <button className="px-6 py-2 font-semibold bg-[#38b2ac] text-white rounded-md hover:bg-transparent hover:text-[#38b2ac] border-2 border-[#38b2ac] transition duration-300">
              <a
              href='https://github.com/stahreem/Books-Store-Management-/tree/main/OneDrive/Documents/Book%20store'>
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

  {/* 6nd projects   ThinkInk - blogging Platform */}


      <div className='flex flex-col items-center justify-center w-full p-5 mb-8 border-2 rounded-2xl lg:flex-row lg:max-w-4xl border-slate-800 bg-slate-800'
      data-aos="fade-down">
        
        {/* Image Section */}
        <div className='flex justify-center w-full mb-6 lg:w-1/2 lg:mb-0'>
          <img src={cm} className='w-full h-auto max-w-sm rounded-lg lg:max-w-full' alt="Task Management"/>
        </div>
        
        {/* Content Section */}
        <div className='w-full lg:w-1/2 lg:text-left lg:pl-6'>
          <h2 className="mb-4 text-xl font-semibold">🖋️ ThinkInk - Blogging Platform</h2>
          <p className="mb-4 text-[15px] font-[550px] text-gray-200">A feature-rich platform where users can create, edit, and share blog posts. Built for writers and readers, it allows users to easily manage their content, with seamless functionality for publishing and updating posts. The platform ensures a smooth user experience with its intuitive design and user authentication system.</p>
          
          {/* Tech Stack List */}
          <ul className='flex flex-wrap items-center gap-5 text-xs font-semibold lg:items-start'>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>React</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Tailwind css</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Node js</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Express</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>MongoDB</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Fire Base </li>
           
          </ul>
          <div className="flex mt-5 space-x-4">
            <button className="px-6 py-2 font-semibold bg-[#38b2ac] text-white rounded-md hover:bg-transparent hover:text-[#38b2ac] border-2 border-[#38b2ac] transition duration-300">
              <a
              href='https://github.com/stahreem/Currency-Converter-React-'>
             Upcomming 
              </a>
            </button>
            {/* <button className="px-6 py-2 mr-4 font-semibold bg-[#1E90FF] text-white rounded-md hover:bg-transparent hover:text-[#1E90FF] border-2 border-[#1E90FF] transition duration-300"
            >
              <a
              href='https://globalexchanger.netlify.app/'
              >
              View Project
              </a> 
            </button> */}
          </div>
        </div>
      </div>


 {/* 5th projects Nextstep    */}

 <div className='flex flex-col items-center justify-center w-full p-5 mb-8 border-2 rounded-2xl lg:flex-row lg:max-w-4xl border-slate-800 bg-slate-800'
      data-aos="fade-down">
        
        {/* Image Section */}
        <div className='flex justify-center w-full mb-6 lg:w-1/2 lg:mb-0'>
          <img src={cm} className='w-full h-auto max-w-sm rounded-lg lg:max-w-full' alt="Task Management"/>
        </div>
        
        {/* Content Section */}
        <div className='w-full lg:w-1/2 lg:text-left lg:pl-6'>
          <h2 className="mb-4 text-xl font-semibold"> 💼 Nextstep </h2>
          <p className="mb-4 text-[15px] font-[550px] text-gray-200">A Job Board System is a platform designed to connect recruiters and job seekers. Users can create profiles, search for job listings, and apply for positions, while recruiters can post job openings and manage applications. The system supports multiple roles, providing tailored functionality for both job seekers and recruiters.</p>
          
          {/* Tech Stack List */}
          <ul className='flex flex-wrap items-center gap-5 text-xs font-semibold lg:items-start'>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>React</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Tailwind css</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Node js</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>Express</li>
            <li className='px-4 py-1 border-2 rounded-md border-slate-900 bg-slate-900'>MongoDB</li>
          </ul>
          <div className="flex mt-5 space-x-4">
            <button className="px-6 py-2 font-semibold bg-[#38b2ac] text-white rounded-md hover:bg-transparent hover:text-[#38b2ac] border-2 border-[#38b2ac] transition duration-300">
              <a
              href=''>
              Upcomming
              </a>
            </button>
            {/* <button className="px-6 py-2 mr-4 font-semibold bg-[#1E90FF] text-white rounded-md hover:bg-transparent hover:text-[#1E90FF] border-2 border-[#1E90FF] transition duration-300"
            >
              <a
              href='https://github.com/stahreem/Books-Store-Management-/tree/main/OneDrive/Documents/Book%20store'
              >
              View Project
              </a>
            </button> */}
          </div>
        </div>
      </div>
 


    </div>
  );
}

export default Projects;
