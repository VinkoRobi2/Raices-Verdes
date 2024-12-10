import React from 'react';
import './QueCespedElejir.css';

function QueCespedElegir() {
  return (
    <section className="que-cesped-elegir" id="que-cesped-elegir">
      <h2>¿Qué Césped Elegir?</h2>
      <div className="cesped-guide">
        <div className="guide-item">
          <h3>Considera el Clima</h3>
          <p>Elige un césped que se adapte bien a las condiciones climáticas de tu localidad.</p>
        </div>
        <div className="guide-item">
          <h3>Evalúa el Uso</h3>
          <p>Piensa en cómo se utilizará el área: ¿alto tránsito, área decorativa, área de esparcimiento o zona de juegos?</p>
        </div>
        <div className="guide-item">
          <h3>Mantenimiento</h3>
          <p>Considera el tiempo y recursos que puedes dedicar al mantenimiento del césped.</p>
        </div>
        <div className="guide-item">
          <h3>Estética</h3>
          <p>Elige un césped que complemente el diseño general de tu espacio exterior.</p>
        </div>
      </div>
      <p 
        className="guide-cta" 
        onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
      >
        ¿Necesitas ayuda para elegir? ¡Contáctanos y te asesoraremos!
      </p>
    </section>
  );
}

export default QueCespedElegir;

