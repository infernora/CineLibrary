const GOOGLE_BOOKS_BASE_URL = "https://www.googleapis.com/books/v1/volumes";

// Search for books
export const searchBooks = async (query) => {
    try {
        const response = await fetch(
            `${GOOGLE_BOOKS_BASE_URL}?q=${encodeURIComponent(query)}`
        );
        const data = await response.json();
        return data.items || [];
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
};

// Optionally: Get more details about a book by ID
export const getBookDetails = async (bookId) => {
    try {
        const response = await fetch(`${GOOGLE_BOOKS_BASE_URL}/${bookId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching book details:", error);
        return null;
    }
};
