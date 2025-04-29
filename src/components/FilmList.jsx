import FilmCard from './FilmCard';

function FilmList({ films, toggleFavorite, favorites }) {
  return (
    <div className="film-list">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          image={film.image}
          title={film.title}
          director={film.director}
          releaseDate={film.release_date}
          isFavorite={favorites.includes(film.id)}
          onToggleFavorite={() => toggleFavorite(film.id)}
        />
      ))}
    </div>
  );
}

export default FilmList;
