import { Card, CardMedia, CardContent, Typography } from '@mui/material';

export default function TemaDestacado({ tema, titulo, autor, imagen }) {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px auto', boxShadow: 4 }}>
      <CardMedia
        component="img"
        height="180"
        image={imagen}
        alt={`Portada de ${tema}`}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {tema}
        </Typography>
        <Typography variant="body1"><strong>Título:</strong> {titulo}</Typography>
        <Typography variant="body2"><strong>Autor:</strong> {autor}</Typography>
      </CardContent>
    </Card>
  );
}