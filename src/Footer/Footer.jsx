import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; // Import icons

function Footer() {
  return (
    <div className='flex items-center justify-between w-full h-20 px-8 py-4 text-white bg-black'>
      
      {/* Left section (Icons) */}
     
      <p>Copyright © 2024</p>

      {/* Right section (Copyright) */}
      <div className="flex space-x-4">
        <a href="https://www.linkedin.com/in/shifa-tahreem-67607123a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={24} className="hover:text-[#0077B5] transition-colors duration-300" />
        </a>
        <a href="https://github.com/stahreem" target="_blank" rel="noopener noreferrer">
          <FaGithub size={24} className="hover:text-[#333] transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
