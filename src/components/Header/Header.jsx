import React from 'react';
import './Header.css';
import logo from '../../assets/images/noi300.png';

export const Header = () => {
  return (
    <header className="header sticky-top">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between">
        <div className="container-md container-fluid px-md-0 px-2">
          <a className="navbar-brand col-md-4 col-6" href="#">
            <img src={logo} alt="logo" width={150} />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-end text-center ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">A Propos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="skills">Compétences</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="projets">Projets</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};