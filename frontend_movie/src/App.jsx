import './css/App.css';
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Books from "./pages/Books.jsx";
import Favorites from "./pages/Favorites.jsx";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext.jsx'; 
import { BookProvider } from './contexts/BookContext.jsx';

function App() {
  return (
    <MovieProvider>
      <BookProvider>
      <NavBar />
    
      <main className = "main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/books" element={<Books />} />
          <Route path="/favorites" element={<Favorites/>} />
        </Routes>
      </main>
      </BookProvider>
    </MovieProvider>
  )
}

export default App
