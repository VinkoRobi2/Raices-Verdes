import React, { useState } from 'react';
import './CespedTypes.css';

const cespedData = [
  {
    name: 'Tifway 419',
    image: '/placeholder.svg?height=300&width=400',
    description: 'Un césped resistente y de rápido crecimiento, ideal para áreas de alto tráfico.',
    details: 'El Tifway 419 es conocido por su excelente tolerancia al desgaste y su recuperación rápida. Es perfecto para campos deportivos y áreas residenciales de alto uso.'
  },
  {
    name: 'Grama Bahiana',
    image: '/placeholder.svg?height=300&width=400',
    description: 'Perfecta para climas cálidos, esta grama es de bajo mantenimiento y alta durabilidad.',
    details: 'La Grama Bahiana es resistente a la sequía y se adapta bien a suelos pobres. Su textura gruesa la hace ideal para prevenir la erosión en pendientes.'
  },
  {
    name: 'Blend 356',
    image: '/placeholder.svg?height=300&width=400',
    description: 'Una mezcla única que combina belleza y resistencia para un césped excepcional.',
    details: 'El Blend 356 es una mezcla especial que ofrece lo mejor de varios tipos de césped. Proporciona un color verde intenso y una textura suave, ideal para jardines ornamentales.'
  },
  {
    name: 'Bermuda Elite',
    image: '/placeholder.svg?height=300&width=400',
    description: 'Un césped de alta calidad con un color verde intenso y textura fina.',
    details: 'La Bermuda Elite es conocida por su color verde oscuro y su capacidad para formar un césped denso. Es resistente al calor y la sequía, perfecta para regiones cálidas.'
  }
];

function CespedTypes() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="cesped-types" id="cespedes">
      <h2>Nuestros Céspedes Premium</h2>
      <div className="cesped-grid">
        {cespedData.map((cesped, index) => (
          <div 
            key={cesped.name} 
            className={`cesped-card ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handleClick(index)}
          >
            <img src={cesped.image} alt={cesped.name} />
            <h3>{cesped.name}</h3>
            <p className="cesped-description">{cesped.description}</p>
            {activeIndex === index && (
              <div className="cesped-details">
                <p>{cesped.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CespedTypes;
