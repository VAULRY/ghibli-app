function FilmCard({ image, title, director, releaseDate, isFavorite, onToggleFavorite }) {
  return (
    <div className="film-card">
      <img src={image} alt={title} className="film-image" />
      <h2 className="film-title">{title}</h2>
      <p><strong>Réalisateur :</strong> {director}</p>
      <p><strong>Année de sortie :</strong> {releaseDate}</p>
      <button onClick={onToggleFavorite} className="favorite-button">
        {isFavorite ? '⭐' : '☆'} Favoris
      </button>
    </div>
  );
}

export default FilmCard;
