import React from 'react';

// Vector images for technologies
import html from '../images/technologies/html.svg';
import css from '../images/technologies/css.svg';
import js from '../images/technologies/js.svg';
import nodejs from '../images/technologies/nodejs.svg';
import angular from '../images/technologies/angular.svg';
import react from '../images/technologies/react.svg';
import abap from '../images/technologies/abap.svg';
import jenkins from '../images/technologies/jenkins.svg';
import python from '../images/technologies/python.svg';
import shell from '../images/technologies/shell.svg';

export default function Technologies() {
  const technologies = [
    {
      name: 'html',
      label: 'HTML',
      image: html,
    },
    {
      name: 'css',
      label: 'CSS',
      image: css,
    },
    {
      name: 'js',
      label: 'JavaScript',
      image: js,
    },
    {
      name: 'nodejs',
      label: 'NodeJS',
      image: nodejs,
    },
    {
      name: 'angular',
      label: 'Angular',
      image: angular,
    },
    {
      name: 'react',
      label: 'React',
      image: react,
    },
    {
      name: 'abap',
      label: 'ABAP',
      image: abap,
    },
    {
      name: 'jenkins',
      label: 'Jenkins',
      image: jenkins,
    },
    {
      name: 'python',
      label: 'Python',
      image: python,
    },
    {
      name: 'shell',
      label: 'Shell Scripting',
      image: shell,
    },
  ];

  return (
    <div className="section-container">
      <div className="section-header">Technologies</div>
      <div className="section-body">
        {technologies.map(e => {
          return (
            <div key={e.name} className="tech-item">
              <img src={e.image} />
              <span>{e.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
