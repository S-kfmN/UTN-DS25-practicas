import Layout from '../components/Layout';
import TemaDestacado from '../components/TemaDestacado';

export default function Inicio() {
  return (
    <Layout>
      <TemaDestacado
        tema="Ciencia Ficción"
        titulo="Dune"
        autor="Frank Herbert"
        imagen="/img/libros/dune.jpg"
      />
      <TemaDestacado
        tema="Historia"
        titulo="Sapiens"
        autor="Yuval Noah Harari"
        imagen="/img/libros/Sapiens.jpg"
      />
      <TemaDestacado
        tema="Tecnología"
        titulo="Clean Code"
        autor="Robert C. Martin"
        imagen="/img/libros/clean.jpg"
      />
      <TemaDestacado
        tema="Fantasía"
        titulo="El nombre del viento"
        autor="Patrick Rothfuss"
        imagen="/img/libros/nombre.jpg"
      />
    </Layout>
  );
}