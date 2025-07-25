import React, { useState, useEffect } from 'react';
import './Hero.css';
import foto1 from '@assets/foto1.webp'; 
import foto2 from '@assets/foto2.webp'; 
import whasap from "../src/assets/whasap.png"
import foto3 from '@assets/foto3.webp';


const heroData = [
  {
    image: foto1, 
    title: 'TRANSFORMA TU ESPACIO',
    subtitle: 'Con el poder de la naturaleza',
  },
  {
    image: foto2, 
    title: 'DESCUBRE LA MAGIA',
    subtitle: 'De un césped de calidad',
  },
  {
    image: foto3, 
    title: 'CREA TU OASIS VERDE',
    subtitle: 'En cualquier lugar',
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 0);

    const interval = setInterval(() => {
      if (!isInitialLoad) {
        setCurrentSlide((prev) => (prev + 1) % heroData.length);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isInitialLoad]);

  // Función para manejar redirección (si la usas)
  const handleReadFullArticle = () => {
    // Tu lógica de navegación aquí
  };

  return (
    <>
      <section className={`hero ${isInitialLoad ? 'initial-load' : ''}`} id="inicio">
        {heroData.map((slide, index) => (
          <div
            key={index}
            loading="lazy"
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.subtitle}</p>
              <a href="#cesped" className="cta-button">Conoce nuestro césped</a>
            </div>
          </div>
        ))}
      </section>
      
      <a 
        href="https://wa.me/c/5493513446906" 
        target="_blank" 
        rel="noopener noreferrer" 
       
      >
        <img className="whatsapp-logo" src={whasap} alt="WhatsApp" />
      </a>
    </>
  );
}
 // <img src={} alt="WhatsApp" />
export default Hero;
