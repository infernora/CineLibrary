import { useState, useEffect } from "react";
import { searchBooks } from "../services/bookApi";
import BookCard from "../components/BookCard";

function Books() {
  const [searchQuery, setSearchQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Load default books on first render
  useEffect(() => {
    const loadInitialBooks = async () => {
      setLoading(true);
      try {
        const results = await searchBooks("bestsellers");
        setBooks(results);
      } catch (err) {
        console.error(err);
        setError("Failed to load books.");
      } finally {
        setLoading(false);
      }
    };

    loadInitialBooks();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;

    setLoading(true);
    try {
      const results = await searchBooks(searchQuery);
      setBooks(results);
      setError(null);
    } catch (err) {
      console.error(err);
      setError("Failed to search books.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for books..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Books;
