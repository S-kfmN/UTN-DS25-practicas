import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Select,
  MenuItem,
  InputLabel
} from '@mui/material';

export default function Registro() {
  return (
    <>
      <Header />
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Box sx={{ maxWidth: 400, mx: 'auto' }}>
          <Typography variant="h4" gutterBottom>Formulario de Registración</Typography>

          <TextField
            fullWidth
            label="Nombre"
            name="nombre"
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Apellido"
            name="apellido"
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Fecha de Nacimiento"
            name="fecha_nac"
            type="date"
            margin="normal"
            InputLabelProps={{ shrink: true }}
            required
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Contraseña"
            name="clave"
            type="password"
            margin="normal"
            required
          />

          <FormControl margin="normal">
            <FormLabel>Sexo</FormLabel>
            <RadioGroup row name="sexo">
              <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
              <FormControlLabel value="Femenino" control={<Radio />} label="Femenino" />
              <FormControlLabel value="Otro" control={<Radio />} label="Otro" />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel id="tema-label">Tema Favorito</InputLabel>
            <Select
              labelId="tema-label"
              name="tema"
              defaultValue=""
              required
            >
              <MenuItem value="scifi">Ciencia Ficción</MenuItem>
              <MenuItem value="historia">Historia</MenuItem>
              <MenuItem value="tecnologia">Tecnología</MenuItem>
              <MenuItem value="fantasia">Fantasía</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
            Registrarme
          </Button>
        </Box>
      </main>
      <Footer />
    </>
  );
}