import React, { useEffect, useRef } from 'react';
import './Obras.css';
import obra1 from "./assets/Obra1.png";
import obra2 from "./assets/obra2.png";
import Obra3 from "./assets/Obra3.png";
import Obra4 from "./assets/Obra4.png";

const obrasData = [
  { id: 1, image: obra1 },
  { id: 2, image: obra2 },
  { id: 3, image: Obra3 },
  { id: 4, image: Obra4 },
];

function Obras() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#obras" && sectionRef.current) {
        const headerOffset = 80;
        const elementPosition =
          sectionRef.current.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };
  
    window.addEventListener("hashchange", handleHashChange);
  
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
  


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      },
      { threshold: 0.1 }
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
    <div id='obras'>
      <h1 className='yipiyo'></h1>
      <section className="obras" ref={sectionRef}>
      <h2>Nuestras Obras</h2>
      <div className="obras-grid">
        {obrasData.map((obra, index) => (
          <div
            key={obra.id}
            className="obra-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={obra.image} alt={`Obra ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
    </div>
    
  );
}

export default Obras;
