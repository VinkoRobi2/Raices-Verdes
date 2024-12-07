import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './assets/logo.png'

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
       <img className='logo' src={logo}/>
        <ul className="navbar-menu">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#cespedes">Céspedes</a></li>
          <li><a href="#obras">Obras</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

