import React, { useEffect, useRef } from 'react';
import './Obras.css';
import obra1 from "./assets/Obra1.png"
import obra2 from "./assets/obra2.png"
import Obra3 from "./assets/Obra3.png"
import Obra4 from "./assets/Obra4.png"
const obrasData = [
  { id: 1, image: obra1, },
  { id: 2, image: obra2, },
  { id: 3, image: Obra3, },
  { id: 4, image: Obra4, },
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
            <img src={obra.image} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Obras;