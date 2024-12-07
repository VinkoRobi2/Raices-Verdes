import React from 'react';
import './Obras.css';

const obrasData = [
  { id: 1, image: '/placeholder.svg?height=300&width=400', title: 'Parque Central' },
  { id: 2, image: '/placeholder.svg?height=300&width=400', title: 'Residencial Los Pinos' },
  { id: 3, image: '/placeholder.svg?height=300&width=400', title: 'Campo de Golf El Roble' },
  { id: 4, image: '/placeholder.svg?height=300&width=400', title: 'Estadio Municipal' },
];

function Obras() {
  return (
    <section className="obras" id="obras">
      <h2>Nuestras Obras</h2>
      <div className="obras-grid">
        {obrasData.map((obra) => (
          <div key={obra.id} className="obra-card">
            <img src={obra.image} alt={obra.title} />
            <h3>{obra.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Obras;

