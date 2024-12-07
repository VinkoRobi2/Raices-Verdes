import React, { useState, useEffect } from 'react';
import './VisitorCounter.css';

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);

  useEffect(() => {
    // Simular una llamada a la API para obtener el recuento de visitantes
    const fetchVisitorCount = () => {
      // Aquí normalmente harías una llamada a tu backend
      const simulatedCount = Math.floor(Math.random() * 10000) + 1000;
      setVisitorCount(simulatedCount);
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="visitor-counter">
      <p>Visitantes de la página: <span className="count">{visitorCount.toLocaleString()}</span></p>
    </div>
  );
}

export default VisitorCounter;

