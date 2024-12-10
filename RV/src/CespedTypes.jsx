import React, { useState } from 'react';
import './CespedTypes.css';
import Tifway from './assets/Tifway.png';
import Bermuda from './assets/Bermuda.png';
import Grama from './assets/Grama.png';
import Blend from './assets/Blend.png';

const cespedData = [
  {
    name: 'Tifway 419',
    images: [Tifway],
    description: 'Un césped deportivo de alto rendimiento que combina durabilidad y estética premium.',
    details: 'El Tifway 419 es la elección ideal para espacios que requieren un césped resistente y elegante. Su textura suave y uniforme lo hace destacar en canchas deportivas, áreas residenciales y jardines de alta gama. Su mantenimiento moderado y su rápida regeneración garantizan un rendimiento confiable incluso en condiciones exigentes.',
    characteristics: [
      'Textura fina y uniforme que mejora la estética del césped.',
      'Excelente resistencia al tráfico constante y desgaste.',
      'Rápida capacidad de regeneración, ideal para zonas de alto uso.',
      'Alta tolerancia al calor y resistencia moderada al frío.',
      'Requiere exposición directa al sol para un óptimo crecimiento.',
    ],
    advantages: [
      'Fácil recuperación tras cortes o daños por uso intenso.',
      'Riego moderado',
      'Aspecto verde intenso durante la mayor parte del año.',
      'Ideal tanto para aplicaciones deportivas como residenciales.',
      'Compatible con climas cálidos y templados.',
      'El más resistente al tránsito.',
    ],
  },
  {
    name: 'Grama Bahiana',
    images: [Grama],
    description: 'Césped de hojas anchas, resistente y adaptable a diferentes condiciones.',
    details: 'La Grama Bahiana es ideal para climas cálidos y húmedos, muy resistente a la semisombra y adaptable a diferentes tipos de suelo. Requiere un riego alto para mantener su vigor.',
    characteristics: [
      'Césped de hojas anchas, ideal para climas cálidos y húmedos.',
      'Muy resistente a la semisombra y adaptable a diferentes tipos de suelo.',
      'Requiere riego alto.',
    ],
    advantages: [
      'Compite con las malezas.',
      'Es rastrera.',
      'Perfecta para jardines residenciales y áreas con sombra parcial.',
    ],
  },
  {
    name: 'Blend 365',
    images: [Blend],
    description: 'Césped diseñado para lucir bien todo el año, ideal para zonas residenciales y comerciales.',
    details: 'El Blend 365 combina variedades premium para mantener un color verde vibrante durante todas las estaciones. Ofrece una alta densidad y tolerancia a climas diversos.',
    characteristics: [
      'Mezcla premium diseñada para lucir bien durante todo el año.',
      'Combinación de variedades que soportan climas cálidos y fríos.',
      'Alta densidad y color verde vibrante en todas las estaciones.',
    ],
    advantages: [
      'Verde todo el año, no requiere resiembra.',
      'Tolerancia al tránsito moderado.',
      'Ideal para zonas residenciales y comerciales que buscan estética constante.',
    ],
  },
  {
    name: 'Bermuda Prestige',
    images: [Bermuda],
    description: 'Césped de alta calidad, ideal para climas cálidos y templados.',
    details: 'La Bermuda Elite ofrece un crecimiento denso y uniforme, siendo ideal para jardines, parques y áreas deportivas. Es resistente al tránsito intenso y tolera bien el calor extremo.',
    characteristics: [
      'Ideal para climas cálidos y templados.',
      'Resistente al tránsito intenso, perfecta para jardines, parques y áreas deportivas.',
      'Crecimiento denso y uniforme.',
      'Requiere mantenimiento regular (riego, corte y fertilización).',
      'Buena tolerancia a la sequía y al calor extremo.',
      'Apta para sol pleno.',
    ],
    advantages: [
      'Recuperación rápida ante daños.',
      'Textura fina y suave al tacto.',
      'Excelente estética con un color verde vibrante.',
      'Crecimiento rastrero que cubre uniformemente y muy resistente al calor.',
    ],
  }
];

function CespedTypes() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="cesped-types" id="cesped">
      <h1 className='opacity'>s  </h1>
      <h1 className='opacity'>s  </h1>
      <h1 className='opacity'>s  </h1>
      <h1 className='opacity'>s  </h1>
      <h1 className='opacity'>s  </h1>
      <h2>Nuestro Césped Premium</h2>
      <div className="cesped-grid">
        {cespedData.map((cesped, index) => (
          <div 
            key={cesped.name} 
            className={`cesped-card ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="image-slider">
              <img 
                loading="lazy"
                src={cesped.images[0]} 
                alt={`${cesped.name} - Imagen 1`} 
              />
            </div>
            <h3>{cesped.name}</h3>
            <p className="cesped-description">{cesped.description}</p>
            {activeIndex === index && (
              <div className="cesped-details">
                <p>{cesped.details}</p>
                <h4>Características:</h4>
                <ul>
                  {cesped.characteristics.map((char, charIndex) => (
                    <li key={charIndex} style={{animationDelay: `${charIndex * 0.1}s`}}>{char}</li>
                  ))}
                </ul>
                <h4>Ventajas:</h4>
                <ul>
                  {cesped.advantages.map((adv, advIndex) => (
                    <li key={advIndex} style={{animationDelay: `${advIndex * 0.1}s`}}>{adv}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CespedTypes;

