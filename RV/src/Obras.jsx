import React, { useEffect, useRef } from 'react';
import './Obras.css';

const obrasData = [
  { id: 1, image: '/obra1.jpg', title: 'Parque Central' },
  { id: 2, image: '/obra2.jpg', title: 'Residencial Los Pinos' },
  { id: 3, image: '/obra3.jpg', title: 'Campo de Golf El Roble' },
  { id: 4, image: '/obra4.jpg', title: 'Estadio Municipal' },
];

function Obras() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      {
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="obras" id="obras" ref={sectionRef}>
      <h2>Nuestras Obras</h2>
      <div className="obras-grid">
        {obrasData.map((obra, index) => (
          <div key={obra.id} className="obra-card" style={{animationDelay: `${index * 0.1}s`}}>
            <img src={obra.image} alt={obra.title} />
            <h3>{obra.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Obras;