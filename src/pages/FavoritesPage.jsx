import FilmList from '../components/FilmList';

function FavoritesPage({ films, favorites, toggleFavorite }) {
  const favoriteFilms = films.filter((film) => favorites.includes(film.id));

  return (
    <div className="favorites-page">
      <h1>Films Favoris</h1>
      {favoriteFilms.length > 0 ? (
        <FilmList films={favoriteFilms} toggleFavorite={toggleFavorite} favorites={favorites} />
      ) : (
        <p>Aucun film favori pour l'instant.</p>
      )}
    </div>
  );
}

export default FavoritesPage;
