import React from 'react';
import img1 from "./assets/1.png"
import img3 from "./assets/3.png"
import img2 from "./assets/2.png"
import './Footer.css';

const SocialIcon = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="social-icon">
    <img src={src} alt={alt} className="icon-image" />
  </a>
);

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
          <SocialIcon href="https://instagram.com" src={img2} alt="Instagram" />
          <SocialIcon href="https://facebook.com" src={img1} alt="Facebook" />
          <SocialIcon href="https://tiktok.com" src={img3} alt="TikTok" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

