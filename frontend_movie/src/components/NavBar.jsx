import { Link } from 'react-router-dom';
import '../css/NavBar.css';  // Assuming you have a CSS file for styling the NavBar

function NavBar(){
    return (
        <nav className = "navbar">
            <div className="navbar-brand">
                <Link to="/">CineLibrary</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/Movies" className="nav-link">Movies</Link>
                <Link to="/Books" className="nav-link">Books</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>

    )
}

export default NavBar;