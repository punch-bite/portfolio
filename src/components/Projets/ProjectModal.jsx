import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import './Projets.css';
import projectsData from '../../datas/Projets.json';


// ProjectModal.jsx
export const ProjectModal = () => {

    const { projetid } = useParams();
    const navigate = useNavigate();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const foundProject = projectsData.projects.find(proj => proj.id === projetid);

        if (foundProject) {
            setProject(foundProject);
        } else {
            navigate('/404');
        }
    }, [projetid, navigate]);

    if (!project) {
        return <div className="loading">Chargement...</div>;
    }

    if (!project) {
        return (
            <div className="container text-center py-5">
                <h2>Projet non trouvé</h2>
                <button onClick={() => navigate(-1)} className="btn btn-primary">
                    Retour
                </button>
            </div>
        );
    }

    return (
        <section id="projectDetail" className="ProjectDetail">
            <div className="container">
                <div className="row justify-content-center my-5">
                    <div className="col-md-10 col-12 p-3">
                        <div className="card bg-dark text-white fade-in-up">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h1>{project.title}</h1>
                                <div className="dateTitle py-3">
                                    <strong className={`px-3 py-2 badge bg-gradient fw-bold bg-${project.status !== 'Terminé' ? 'warning-subtle text-warning-emphasis' : 'success-subtle text-success-emphasis'}`}>{project.status}</strong>
                                    <h6 className="text-white my-1 text-end">{project.year}</h6>
                                </div>
                            </div>
                            <div className="card-body position-relative p-0" style={{ height: '500px' }}>
                                <img className="position-absolute"
                                    src={project.image !== "" ? project.image : `/assets/images/projects/noi_frameware.png`}
                                    alt={project.title} loading="lazy"
                                    // onError={(e) => {
                                    //     e.target.src = '/assets/images/projects/noi_frameware.png';
                                    // }}
                                    style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
                                    <span className="p-3 position-absolute end-0 top-0 translate-middle bg-secondary mt-5 rounded">{`Catégorie : ${project.category}`}</span>
                            </div>
                            <div className="card-footer">
                                <h3 className="mt-5 mb-2">Description</h3>
                                <p className="mb-5">{project.description}</p>

                                <h3>Technologies</h3>
                                <p className="mb-5">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="badge bg-warning-subtle text-warning-emphasis me-3 p-2 my-1">{tech}</span>
                                    ))}
                                </p>

                                <h3>Details</h3>
                                <p className="mb-5">{project.detailedDescription}</p>

                                <div className="row">
                                    {project.galerie.map((img, index) => (
                                        <div key={index} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-4 col-6 mb-2">
                                            <div className="card">
                                                <img src={`/assets/images/projects/${img}`} alt="" />
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="mt-5">Options</h3>
                                <p className="mb-5">
                                    {project.features.map((tech, index) => (
                                        <li key={index} className="badge bg-primary-subtle text-primary-emphasis me-3 p-2 my-1">{tech}</li>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// export default ProjectModal;
