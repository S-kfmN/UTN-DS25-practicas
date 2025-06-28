import { useParams } from 'react-router-dom';
import { Typography } from '@mui/material';
import Layout from '../components/Layout';
import LibroCard from '../components/LibroCard';

export default function SeccionTematica({ catalogo }) {
  const { tema } = useParams();

  const nombres = {
    'ciencia-ficcion': 'Ciencia Ficción',
    'historia': 'Historia',
    'tecnologia': 'Tecnología',
    'fantasia': 'Fantasía',
  };

  const librosFiltrados = catalogo.filter(libro => libro.tema === tema);

  return (
    <Layout>
      <h2>{nombres[tema] || 'Tema'}</h2>
      {librosFiltrados.map((libro, index) => (
        <LibroCard key={index} {...libro} />
      ))}
    </Layout>
  );
}