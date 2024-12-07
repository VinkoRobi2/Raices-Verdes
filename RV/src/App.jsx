import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import QuienesSomos from './QuienesSomos';
import CespedTypes from './CespedTypes';
import QueCespedElegir from './QueCespedElegir';
import Obras from './Obras';
import ContactForm from './ContactForm';
import Footer from './Footer';
import VisitorCounter from './VisitorCounter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <QuienesSomos />
      <CespedTypes />
      <QueCespedElegir />
      <Obras />
      <ContactForm />
      <VisitorCounter />
      <Footer />
    </div>
  );
}

export default App;

