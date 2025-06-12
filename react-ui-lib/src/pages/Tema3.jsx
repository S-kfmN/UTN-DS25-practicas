// src/pages/Tema3.jsx
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LibroCard from '../components/LibroCard';
import { Typography } from '@mui/material';

export default function Tema3() {
  const libros = [
    {
      imagen: '/img/libros/clean.jpg',
      titulo: 'Clean Code',
      autor: 'Robert C. Martin',
      descripcion: 'Buenas prácticas para escribir código claro y mantenible.',
    },
    {
      imagen: '/img/libros/code.jpg',
      titulo: 'Code',
      autor: 'Charles Petzold',
      descripcion: 'Una explicación desde cero de cómo funciona una computadora.',
    },
    {
      imagen: '/img/libros/cisne.jpg',
      titulo: 'El cisne negro',
      autor: 'Nassim Taleb',
      descripcion: 'Cómo eventos inesperados transforman la tecnología y la sociedad.',
    },
    {
      imagen: '/img/libros/hooked.jpg',
      titulo: 'Hooked',
      autor: 'Nir Eyal',
      descripcion: 'Cómo diseñar productos digitales que enganchen a los usuarios.',
    },
    {
      imagen: '/img/libros/pragmatic.jpg',
      titulo: 'The Pragmatic Programmer',
      autor: 'Hunt & Thomas',
      descripcion: 'Consejos útiles para crecer como desarrollador.',
    },
    {
      imagen: '/img/libros/life.jpg',
      titulo: 'Life 3.0',
      autor: 'Max Tegmark',
      descripcion: 'Explora el futuro de la inteligencia artificial.',
    },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>Tecnología</Typography>
        {libros.map((libro, i) => (
          <LibroCard key={i} {...libro} />
        ))}
      </main>
      <Footer />
    </>
  );
}