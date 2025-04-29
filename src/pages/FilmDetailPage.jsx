import { useParams } from 'react-router-dom';

function FilmDetailPage({ films }) {
  const { id } = useParams();
  const film = films.find((film) => film.id === id);

  if (!film) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="film-detail">
      <h1>{film.title}</h1>
      <p><strong>Réalisateur :</strong> {film.director}</p>
      <p><strong>Description :</strong> {film.description}</p>
      <p><strong>Année de sortie :</strong> {film.release_date}</p>
      <img src={film.image} alt={film.title} />
    </div>
  );
}

export default FilmDetailPage;

