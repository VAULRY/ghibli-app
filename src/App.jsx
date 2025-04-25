import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import FilmList from './components/FilmList';
import './App.css';

function App() {
  const [films, setFilms] = useState([]);

  
  const getFilms = async () => {
    try {
      const response = await fetch('https://ghibliapi.vercel.app/films');
      const data = await response.json();
      setFilms(data); 
    } catch (error) {
      console.error('Erreur lors de la récupération des films :', error);
    }
  };

  
  useEffect(() => {
    getFilms();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <FilmList films={films} />
      </main>
    </div>
  );
}

export default App;

