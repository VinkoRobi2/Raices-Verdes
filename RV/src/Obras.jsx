
import './Obras.css';
import camino3 from './assets/camino3.webp'
import obra1 from "./assets/Obra1.png";
import comercial1 from "./assets/Comercial1.webp"
import come3 from "./assets/come3.jpg"
import publicca5 from "./assets/publica5.jpg"
import casa3 from "./assets/casa3.webp"
import comercial2 from "./assets/comercial2.jpg"
import publica4 from "./assets/publica4.jpg"
import Obra4 from "./assets/Obra4.png";
import camino2 from "./assets/camino2.webp"
import camino1 from "./assets/camino1.webp"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import './Obras.css';

const obrasData = [
  {
    id: 1,
    title: 'OBRAS Residenciales',
    description: 'Para casas, departamentos y proyectos de vivienda en general.',
    images: [
      casa3,
      Obra4,
      obra1 ,
    ]
  },
  {
    id: 2,
    title: 'OBRAS Comerciales',
    description: 'Para locales, centros comerciales o negocios pequeños y medianos.',
    images: [
      comercial1,
      comercial2,
      come3,
    ]
  },
  {
    id: 3,
    title: 'OBRAS Públicas',
    description: 'Transformamos espacios públicos con césped natural: desde parques hasta áreas recreativas.',
    images: [
      camino1,
      camino2,
      camino3,
      publica4,
      publicca5,
    ]
  },


];

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="image-carousel">
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Imagen ${currentIndex + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </AnimatePresence>
      <button className="carousel-button prev" onClick={prevImage} aria-label="Imagen anterior">
        <ChevronLeft size={24} />
      </button>
      <button className="carousel-button next" onClick={nextImage} aria-label="Siguiente imagen">
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

const Obras = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="obras" className="obras-section">
      <motion.h1 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
        className="obras-title"
      >
        OBRAS
      </motion.h1>
      <div className="obras-grid">
        {obrasData.map((obra) => (
          <motion.div
            key={obra.id}
            className={`obra-card ${expandedId === obra.id ? 'expanded' : ''}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0 }}
            whileHover={{ scale: 1.05 }}
          >
            <ImageCarousel images={obra.images} />
            <h3 className="obra-title">{obra.title}</h3>
            <motion.div
              className="obra-description"
              initial={false}
              animate={{ height: expandedId === obra.id ? 'auto' : 0 }}
              transition={{ duration: 0 }}
            >
              <p>{obra.description}</p>
            </motion.div>
            <button 
              className="expand-button" 
              onClick={() => toggleExpand(obra.id)}
              aria-label={expandedId === obra.id ? "Colapsar detalles" : "Expandir detalles"}
            >
              {expandedId === obra.id ? <ChevronUp /> : <ChevronDown />}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Obras;

