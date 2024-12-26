import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-form" id="contacto">
      <h1 className='opacity'>s  </h1>
      <h1 className='opacity'>s  </h1>
      <h1 className='opacity'>s  </h1>
      <h1 className='opacity'>s  </h1>
      <h1 className='opacity'>s  </h1>
      <h2>¿Tenés una consulta? Escribinos.</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mensaje"
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;
/*



*/