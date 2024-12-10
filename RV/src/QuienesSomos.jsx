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
    <div id="quienes-somos">
      <h1 className='opacity'>s  </h1>
      <h1 className='opacity'>s  </h1>
      <h1 className='opacity'>s  </h1>
      <h1 className='opacity'>s  </h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
      <h1></h1>
        <section className="quienes-somos" ref={sectionRef}>
      <div className="quienes-somos-content">
        <h2>Quiénes Somos</h2>
        <p>En Raíces Verdes somos apasionados por transformar espacios con césped natural de la más alta calidad. Nos dedicamos a la producción, comercialización y colocación de césped, respaldados por un equipo de profesionales especializados en césped y espacios verdes. Nos comprometemos a ofrecerte la mejor calidad, atención personalizada y un excelente servicio.</p>
        <p>Contamos con diversas variedades de césped que se adaptan a cualquier necesidad: áreas de esparcimiento, campos deportivos y espacios públicos.</p>
        <p>Gracias a nuestra tecnología de punta y personal altamente calificado, garantizamos productos de calidad superior.</p>
      </div>
    </section>
    </div>
  
  );
}

export default QuienesSomos;
