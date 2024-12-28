import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'your_service_id',   
        'your_template_id', 
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        'your_public_key'    
      );

      alert('¡Mensaje enviado exitosamente!');
      setFormData({ name: '', email: '', message: '' }); 
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      alert('Hubo un problema al enviar tu mensaje. Intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-form" id="contacto">
      <h2>¿Tienes una consulta? Escríbenos.</h2>
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
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar'}
        </button>
      </form>
    </section>
  );
}

export default ContactForm;
