import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TemaDestacado from './components/TemaDestacado';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
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
      </main>
      <Footer />
    </>
  );
}

export default App;