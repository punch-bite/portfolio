import { useEffect, useState } from 'react';
import './Skills.css';
import skillDatas from '../../datas/Skills.json';

export const Skills = () => {
    const [iconsLoaded, iSiconsLoaded] = useState(false);
    const [loadingError, setLoadingError] = useState(false);

    // Dans votre composant, ajoutez ce debug
    useEffect(() => {
        skillDatas.categories.forEach(category => {
            category.skills.forEach(skill => {
                if (skill.icon) {
                    const testUrl = `/assets/icons/${skill.icon}`;
                    console.log(`Test URL: ${testUrl}`);

                    // Test de chargement
                    const img = new Image();
                    // img.onload = () => console.log(`✓ ${skill.icon} accessible`);
                    // img.onerror = () => console.log(`✗ ${skill.icon} NON accessible`);
                    img.src = testUrl;
                }
            });
        });
    }, []);

    const getIconPath = (iconName) => {
        if (!iconName || iconName.trim() === '') {
            // setLoadingError(true);
            return '/assets/icons/noi500x500.png';
        }
        // iSiconsLoaded(true);
        return `/assets/icons/${iconName}`;
    };

    // Gestion des états de chargement
    // if (loadingError) {
    //     return (
    //         <div className="alert alert-warning mt-5">
    //             <h4>Chargement des données par défaut</h4>
    //             <p>Erreur: {loadingError}</p>
    //         </div>
    //     );
    // }

    // if (!skillDatas || !iconsLoaded) {
    //     return (
    //         <div className="d-flex justify-content-center align-items-center" style={{ height: '20px' }}>
    //             <div className="spinner-grow text-primary" role="status">
    //                 <span className="visually-hidden">Chargement des compétences...</span>
    //             </div>
    //         </div>
    //     );
    // }


    return (
        <section id='skills' className='skills'>
            <div className="container">
                <h1 className='my-5 text-uppercase fw-bolder text-white'>Compétences</h1>
                <div className="innerCompetences">
                    {skillDatas.categories.map(category => (
                        <div key={category.id} className="row">
                            <h3 className='col-12 mb-3' >{category.name}</h3>
                            {category.skills.map(skill => (
                                <div key={skill.id} className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-sm-4 col-xs-12 p-md-2 p-1">
                                    <div className="card fade-in-up bounce-animation">
                                        <div className="card-header d-flex justify-content-between align-items-center pb-0">
                                            <div className="title text-nowrap d-flex align-items-center">
                                                <div className="skill-icon">
                                                    <img src={getIconPath(skill.icon)}
                                                        alt={skill.name}
                                                        loading='lazy'
                                                        style={{ width: '30px', height: '30px' }}
                                                        onError={(e) => {
                                                            e.target.src = '/assets/icons/noi500x500.png';
                                                        }} />
                                                </div>
                                                <h5 className='ms-3'>{skill.name}</h5>
                                            </div>
                                            <span className='fw-bolder text-white'>{skill.level}%</span>
                                        </div>
                                        <div className="card-body pt-0">
                                            <small className='text-white'>{skill.description}</small>
                                            <div className="progress mt-2" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ height: '10px' }}>
                                                <div className="progress-bar" style={{ width: skill.level + "%" }}>{skill.level + "%"}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))};
                </div>
            </div>
        </section>
    )
}