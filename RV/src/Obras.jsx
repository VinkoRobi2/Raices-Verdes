
import './Obras.css';
import obra1 from "./assets/Obra1.png";
import obra2 from "./assets/obra2.png";
import Obra4 from "./assets/Obra4.png";
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
      obra1,
      Obra4,
    ]
  },
  {
    id: 2,
    title: 'OBRAS Corporativas',
    description: 'Ideal para oficinas, edificios empresariales o sedes de negocios.',
    images: [
      '/placeholder.svg?height=450&width=600&text=Corporativa+1',
      '/placeholder.svg?height=450&width=600&text=Corporativa+2',
      '/placeholder.svg?height=450&width=600&text=Corporativa+3',
    ]
  },
  {
    id: 3,
    title: 'OBRAS Industriales',
    description: 'Incluye fábricas, plantas de producción o almacenes grandes.',
    images: [
      '/placeholder.svg?height=450&width=600&text=Industriales+1',
      '/placeholder.svg?height=450&width=600&text=Industriales+2',
      '/placeholder.svg?height=450&width=600&text=Industriales+3',
    ]
  },
  {
    id: 4,
    title: 'OBRAS Comerciales',
    description: 'Para locales, centros comerciales o negocios pequeños y medianos.',
    images: [
      '/placeholder.svg?height=450&width=600&text=Comerciales+1',
      '/placeholder.svg?height=450&width=600&text=Comerciales+2',
      '/placeholder.svg?height=450&width=600&text=Comerciales+3',
    ]
  },
  {
    id: 5,
    title: 'OBRAS Públicas',
    description: 'Como escuelas, hospitales, parques, caminos, y cualquier infraestructura de uso público.',
    images: [
      '/placeholder.svg?height=450&width=600&text=Publicas+1',
      '/placeholder.svg?height=450&width=600&text=Publicas+2',
      '/placeholder.svg?height=450&width=600&text=Publicas+3',
    ]
  },
  {
    id: 6,
    title: 'Grandes Proyectos',
    description: 'Para proyectos de gran envergadura o alta complejidad, como rascacielos, centros logísticos o desarrollos masivos.',
    images: [
      '/placeholder.svg?height=450&width=600&text=Grandes+1',
      '/placeholder.svg?height=450&width=600&text=Grandes+2',
      '/placeholder.svg?height=450&width=600&text=Grandes+3',
    ]
  },
  {
    id: 7,
    title: 'Remodelaciones y Restauraciones',
    description: 'Proyectos que impliquen transformar o modernizar espacios existentes.',
    images: [
      '/placeholder.svg?height=450&width=600&text=Remodelaciones+1',
      '/placeholder.svg?height=450&width=600&text=Remodelaciones+2',
      '/placeholder.svg?height=450&width=600&text=Remodelaciones+3',
    ]
  },
  {
    id: 8,
    title: 'OBRAS Sustentables',
    description: 'Proyectos con enfoque en energías renovables, eficiencia energética o diseño sostenible.',
    images: [
      '/placeholder.svg?height=450&width=600&text=Sustentables+1',
      '/placeholder.svg?height=450&width=600&text=Sustentables+2',
      '/placeholder.svg?height=450&width=600&text=Sustentables+3',
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

