import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Tema1 from './pages/Tema1';
import Tema2 from './pages/Tema2';
import Tema3 from './pages/Tema3';
import Tema4 from './pages/Tema4';
import Contacto from './pages/Contacto';
import Registro from './pages/Registro';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/tema1" element={<Tema1 />} />
      <Route path="/tema2" element={<Tema2 />} />
      <Route path="/tema3" element={<Tema3 />} />
      <Route path="/tema4" element={<Tema4 />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  );
}