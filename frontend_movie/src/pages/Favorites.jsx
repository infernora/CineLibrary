import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import { useBookContext } from "../contexts/BookContext";
import MovieCard from "../components/MovieCard";
import BookCard from "../components/BookCard";

function Favorites() {
  const { favorites: movieFavorites } = useMovieContext();
   const { bookFavorites } = useBookContext();

  const hasMovies = movieFavorites.length > 0;
  const hasBooks = bookFavorites.length > 0;

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>

      {!hasMovies && !hasBooks && (
        <div className="favorites-empty">
          <h3>No Favorites Yet</h3>
          <p>Add some movies or books to see them here!</p>
        </div>
      )}

      {hasMovies && (
        <>
          <h3>Favorite Movies</h3>
          <div className="movies-grid">
            {movieFavorites.map((movie) => (
              <MovieCard movie={movie} key={`movie-${movie.id}`} />
            ))}
          </div>
        </>
      )}

      {hasBooks && (
        <>
          <h3>Favorite Books</h3>
          <div className="movies-grid">
            {bookFavorites.map((book) => (
              <BookCard book={book} key={`book-${book.id}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Favorites;
