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
    description: 'Césped híbrido diseñado para alto rendimiento, ideal para canchas deportivas y jardines premium.',
    details: 'El Tifway 419 es un césped híbrido especialmente desarrollado para canchas deportivas y jardines de alto rendimiento. Ofrece crecimiento denso, resistencia al desgaste, y tolerancia al calor.',
    characteristics: [
      'Césped híbrido desarrollado especialmente para canchas deportivas y jardines de alto rendimiento.',
      'Crecimiento denso y resistente al desgaste.',
      'Excelente tolerancia al calor y moderada resistencia al frío.',
      'Necesita podas frecuentes para mantener su estética.',
    ],
    advantages: [
      'Recuperación rápida ante daños por tránsito.',
      'Color verde oscuro atractivo.',
      'Ideal para campos deportivos, estadios y áreas residenciales premium.',
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
    name: 'Bermuda Elite',
    images: [Bermuda],
    description: 'Césped de alta calidad, ideal para climas cálidos y templados.',
    details: 'La Bermuda Elite ofrece un crecimiento denso y uniforme, siendo ideal para jardines, parques y áreas deportivas. Es resistente al tránsito intenso y tolera bien el calor extremo.',
    characteristics: [
      'Ideal para climas cálidos y templados.',
      'Resistente al tránsito intenso, perfecta para jardines, parques y áreas deportivas.',
      'Crecimiento denso y uniforme.',
      'Requiere mantenimiento regular (riego, corte y fertilización).',
      'Buena tolerancia a la sequía y al calor extremo.',
    ],
    advantages: [
      'Recuperación rápida ante daños.',
      'Textura fina y suave al tacto.',
      'Excelente estética con un color verde vibrante.',
    ],
  },
];

function CespedTypes() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="cesped-types" id="cesped">
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
                    <li key={charIndex}>{char}</li>
                  ))}
                </ul>
                <h4>Ventajas:</h4>
                <ul>
                  {cesped.advantages.map((adv, advIndex) => (
                    <li key={advIndex}>{adv}</li>
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
