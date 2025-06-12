export default function TemaDestacado({ tema, titulo, autor, imagen }) {
  return (
    <section className="tema">
      <h2><a href="#">{tema}</a></h2>
      <img src={imagen} alt={`Portada ${tema}`} width="120" />
      <p><b>Título:</b> {titulo}</p>
      <p><b>Autor:</b> {autor}</p>
    </section>
  );
}