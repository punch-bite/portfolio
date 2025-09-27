import React from 'react';
import './Projets.css';
import { ProjectModal } from './ProjectModal';

export const ProjectCard = ({ project }) => {

  return (
    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12 p-1">
      <div className="card bounce-animation fade-in-up">
        <div className="card-body">
          <img src={project.image !== "" ? project.image : `/assets/images/projects/noi_frameware.png`}
            alt={project.title}
            loading='lazy'
            onError={(e) => (
              e.target.src = `/assets/images/projects/noi_frameware.png`
            )} />
          <span className={`position-absolute top-0 end-0 mt-4 py-2 translate-middle badge bg-${project.status !== 'Terminé' ? 'warning-subtle text-warning-emphasis' : 'success-subtle text-success-emphasis'}`}>{project.status}</span>
        </div>
        <div className="card-footer">
          <h5 className='fw-bolder'>{project.title}</h5>
          <p>{project.description.substring(0, 50)}...</p>
          <div className="technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="badge bg-warning-subtle bg-gradient text-warning-emphasis fw-bold p-2 me-3 mb-2">{tech}</span>
            ))}
          </div>
          <div className="d-flex justify-content-between align-items-center py-3">
            <a className='nav-link p-2 text-white-50' href={project.githubLink} target="_blank" rel="noopener noreferrer">
              Code Source
            </a>
            <a className='nav-link bg-dark text-white bg-gradient rounded p-2' href={`/projets/${project.id}`} rel="noopener noreferrer">
              Voir le projet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};