import { useState } from 'react';
import Layout from '../components/Layout';
import LibroCard from '../components/LibroCard';
import { TextField, Typography, Box } from '@mui/material';

export default function Catalogo({ catalogo }) {
  const [busqueda, setBusqueda] = useState('');

  const librosFiltrados = catalogo.filter(libro =>
    libro.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    libro.autor.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>Catálogo completo</Typography>
      
      <Box sx={{ maxWidth: 400, mx: 'auto', mb: 4 }}>
        <TextField
          fullWidth
          label="Buscar por título o autor"
          variant="outlined"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </Box>

      {librosFiltrados.length > 0 ? (
        librosFiltrados.map((libro, index) => (
          <LibroCard key={index} {...libro} />
        ))
      ) : (
        <Typography variant="body1">No se encontraron libros con ese criterio.</Typography>
      )}
    </Layout>
  );
}