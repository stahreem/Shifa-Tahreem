import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast'; // Import Hot Toast

function Contact() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // // Handle input changes
  // const handleChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // // Handle form submission (handled by Netlify)
  // const handleSubmit = (e) => {
  //   e.preventDefault(); // Prevent the default form submission

  //   const form = e.target; // Get the form element
  //   const formSubmission = new FormData(form); // Create FormData object from the form

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: new URLSearchParams(formSubmission).toString()
  //   })
  //     .then(() => {
  //       toast.success("Message sent successfully!"); // Success toast
  //       setFormData({ name: '', email: '', message: '' }); // Reset form
  //     })
  //     .catch((error) => {
  //       toast.error("Oops! Something went wrong."); // Error toast
  //       console.error("Error submitting form:", error);
  //     });
  // };

  return (
    <div name="contact" className="flex flex-col items-center justify-center w-full h-screen px-4 overflow-hidden font-serif text-center text-white">
      <Toaster position="top-right" /> {/* Hot Toast container */}
      
      <h1 className="mb-8 text-3xl font-semibold" data-aos="fade-in" data-aos-id="super-duper">Let's Talk</h1>
      
      {/* Main Container */}
      <div className="flex flex-col items-center justify-between w-full max-w-4xl gap-10 md:flex-row md:items-start md:mb-3 ">
        
        {/* Left Section - Social Links */}
        <div className="flex flex-col items-center justify-start gap-6 text-xl font-medium text-slate-900 md:items-start" data-aos="fade-right">
          <p className='text-[17px] md:text-xl text-gray-200'>
            I'm always excited to explore new opportunities. <br />
            Don't hesitate to get in touch with any inquiries, collaboration ideas, or project proposals!
          </p>

          <div className="flex items-center gap-4 md:mb-4">
            <FaLinkedin size={40} className="text-[#0A66C2] hover:text-white cursor-pointer" />
            <a href="https://www.linkedin.com/in/shifa-tahreem-67607123a/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#38b2ac]">LinkedIn</a>
          </div>
          
          <div className="flex items-center gap-4">
            <FaGithub size={40} className="text-gray-800 cursor-pointer hover:text-white" />
            <a href="https://github.com/stahreem" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#38b2ac]">GitHub</a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <form 
          // netlify
            className="flex flex-col gap-6"
            name="contact" // Form name is important for Netlify to track submissions
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field" // Spam protection field
            // onSubmit={handleSubmit} // Add the handleSubmit function here
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
                // value={formData.name} // Controlled component
                // onChange={handleChange} // Controlled component
                required
              />
            </div>

            <div>
              <input 
                className="w-full p-4 border-2 border-slate-800 bg-slate-800 rounded-lg focus:outline-none focus:border-[#38b2ac] transition" 
                type="email" 
                placeholder="Email" 
                name="email"
                // value={formData.email} // Controlled component
                // onChange={handleChange} // Controlled component
                required                
              />
            </div>

            <div>
              <textarea 
                className="w-full p-4 border-2 border-slate-800 bg-slate-800 rounded-lg focus:outline-none focus:border-[#38b2ac] transition" 
                placeholder="Message..." 
                rows="4"
                name="message"
                // value={formData.message} // Controlled component
                // onChange={handleChange} // Controlled component
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
