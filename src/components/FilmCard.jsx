function FilmCard({ image, title, director, releaseDate }) {
    return (
      <div className="film-card">
        <img src={image} alt={title} className="film-image" />
        <h2 className="film-title">{title}</h2>
        <p className="film-director">Réalisé par : {director}</p>
        <p className="film-release-date">Année de sortie : {releaseDate}</p>
      </div>
    );
  }
  
  // Exportation par défaut du composant FilmCard
  export default FilmCard;
  