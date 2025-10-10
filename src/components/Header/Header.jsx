import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Header.css';
import logo from '/assets/images/noi500x500.png';

export const Header = () => {

  const location = useLocation();
    
  return (
    <header className="header sticky-top">
      <nav className="navbar navbar-expand-lg d-flex justify-content-between">
        <div className="container-md container-fluid px-md-0">
          <a className="navbar-brand col-md-4 col-6" href="#">
            <img src={logo} alt="logo" width={40} />
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="bi bi-list text-white-50 fs-5"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav justify-content-end text-center ms-auto">
              <li className={`nav-item me-3 ${location.pathname === '/' ? 'active' : ''}`}>
                <Link className="nav-link" to="/">A Propos</Link>
              </li>
              <li className={`nav-item me-3 ${location.pathname === '/skills' ? 'active' : ''}`}>
                <Link className="nav-link" to="/skills">Compétences</Link>
              </li>
              <li className={`nav-item me-3 ${location.pathname === '/projets' ? 'active' : ''}`}>
                <Link className="nav-link" to="/projets">Projets</Link>
              </li>
              <li className={`nav-item me-3 ${location.pathname === '/contact' ? 'active' : ''}`}>
                <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};