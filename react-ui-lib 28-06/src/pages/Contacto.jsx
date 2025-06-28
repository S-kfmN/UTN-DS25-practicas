import Layout from '../components/Layout';
import { Box, Typography, TextField, Button } from '@mui/material';

export default function Contacto() {
  return (
    <Layout>
      <Typography variant="h4" gutterBottom>Datos de Contacto</Typography>
      <Typography><strong>Dirección:</strong> Av. del Saber 1234, Buenos Aires, Argentina</Typography>
      <Typography><strong>Teléfono:</strong> (011) 4567-8901</Typography>
      <Typography><strong>Email:</strong> contacto@libreriaelsaber.com</Typography>

      <Box component="form" sx={{ mt: 4, maxWidth: 400, mx: 'auto' }}>
        <Typography variant="h5" gutterBottom>Formulario de Contacto</Typography>

        <TextField fullWidth label="Nombre" name="nombre" margin="normal" required />
        <TextField fullWidth label="Email" name="email" type="email" margin="normal" required />
        <TextField fullWidth label="Asunto" name="asunto" margin="normal" required />
        <TextField fullWidth label="Mensaje" name="mensaje" multiline rows={5} margin="normal" required />

        <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
          Enviar mensaje
        </Button>
      </Box>
    </Layout>
  );
}