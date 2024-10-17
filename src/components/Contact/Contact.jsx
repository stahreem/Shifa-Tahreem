import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import icons

function Contact() {
  return (
    <div name="contact" className="flex flex-col items-center justify-center w-full h-screen px-4 overflow-hidden font-serif text-center text-white">
      <h1 className="mb-4 text-3xl font-semibold mt-[-10px]" data-aos="fade-in" data-aos-id="super-duper">Let's Talk</h1>
      
      
       {/* Main Container */}
       <div className="flex flex-col items-center justify-center w-full max-w-4xl gap-10 text-xl font-medium text-slate-900"
        data-aos="fade-right" data-aos-id="super-duper">
        
        {/* Left Section - Message */}
        <p className='text-[17px] md:text-xl text-gray-200' data-aos="fade-right" data-aos-delay="200">
          I'm always excited to explore new opportunities. <br />
          Don't hesitate to get in touch with any inquiries, collaboration ideas, or project proposals!
        </p>

        {/* Contact Information */}
        <div className="flex flex-col items-center gap-4" data-aos="fade-right" data-aos-delay="400">
          {/* Email Links */}
          <div className="flex items-center gap-2" data-aos="fade-right" data-aos-delay="600">
            <FaEnvelope size={30} className="text-[#38b2ac] hover:text-white cursor-pointer" />
            <a href="mailto:tahreemshifa14@gmail.com " target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#38b2ac]">tahreemshifa14@gmail.com  </a>
            <span className='text-cyan-400'>||</span>
            <a href="mailto:shifatahreem313@gmail.com " target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#38b2ac]">shifatahreem313@gmail.com </a>
          </div>

          {/* LinkedIn Link */}
          <div className="flex items-center gap-2" data-aos="fade-right" data-aos-delay="800">
            <FaLinkedin size={30} className="text-[#0A66C2] hover:text-white cursor-pointer" />
            <a href="https://www.linkedin.com/in/shifa-tahreem-67607123a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#38b2ac]">LinkedIn</a>
          </div>

          {/* GitHub Link */}
          <div className="flex items-center gap-2" data-aos="fade-right" data-aos-delay="1000">
            <FaGithub size={30} className="text-gray-800 cursor-pointer hover:text-white" />
            <a href="https://github.com/stahreem" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#38b2ac]">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
