// src/pages/Tema1.jsx
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LibroCard from '../components/LibroCard';

export default function Tema1() {
  const libros = [
    {
      imagen: '/img/libros/dune.jpg',
      titulo: 'Dune',
      autor: 'Frank Herbert',
      descripcion: 'Un clásico épico sobre política, religión y ecología en un planeta desértico.'
    },
    {
      imagen: '/img/libros/Neuromante.jpg',
      titulo: 'Neuromante',
      autor: 'William Gibson',
      descripcion: 'La obra que definió el género cyberpunk. Inteligencias artificiales y hackers.'
    },
    {
      imagen: '/img/libros/Fundación.jpg',
      titulo: 'Fundación',
      autor: 'Isaac Asimov',
      descripcion: 'Una saga sobre la caída de un imperio galáctico y la ciencia de la psicohistoria.'
    },
    {
      imagen: '/img/libros/infancia.jpg',
      titulo: 'El fin de la infancia',
      autor: 'Arthur C. Clarke',
      descripcion: 'Una civilización alienígena transforma la humanidad para siempre.'
    },
    {
      imagen: '/img/libros/SnowCrash.jpg',
      titulo: 'Snow Crash',
      autor: 'Neal Stephenson',
      descripcion: 'Una sátira futurista sobre realidad virtual y lenguaje antiguo.'
    },
    {
      imagen: '/img/libros/Hyperion.jpg',
      titulo: 'Hyperion',
      autor: 'Dan Simmons',
      descripcion: 'Siete peregrinos viajan hacia un destino desconocido en un universo en guerra.'
    }
  ];

  return (
    <>
      <Header />
      <Navbar />
      <main style={{ padding: '20px' }}>
        <h2>Ciencia Ficción</h2>
        {libros.map((libro, i) => (
          <LibroCard key={i} {...libro} />
        ))}
      </main>
      <Footer />
    </>
  );
}