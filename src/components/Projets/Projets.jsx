import React from 'react';
import './Projets.css';
import { ProjectCard } from './ProjetCard';
import projects from '../../datas/Projets.json';

export const Projects = () => {

  return (
    <section id="projets" className="projects">
      <div className="container">
        <h2>Mes Projets</h2>
        <div className="projects-grid">
          {projects.projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};