import React, { useState, useEffect } from 'react';
import './Hero.css';

const heroData = [
  {
    image: '/hero1.jpg',
    title: 'TRANSFORMA TU ESPACIO',
    subtitle: 'Con el poder de la naturaleza'
  },
  {
    image: '/hero2.jpg',
    title: 'DESCUBRE LA MAGIA',
    subtitle: 'De un césped perfecto'
  },
  {
    image: '/hero3.jpg',
    title: 'CREA TU OASIS VERDE',
    subtitle: 'En cualquier lugar'
  }
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nextSlide, setNextSlide] = useState(1);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2000); 

    const interval = setInterval(() => {
      if (!isInitialLoad) {
        setNextSlide((prevNext) => (prevNext + 1) % heroData.length);
        setTimeout(() => {
          setCurrentSlide((prevCurrent) => (prevCurrent + 1) % heroData.length);
        }, 500);
      }
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isInitialLoad]);

  return (
    <section className={`hero ${isInitialLoad ? 'initial-load' : ''}`} id="inicio">
      {heroData.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === currentSlide ? 'active' : ''} ${index === nextSlide ? 'next' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="hero-content">
            <h1>{slide.title}</h1>
            <p>{slide.subtitle}</p>
            <a href="#cesped" className="cta-button">Explora nuestro césped</a>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Hero;
