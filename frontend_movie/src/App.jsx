import './css/App.css';
import Home from "./pages/Home.jsx";
import Movies from "./pages/Movies.jsx";
import Books from "./pages/Books.jsx";
import Favorites from "./pages/Favorites.jsx";
import Compare from "./pages/Compare.jsx";
import NavBar from "./components/NavBar.jsx";
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext.jsx'; 
import { BookProvider } from './contexts/BookContext.jsx';
import { CompareProvider } from './contexts/Compare.jsx'; 

function App() {
  return (
    <CompareProvider>
    <MovieProvider>
      <BookProvider>
      <NavBar />
    
      <main className = "main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/books" element={<Books />} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/compare" element={<Compare />} />

        </Routes>
      </main>
      </BookProvider>
    </MovieProvider>
    </CompareProvider>
  )
}

export default App
