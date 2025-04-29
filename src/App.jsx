import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import FilmDetailPage from './pages/FilmDetailPage';
import FavoritesPage from './pages/FavoritesPage';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  useEffect(() => {
    const getFilms = async () => {
      try {
        const response = await fetch('https://ghibliapi.vercel.app/films');
        if (!response.ok) {
          throw new Error(`Erreur ${response.status}`);
        }
        const data = await response.json();
        setFilms(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des films :', error);
        alert('Impossible de récupérer les films pour le moment. Réessayez plus tard.');
      }
    };
    getFilms();
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (filmId) => {
    if (favorites.includes(filmId)) {
      setFavorites(favorites.filter((id) => id !== filmId));
    } else {
      setFavorites([...favorites, filmId]);
    }
  };

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage films={films} toggleFavorite={toggleFavorite} favorites={favorites} />}
          />
          <Route path="/film/:id" element={<FilmDetailPage films={films} />} />
          <Route
            path="/favorites"
            element={<FavoritesPage films={films} favorites={favorites} toggleFavorite={toggleFavorite} />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
