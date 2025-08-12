// src/context/BookContext.jsx
import { createContext, useState, useContext, useEffect } from "react";

const BookContext = createContext();

export const useBookContext = () => useContext(BookContext);

export const BookProvider = ({ children }) => {
  // Load from localStorage immediately
  const [bookFavorites, setBookFavorites] = useState(() => {
    const stored = localStorage.getItem("bookFavorites");
    return stored ? JSON.parse(stored) : [];
  });

  // Save to localStorage whenever bookFavorites changes
  useEffect(() => {
    localStorage.setItem("bookFavorites", JSON.stringify(bookFavorites));
  }, [bookFavorites]);

  const addToBookFavorites = (book) => {
    setBookFavorites((prev) => [...prev, book]);
  };

  const removeFromBookFavorites = (bookId) => {
    setBookFavorites((prev) => prev.filter((book) => book.id !== bookId));
  };

  const isBookFavorite = (bookId) => {
    return bookFavorites.some((book) => book.id === bookId);
  };

  const value = {
    bookFavorites,
    addToBookFavorites,
    removeFromBookFavorites,
    isBookFavorite,
  };

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
};
