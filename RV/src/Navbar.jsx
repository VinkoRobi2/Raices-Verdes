import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';
import logo from "./assets/logo.png"

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img className='logo' src={logo} alt="EnRaíces Verdes Logo" />
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="navbar-menu" ref={menuRef}>
          <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
          <li><a href="#quienes-somos" onClick={closeMenu}>Nosotros</a></li>
          <li><a href="#cesped" onClick={closeMenu}>Césped</a></li>
          <li><a href="#obras" onClick={closeMenu}>Obras</a></li>
          <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
