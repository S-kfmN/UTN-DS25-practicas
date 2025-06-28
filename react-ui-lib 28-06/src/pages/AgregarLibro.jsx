import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { Box, TextField, Button, MenuItem, Typography } from '@mui/material';

export default function AgregarLibro({ catalogo, setCatalogo }) {
  const [nuevoLibro, setNuevoLibro] = useState({
    titulo: '',
    autor: '',
    tema: '',
    descripcion: '',
    imagen: '/img/libros/placeholder.jpg',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNuevoLibro({
      ...nuevoLibro,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nuevoLibro.titulo || !nuevoLibro.autor || !nuevoLibro.tema || !nuevoLibro.descripcion) {
      alert('Por favor, completá todos los campos');
      return;
    }

    setCatalogo([...catalogo, nuevoLibro]);
    navigate('/catalogo');
  };

  return (
    <Layout>
      <Typography variant="h4" gutterBottom>Agregar nuevo libro</Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, mx: 'auto' }}>
        <TextField
          fullWidth
          label="Título"
          name="titulo"
          value={nuevoLibro.titulo}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          label="Autor"
          name="autor"
          value={nuevoLibro.autor}
          onChange={handleChange}
          margin="normal"
          required
        />

        <TextField
          fullWidth
          select
          label="Tema"
          name="tema"
          value={nuevoLibro.tema}
          onChange={handleChange}
          margin="normal"
          required
        >
          <MenuItem value="ciencia-ficcion">Ciencia Ficción</MenuItem>
          <MenuItem value="historia">Historia</MenuItem>
          <MenuItem value="tecnologia">Tecnología</MenuItem>
          <MenuItem value="fantasia">Fantasía</MenuItem>
        </TextField>

        <TextField
          fullWidth
          label="Descripción"
          name="descripcion"
          value={nuevoLibro.descripcion}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
          required
        />

        <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
          Agregar libro
        </Button>
      </Box>
    </Layout>
  );
}