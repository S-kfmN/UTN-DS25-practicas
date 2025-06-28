import { Link } from 'react-router-dom';
import { Box } from '@mui/material';

export default function Navbar() {
  return (
    <Box component="nav" sx={{ backgroundColor: '#333', padding: '10px 0' }}>
      <Box
        component="ul"
        sx={{
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          margin: 0,
          padding: 0,
        }}
      >
        <li><Link to="/" style={linkStyle}>Inicio</Link></li>
        <li><Link to="/tema/ciencia-ficcion" style={linkStyle}>Ciencia Ficción</Link></li>
        <li><Link to="/tema/historia" style={linkStyle}>Historia</Link></li>
        <li><Link to="/tema/tecnologia" style={linkStyle}>Tecnología</Link></li>
        <li><Link to="/tema/fantasia" style={linkStyle}>Fantasía</Link></li>
        <li><Link to="/registro" style={linkStyle}>Registración</Link></li>
        <li><Link to="/contacto" style={linkStyle}>Contacto</Link></li>
        <li><Link to="/catalogo" style={linkStyle}>Catálogo</Link></li>
        <li><Link to="/agregar" style={linkStyle}>Agregar Libro</Link></li>
      </Box>
    </Box>
  );
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  padding: '8px 12px',
  borderRadius: '4px',
  transition: 'background 0.3s',
};