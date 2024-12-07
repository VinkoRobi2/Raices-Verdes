import React, { useEffect, useRef } from 'react';
import './QuienesSomos.css';

function QuienesSomos() {
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
    <section className="quienes-somos" id="quienes-somos" ref={sectionRef}>
      <div className="quienes-somos-content">
        <h2>Quiénes Somos</h2>
        <p>En EnRaíces Verdes, somos apasionados por crear espacios verdes hermosos y sostenibles. Con años de experiencia en el cultivo y la instalación de césped de alta calidad, nos enorgullece ofrecer soluciones personalizadas para transformar cualquier espacio exterior.</p>
        <p>Nuestro equipo de expertos está comprometido con la excelencia, la innovación y el cuidado del medio ambiente. Trabajamos incansablemente para proporcionar a nuestros clientes el césped más saludable y resistente, adaptado a sus necesidades específicas y a las condiciones locales.</p>
      </div>
    </section>
  );
}

export default QuienesSomos;

