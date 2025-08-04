import React from "react";
import { useBookContext } from "../contexts/BookContext";

const BookCard = ({ book }) => {
  const { title, authors, imageLinks } = book.volumeInfo;
  const {
    isBookFavorite,
    addToBookFavorites,
    removeFromBookFavorites,
  } = useBookContext();

  const favorite = isBookFavorite(book.id);

  const handleToggleFavorite = () => {
    if (favorite) {
      removeFromBookFavorites(book.id);
    } else {
      addToBookFavorites(book);
    }
  };

  return (
    <div className="media-card">
      <div className="media-poster">
      <img
        src={imageLinks?.thumbnail || "https://via.placeholder.com/128x193?text=No+Cover"}
        alt={title}
        className="w-full h-60 object-cover"
      />
      <div className="media-overlay">
          <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={handleToggleFavorite}>
                    ♥
                </button>
      </div>
      </div>
      <div className="media-info">
        <h3>{title}</h3>
        <p>
          {authors ? authors.join(", ") : "Unknown Author"}
        </p>

      </div>
    </div>
  );
};

export default BookCard;
