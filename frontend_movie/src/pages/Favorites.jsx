import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import { useBookContext } from "../contexts/BookContext";
import MovieCard from "../components/MovieCard";
import BookCard from "../components/BookCard";

function Favorites() {
  const { favorites: movieFavorites } = useMovieContext();
  const { bookFavorites, clearFavorites: clearBookFavorites } = useBookContext();

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
          <h3>Favorite Movies ({movieFavorites.length})</h3>
          <div className="movies-grid">
            {movieFavorites.map((movie) => (
              <MovieCard movie={movie} key={`movie-${movie.id}`} />
            ))}
          </div>
        </>
      )}

      {hasBooks && (
        <>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <h3>Favorite Books ({bookFavorites.length})</h3>
            {/* <button
              onClick={() => {
                if (window.confirm("Clear all favorite books?")) {
                  clearBookFavorites();
                }
              }}
              style={{
                padding: "0.3rem 0.6rem",
                fontSize: "0.9rem",
                cursor: "pointer",
                borderRadius: "4px",
                border: "none",
                backgroundColor: "#e50914",
                color: "white",
              }}
              aria-label="Clear all favorite books"
            >
              Clear All
            </button> */}
          </div>
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
