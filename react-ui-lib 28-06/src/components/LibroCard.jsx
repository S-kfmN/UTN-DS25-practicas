import { Card, CardMedia, CardContent, Typography } from '@mui/material';

export default function LibroCard({ imagen, titulo, autor, descripcion }) {
  return (
    <Card sx={{ maxWidth: 345, margin: '20px auto', boxShadow: 3 }}>
      <CardMedia component="img" image={imagen} alt={`Portada de ${titulo}`} height="160" />
      <CardContent>
        <Typography variant="h6">{titulo}</Typography>
        <Typography variant="subtitle2" color="text.secondary">{autor}</Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>{descripcion}</Typography>
      </CardContent>
    </Card>
  );
}