import React, { useState, useEffect } from 'react';
import './VisitorCounter.css';

function VisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [mensajeerr, setMensajerr] = useState("");

  useEffect(() => {
    const GetVisitas = async () => {
      try {
        const ft = await fetch("https://raices-verdes.onrender.com");
        if (!ft.ok) {
          throw new Error("Error al obtener las visitas");
        }
        const resp = await ft.json();
        setVisitorCount(resp.visitas);
      } catch (error) {
        setMensajerr("Ha ocurrido un error al obtener las visitas. Inténtelo más tarde.");
        setVisitorCount("503")
      }
    };

    GetVisitas();
  }, []);

  return (
    <div className="visitor-counter">
      {mensajeerr ? (
        <p className="error">{mensajeerr}</p>
      ) : (
        <p>Visitantes de la página: <span className="count">{visitorCount.toLocaleString()}</span></p>
      )}
    </div>
  );
}

export default VisitorCounter;
