import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api"; // movie API
import { searchBooks } from "../services/bookApi";   // book API you create
import MovieCard from "../components/MovieCard";
import BookCard from "../components/BookCard";
import "../css/Home.css";

function Home() {
  const [topMovies, setTopMovies] = useState([]);
  const [topBooks, setTopBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopItems = async () => {
      try {
        const movies = await getPopularMovies();
        setTopMovies(movies.slice(0, 5));

        const books = await searchBooks("bestseller");
        setTopBooks(books.slice(0, 5));
      } catch (err) {
        console.error(err);
        setError("Failed to load top content.");
      }
    };

    fetchTopItems();
  }, []);

  return (
    <div className="home">
      <h2 className="section-title">Top 5 Popular Movies</h2>
      <div className="movies-grid">
        {topMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <h2 className="section-title">Top 5 Popular Books</h2>
      <div className="movies-grid">
        {topBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {error && <div className="error-message">{error}</div>}
    </div>
  );
}

export default Home;
