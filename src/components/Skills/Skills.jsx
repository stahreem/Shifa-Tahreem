import React, { useEffect, useRef } from 'react';
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

const SkillSet = ({ title, skills }) => (
  <div className="flex flex-col w-full mb-16 overflow-hidden">
    <div className="flex w-full overflow-x-auto">
      <div className="flex justify-start flex-none w-full space-x-16 overflow-hidden">
        <p className="mb-4 text-2xl text-left"></p>
        <div className='flex space-x-16 animate-loop-scroll'>
          {skills.map((skill, index) => (
            <img key={index} src={skill.src} alt={skill.alt} className='w-16 h-16 max-w-none' />
          ))}
        </div>
        {/* Duplicate for infinite scrolling */}
        <div className='flex space-x-16 animate-loop-scroll' aria-hidden='true'>
          {skills.map((skill, index) => (
            <img key={index} src={skill.src} alt={skill.alt} className='w-16 h-16 max-w-none' />
          ))}
        </div>
      </div>
    </div>
  </div>
);

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
    <div name="skills" className="flex flex-col items-center justify-center w-full h-auto px-4 py-20 font-serif text-center text-white">
      <h1 className="mt-4 text-4xl mb-14">Skills</h1>
      
      {/* Infinite Slider for Front-end Skills */}
      <SkillSet title="Front-end" skills={frontEndSkills} />

      {/* Infinite Slider for Back-end Skills */}
      <SkillSet title="Back-end" skills={backEndSkills} />

      {/* Infinite Slider for Languages */}
      {/* <SkillSet title="Languages" skills={languageSkills} /> */}
    </div>
  );
}

export default Skills;
