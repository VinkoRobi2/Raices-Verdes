import React from 'react';
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
          <SocialIcon href="https://instagram.com" src="/assets/2.png" alt="Instagram" />
          <SocialIcon href="https://facebook.com" src="/assets/1.png" alt="Facebook" />
          <SocialIcon href="https://tiktok.com" src="/assets/3.png" alt="TikTok" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

