import  {React } from 'react';


function About() {
 

  return (
    <div
      name="about"
      className="flex flex-col items-center justify-center w-full min-h-screen px-4 overflow-x-hidden font-serif text-center text-white bg-dark" // Use min-h-screen for proper layout
    >
      {/* About Me Heading with AOS Animation */}
      <h1
        className="mt-[-50px] mb-4 text-3xl font-semibold"
        data-aos="fade-in" 
        data-aos-id="super-duper" // Fade-in animation
      >
        Get to Know Me
      </h1>

      <div className="flex flex-col px-10 md:mt-5">
        {/* First Paragraph with AOS Fade-Left Animation */}
        <p
          className="text-gray-100 md:mr-40"
          data-aos="fade-left" // Applying fade-left animation
        >
          I’m Shifa Tahreem, a passionate Full-Stack Developer with a strong background in both frontend and backend technologies.
          <br />
          My journey in web development began a few years ago, driven by a deep curiosity about how the web works. Since then, I’ve immersed myself in various projects, from designing intuitive user interfaces to building scalable backend systems.
        </p>

        {/* Second Paragraph with AOS Fade-Right Animation */}
        <p
          className="my-10 text-gray-100 md:mx-40 md:ml-10"
          data-aos="fade-right" // Applying fade-right animation
        >
          Throughout this journey, I’ve specialized in the MERN stack, enabling me to create dynamic and responsive applications.
          <br />
          I’m constantly exploring new technologies and love the challenge of solving complex problems with clean, efficient code.
        </p>

        {/* Third Paragraph with AOS Fade-Left Animation */}
        <p
          className="text-gray-100 md:mx-40 md:mr-10"
          data-aos="fade-left" // Applying fade-left animation
        >
          I’m a firm believer in continuous learning and love collaborating on projects that push the boundaries of innovation.
          <br />
          When I’m not coding, I enjoy contributing to open-source projects and staying updated with the latest industry trends.
        </p>

        {/* CV Download Button with AOS Fade-Right Animation */}
        <div>
          <button
            offset="50"
            data-aos="fade-right" // Applying fade-right animation to the button
            className="p-3 mt-5 border-4 border-[#ff4081] bg-[#ff4081] text-white rounded-md hover:bg-transparent hover:text-[#ff4081] transition duration-300"
          >
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

export default About;
