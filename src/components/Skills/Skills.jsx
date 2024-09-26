import React from 'react';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import bootstrap from '../../assets/bootstrap.png';
import tailwind from '../../assets/tailwind.png';
import react from '../../assets/react.png';
import node from '../../assets/node.png';
import express from '../../assets/express.png';
import mongodb from '../../assets/mongodb.png';
import js from '../../assets/js.png';
import py from '../../assets/py.png';
import git from '../../assets/git.png';
import github from '../../assets/github.png';

// SkillSet component
const SkillSet = ({ title, skills }) => (
  <div className="w-full mx-10 mb-16">
    <h2 className="mb-4 text-2xl text-[#ff4081] font-bold text-left "
    data-aos="fade-in" >{title}</h2>
    <div className="grid grid-cols-3 gap-8 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
      {skills.map((skill, index) => (
        <img
        data-aos="fade-in" 
          key={index}
          src={skill.src}
          alt={skill.alt}
          className={`w-16 h-16 my-4 ${index % 2 === 0 ? 'animate-float-up' : 'animate-float-down'}`} // Alternate between float-up and float-down
        />
      ))}
    </div>
  </div>
);

// Skills component
function Skills() {
  const frontEndSkills = [
    { src: html, alt: 'HTML' },
    { src: css, alt: 'CSS' },
    { src: bootstrap, alt: 'Bootstrap' },
    { src: tailwind, alt: 'Tailwind' },
    { src: react, alt: 'React' },
  ];

  const backEndSkills = [
    { src: node, alt: 'Node.js' },
    { src: express, alt: 'Express' },
    { src: mongodb, alt: 'MongoDB' },
    { src: js, alt: 'JavaScript' },
    { src: py, alt: 'Python' },
    { src: git, alt: 'Git' },
    { src: github, alt: 'Github' },
  ];

  return (
    <div name="skills" className="flex flex-col items-center justify-center w-full h-auto px-4 py-10 font-serif text-center text-white">
      <h1 className="mt-10 mb-10 text-3xl font-semibold" data-aos="fade-in" data-aos-id="super-duper">Skillset</h1>
      
      {/* Front-end Skills */}
      <SkillSet title="Front-end" skills={frontEndSkills} />

      {/* Back-end Skills */}
      <SkillSet title="Back-end" skills={backEndSkills} />
    </div>
  );
}

export default Skills;
