import React from 'react';
import './About.css';
import profileImage from '../../assets/images/h.png';

export const About = () => {
    return (
        <section className='about' id='about'>
            <div className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 profilPhoto">
                            <div className="card position-relative fade-out" >
                                <img src={profileImage} alt="profile.png" className='img-fluid' />
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12 p-5 profilPresentation">
                            <h1>My Name</h1>
                            <h4>Graphiste & Développeur Full-Stack </h4>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Voluptatum nam tempora aliquam beatae tempore iste, saepe,
                                cumque sequi perspiciatis tenetur rerum necessitatibus earum,
                                nostrum id nisi itaque molestiae rem similique.
                            </p>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Voluptatum nam tempora aliquam beatae tempore iste, saepe,
                                cumque sequi perspiciatis tenetur rerum necessitatibus earum,
                                nostrum id nisi itaque molestiae rem similique.
                            </p>
                            <div className="py-3 my-3 d-flex justify-content-between">
                                    <a href="https://www.facebook.com" className="nav-link px-3 py-2 rounded-2 bg-dark bi bi-facebook text-white"></a>
                                    <a href="#" className="nav-link px-3 py-2 rounded-2 bg-dark bi bi-instagram"></a>
                                    <a href="#" className="nav-link px-3 py-2 rounded-2 bg-dark bi bi-twitter"></a>
                                    <a href="#" className="nav-link px-3 py-2 rounded-2 bg-dark bi bi-linkedin"></a>
                                    <a href="#" className="nav-link px-3 py-2 rounded-2 bg-dark bi bi-whatsapp"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}