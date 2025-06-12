import { Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/img/fondo.jpg")',
        backgroundSize: 'cover',
        padding: 3,
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Box className="logo" sx={{ display: 'inline-flex', alignItems: 'center' }}>
        <img src="/img/logo.png" alt="Logo de la Librería" width="180" />
        <Typography variant="h4" component="h1" sx={{ marginLeft: 2 }}>
          Librería Eternauta
        </Typography>
      </Box>
    </Box>
  );
}