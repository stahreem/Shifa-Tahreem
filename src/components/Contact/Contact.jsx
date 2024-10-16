import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'; // Import FaEnvelope for email icon
import toast, { Toaster } from 'react-hot-toast'; // Import Hot Toast

function Contact() {
  return (
    <div name="contact" className="flex flex-col items-center justify-center w-full h-screen px-4 overflow-hidden font-serif text-center text-white">
      <Toaster position="top-right" /> {/* Hot Toast container */}
      
      <h1 className="mb-4 text-3xl font-semibold" data-aos="fade-in" data-aos-id="super-duper">Let's Talk</h1>
      
      {/* Main Container */}
      <div className="flex flex-col items-center justify-between w-full max-w-4xl gap-10 md:flex-row md:items-start md:mb-3 ">
        
        {/* Left Section - Social Links */}
        <div className="flex flex-col items-center justify-start gap-6 text-xl font-medium text-slate-900 md:items-start" data-aos="fade-right">
          <p className='text-[17px] md:text-xl text-gray-200'>
            I'm always excited to explore new opportunities. <br />
            Don't hesitate to get in touch with any inquiries, collaboration ideas, or project proposals!
          </p>

          {/* Glowing message */}
          <div className="text-gray-500">
            <p className="text-[18px] font-semibold text-center md:text-left text-gray-200 glow">
              <span className="glowing-text">
               <span className='text-cyan-700 font-bold'> Unfortunately,</span> the contact form is currently not working. You can reach out to me via email or connect with me on LinkedIn.
              </span>
            </p>
          </div>

          {/* Social Links - Email */}
          <div className="flex items-center gap-4 md:mb-4">
            <FaEnvelope size={40} className="text-[#38b2ac] hover:text-white cursor-pointer" />
            <a href="mailto:tahreemshifa14@gmail.com " target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#38b2ac]">tahreemshifa14@gmail.com  </a>
            <span className='text-cyan-400'>||</span>
            <a href="mailto:shifatahreem313@gmail.com " target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#38b2ac]">shifatahreem313@gmail.com </a>
          </div>

          {/* Social Links - LinkedIn */}
          <div className="flex items-center gap-4 md:mb-4">
            <FaLinkedin size={40} className="text-[#0A66C2] hover:text-white cursor-pointer" />
            <a href="https://www.linkedin.com/in/shifa-tahreem-67607123a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#38b2ac]">LinkedIn</a>
          </div>

          {/* Social Links - GitHub */}
          <div className="flex items-center gap-4">
            <FaGithub size={40} className="text-gray-800 cursor-pointer hover:text-white" />
            <a href="https://github.com/stahreem" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#38b2ac]">GitHub</a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <form 
            className="flex flex-col gap-6"
            name="contact" 
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field" 
          >
            {/* Hidden input required for Netlify form submission */}
            <input type="hidden" name="form-name" value="contact" />
  
            {/* Input fields */}
            <div>
              <input 
                className="w-full p-4 border-2 border-slate-800 bg-slate-800 rounded-lg focus:outline-none focus:border-[#38b2ac] transition" 
                type="text" 
                placeholder="Name" 
                name="name"
                required
              />
            </div>

            <div>
              <input 
                className="w-full p-4 border-2 border-slate-800 bg-slate-800 rounded-lg focus:outline-none focus:border-[#38b2ac] transition" 
                type="email" 
                placeholder="Email" 
                name="email"
                required                
              />
            </div>

            <div>
              <textarea 
                className="w-full p-4 border-2 border-slate-800 bg-slate-800 rounded-lg focus:outline-none focus:border-[#38b2ac] transition" 
                placeholder="Message..."     
                rows="4"
                name="message"
                required
              />
            </div>

            <button className="px-6 py-2 font-semibold bg-[#38b2ac] text-white rounded-md hover:bg-transparent hover:text-[#38b2ac] border-2 border-[#38b2ac] transition duration-300" type="submit">
              Send
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
