import React from 'react';
import './Footer.css';
import foto1 from "./assets/1.png"
import foto2 from "./assets/2.png"
import foto4 from "./assets/3.png"
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Raíces Verdes</h3>
          <p>Email: greenroots.cba@gmail.com</p>
          <p>Teléfono: +54 9 3513 44-6906</p>
        </div>
        <div className="footer-social">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
            <img src = {foto2}/>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
            <img src={foto1}/>
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
            <img src={foto4}/>
          </a>
          <a href="https://business.google.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-google"></i>

          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
