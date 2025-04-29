import { useState } from 'react';
import FilmList from '../components/FilmList';

function HomePage({ films, toggleFavorite, favorites }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState('title');

  const filteredFilms = films.filter(
    (film) =>
      film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      film.director.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedFilms = [...filteredFilms].sort((a, b) => {
    if (sortKey === 'title') {
      return a.title.localeCompare(b.title);
    }
    if (sortKey === 'release_date') {
      return a.release_date.localeCompare(b.release_date);
    }
    return 0;
  });

  return (
    <div className="home-page">
      <h1>Liste des Films</h1>

      <input
        type="text"
        placeholder="Rechercher par titre ou réalisateur"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />

      <div className="sort-buttons">
        <button onClick={() => setSortKey('title')}>Trier par titre</button>
        <button onClick={() => setSortKey('release_date')}>Trier par date de sortie</button>
      </div>

      <FilmList films={sortedFilms} toggleFavorite={toggleFavorite} favorites={favorites} />
    </div>
  );
}

export default HomePage;
