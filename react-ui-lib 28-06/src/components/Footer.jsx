import { Box, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'center',
        padding: 2,
        marginTop: 4,
      }}
    >
      <Typography variant="body2">&copy; 2025 Librería El Saber. Todos los derechos reservados.</Typography>
      <Typography variant="body2">Síguenos en Instagram | Facebook | Twitter</Typography>
      <Typography variant="body2">
        <Link href="#" underline="hover" color="inherit">
          Términos y condiciones
        </Link>
      </Typography>
    </Box>
  );
}