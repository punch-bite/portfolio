import React from 'react';
import './About.css';
import profileImage from '../../assets/images/h.png';
import profile from '../../datas/profile.json';

export const About = () => {
    return (
        <section className='about' id='about'>
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 profilPhoto">
                            <div className="card position-relative fade-in-up" >
                                <img src={profileImage} alt="profile.png" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 p-5 profilPresentation">
                            <h1 className='fade-in-up'>{profile.name}</h1>
                            <h4 className='fade-in-up'>{profile.skill}</h4>
                            <p className='fade-in-up'>
                                {profile.description}
                            </p>
                            <p className='fade-in-up'>
                                À mi-chemin entre l'art et la technique, je maîtrise l'ensemble de la chaîne de création digitale.
                                De la conception visuelle avec les outils Adobe au développement d'applications web complètes (frontend et backend),
                                je donne vie à vos projets avec précision et créativité.
                            </p>
                            <div className="py-3 my-3 d-flex justify-content-between fade-in-up">
                                {profile.reseaux.map((link, index) => (
                                    <a title={link.name} key={index} href={link.link} className={`nav-link px-3 py-2 rounded-2 bg-dark bi bi-${link.icon} bounce-animation`}></a>
                                ))}
                            </div>
                            <a href="/contact" className='btn btn-light btn-contact py-2 px-5 me-auto mt-4'>Contactez-Moi</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}