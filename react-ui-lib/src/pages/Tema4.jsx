// src/pages/Tema4.jsx
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LibroCard from '../components/LibroCard';
import { Typography } from '@mui/material';

export default function Tema4() {
  const libros = [
    {
      imagen: '/img/libros/nombre.jpg',
      titulo: 'El nombre del viento',
      autor: 'Patrick Rothfuss',
      descripcion: 'La historia de Kvothe, un joven con un destino extraordinario.',
    },
    {
      imagen: '/img/libros/anillos.jpg',
      titulo: 'El señor de los anillos',
      autor: 'J.R.R. Tolkien',
      descripcion: 'Una épica aventura por la Tierra Media.',
    },
    {
      imagen: '/img/libros/harry.jpg',
      titulo: 'Harry Potter y la piedra filosofal',
      autor: 'J.K. Rowling',
      descripcion: 'El inicio de la saga del joven mago más famoso del mundo.',
    },
    {
      imagen: '/img/libros/rueda.jpg',
      titulo: 'La rueda del tiempo',
      autor: 'Robert Jordan',
      descripcion: 'Una saga extensa con una profunda construcción de mundo.',
    },
    {
      imagen: '/img/libros/camino.jpg',
      titulo: 'El archivo de las tormentas',
      autor: 'Brandon Sanderson',
      descripcion: 'Una de las obras más importantes de la fantasía moderna.',
    },
    {
      imagen: '/img/libros/terra.jpg',
      titulo: 'Terramar',
      autor: 'Ursula K. Le Guin',
      descripcion: 'Magia, sabiduría y aventuras en un mundo de islas.',
    },
  ];

  return (
    <>
      <Header />
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>Fantasía</Typography>
        {libros.map((libro, i) => (
          <LibroCard key={i} {...libro} />
        ))}
      </main>
      <Footer />
    </>
  );
}