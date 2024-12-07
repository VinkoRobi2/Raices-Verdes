import React, { useState, useEffect } from 'react';
import './CespedTypes.css';

const cespedData = [
  {
    name: 'Tifway 419',
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    description: 'Un cesped resistente y de rápido crecimiento, ideal para áreas de alto tráfico.',
    details: 'El Tifway 419 es conocido por su excelente tolerancia al desgaste y su recuperación rápida. Es perfecto para campos deportivos y áreas residenciales de alto uso.',
    characteristics: ['Alta resistencia al tráfico', 'Rápida recuperación', 'Color verde intenso', 'Bajo consumo de agua']
  },
  {
    name: 'Grama Bahiana',
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    description: 'Perfecta para climas cálidos, esta grama es de bajo mantenimiento y alta durabilidad.',
    details: 'La Grama Bahiana es resistente a la sequía y se adapta bien a suelos pobres. Su textura gruesa la hace ideal para prevenir la erosión en pendientes.',
    characteristics: ['Resistente a la sequía', 'Adaptable a suelos pobres', 'Baja necesidad de mantenimiento', 'Excelente para control de erosión']
  },
  {
    name: 'Blend 356',
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    description: 'Una mezcla única que combina belleza y resistencia para un cesped excepcional.',
    details: 'El Blend 356 es una mezcla especial que ofrece lo mejor de varios tipos de cesped. Proporciona un color verde intenso y una textura suave, ideal para jardines ornamentales.',
    characteristics: ['Mezcla de variedades premium', 'Color verde intenso', 'Textura suave', 'Adaptable a diferentes climas']
  },
  {
    name: 'Bermuda Elite',
    images: ['/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400', '/placeholder.svg?height=300&width=400'],
    description: 'Un cesped de alta calidad con un color verde intenso y textura fina.',
    details: 'La Bermuda Elite es conocida por su color verde oscuro y su capacidad para formar un cesped denso. Es resistente al calor y la sequía, perfecta para regiones cálidas.',
    characteristics: ['Color verde oscuro intenso', 'Textura fina', 'Alta densidad', 'Resistente al calor y la sequía']
  }
];

function CespedTypes() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="cesped-types" id="cesped">
      <h2>Nuestro Cesped Premium</h2>
      <div className="cesped-grid">
        {cespedData.map((cesped, index) => (
          <div 
            key={cesped.name} 
            className={`cesped-card ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <div className="image-slider">
              {cesped.images.map((img, imgIndex) => (
                <img 
                  key={imgIndex} 
                  src={img} 
                  alt={`${cesped.name} - Imagen ${imgIndex + 1}`} 
                  className={imgIndex === imageIndex ? 'active' : ''}
                />
              ))}
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
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CespedTypes;
