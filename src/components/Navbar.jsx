import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Studio Ghibli Films</h1>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/favorites">Favoris</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
