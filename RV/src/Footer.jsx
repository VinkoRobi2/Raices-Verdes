import React from 'react';
import img1 from "./assets/1.png"
import img3 from "./assets/3.png"
import img2 from "./assets/2.png"
import img4 from "./assets/4.png"
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
          <SocialIcon href="https://www.instagram.com/cesped.raicesverdes?igsh=cWlqczJ3MmlqcG9z" src={img2} alt="Instagram" />
          <SocialIcon href="https://www.facebook.com/raicesverdescba?mibextid=LQQJ4d&rdid=s7ipwfUI7slObmKj&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FfzEHW9KNhyre3A8d%2F%3Fmibextid%3DLQQJ4d" src={img1} alt="Facebook" />
          <SocialIcon href="https://www.tiktok.com/@cesped.raicesverdes?_t=8sZRqLJDcv8&_r=1" src={img3} alt="TikTok" />
          <SocialIcon href="https://wa.me/c/5493513446906" src={img4} alt="Whatsapp" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;

