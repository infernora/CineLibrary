import React from "react";
import { useCompareContext } from "../contexts/Compare";
import "../css/Compare.css";

function MovieCompareCard({ movie, onRemove }) {
  return (
    <div className="compare-card movie-card">
      <img
        className="compare-poster"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p><strong>Release Year:</strong> {movie.release_date?.split("-")[0]}</p>
      <p><strong>Rating:</strong> {movie.vote_average} / 10</p>
      <p className="compare-overview">{movie.overview}</p>
      <button className="remove-btn" onClick={() => onRemove(movie.id)}>
        Remove
      </button>
    </div>
  );
}

function BookCompareCard({ book, onRemove }) {
  const info = book.volumeInfo || {};

  return (
    <div className="compare-card book-card">
      {info.imageLinks?.thumbnail ? (
        <img
          className="compare-poster"
          src={info.imageLinks.thumbnail}
          alt={info.title || "Book Cover"}
        />
      ) : (
        <div className="no-cover">No Cover</div>
      )}
      <h3>{info.title || "No Title"}</h3>
      <p><strong>Author:</strong> {info.authors?.join(", ") || "Unknown"}</p>
      <p><strong>Published:</strong> {info.publishedDate || "Unknown"}</p>
      <p className="compare-overview">{info.description || "No description available."}</p>
      <button className="remove-btn" onClick={() => onRemove(book.id)}>
        Remove
      </button>
    </div>
  );
}


export default function ComparePage() {
  const { compareItems, removeFromCompare, clearCompare } = useCompareContext();

  if (compareItems.length === 0) {
    return <div className="compare-empty">No items to compare. Add some movies or books!</div>;
  }

  return (
    <div className="compare-page">
      <h2>Compare Items</h2>
      <button className="clear-btn" onClick={clearCompare}>Clear All</button>

      <div className="compare-grid">
        {compareItems.map((item) =>
          item.type === "movie" ? (
            <MovieCompareCard key={item.id} movie={item} onRemove={removeFromCompare} />
          ) : (
            <BookCompareCard key={item.id} book={item} onRemove={removeFromCompare} />
          )
        )}
      </div>
    </div>
  );
}
