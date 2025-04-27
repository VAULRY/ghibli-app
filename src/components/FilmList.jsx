import FilmCard from './FilmCard';

function FilmList({ films }) {
  return (
    <div className="film-list">
      {films.map((film) => (
        <FilmCard
          key={film.id} 
          image={film.image}
          title={film.title}
          director={film.director}
          releaseDate={film.release_date}
        />
      ))}
    </div>
  );
}

export default FilmList;
