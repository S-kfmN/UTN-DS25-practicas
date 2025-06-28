import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import Registro from './pages/Registro';
import SeccionTematica from './pages/SeccionTematica';
import catalogoInicial from './data/catalogo';
import Catalogo from './pages/Catalogo';
import AgregarLibro from './pages/AgregarLibro';

export default function App() {
  const [catalogo, setCatalogo] = useState(catalogoInicial);

  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/tema/:tema" element={<SeccionTematica catalogo={catalogo} />} />
      <Route path="/catalogo" element={<Catalogo catalogo={catalogo} />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/agregar" element={<AgregarLibro catalogo={catalogo} setCatalogo={setCatalogo} />} />
    </Routes>
  );
}