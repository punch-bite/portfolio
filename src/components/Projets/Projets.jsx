import React, { useState } from 'react';
import './Projets.css';
import { ProjectCard } from './ProjetCard';
import projects from '../../datas/Projets.json';

export const Projects = () => {
  return (
    <section id="projets" className="projects">
      <div className="container p-3">
        <h1 className='mb-5 text-uppercase text-white page-title'>Mes Projets</h1>
        <div className="row">
          {projects.projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};