import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import CespedTypes from './CespedTypes';
import Obras from './Obras';
import ContactForm from './ContactForm';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CespedTypes />
      <Obras />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;

