// src/pages/Tema2.jsx
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LibroCard from '../components/LibroCard';
import { Typography } from '@mui/material';

export default function Tema2() {
  const libros = [
    {
      imagen: '/img/libros/Sapiens.jpg',
      titulo: 'Sapiens',
      autor: 'Yuval Noah Harari',
      descripcion: 'Un recorrido claro y profundo por la historia de la humanidad.',
    },
    {
      imagen: '/img/libros/guns.jpg',
      titulo: 'Guns, Germs, and Steel',
      autor: 'Jared Diamond',
      descripcion: 'Explica cómo la geografía y biología influyeron en el desarrollo de civilizaciones.',
    },
    {
      imagen: '/img/libros/segunda.jpg',
      titulo: 'La Segunda Guerra Mundial',
      autor: 'Antony Beevor',
      descripcion: 'Una obra completa y objetiva sobre el conflicto más destructivo del siglo XX.',
    },
    {
      imagen: '/img/libros/emperador.jpg',
      titulo: 'El imperio romano',
      autor: 'Mary Beard',
      descripcion: 'Una mirada moderna al auge y caída de Roma.',
    },
    {
      imagen: '/img/libros/latin.jpg',
      titulo: 'Historia de América Latina',
      autor: 'Tulio Halperin Donghi',
      descripcion: 'Un texto fundamental para comprender el continente latinoamericano.',
    },
    {
      imagen: '/img/libros/mar.jpg',
      titulo: 'Los pueblos del mar',
      autor: 'Eric H. Cline',
      descripcion: 'Los misterios del colapso de la Edad del Bronce.',
    },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>Historia</Typography>
        {libros.map((libro, i) => (
          <LibroCard key={i} {...libro} />
        ))}
      </main>
      <Footer />
    </>
  );
}