import MovieCard from '../components/MovieCard';
import { useState } from 'react';
import '../css/Home.css';  // Assuming you have a CSS file for styling the Home page

function Home(){  

    const [searchQuery, setSearchQuery] = useState("");
    const movies = [
        {id: 1, title: "Prometheus", release_date: "2010-07-16", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Prometheusposterfixed.jpg/250px-Prometheusposterfixed.jpg"},
        {id: 2, title: "Inception", release_date: "2010-07-16", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7f/Inception_ver3.jpg/250px-Inception_ver3.jpg"},
        {id: 3, title: "Interstellar", release_date: "2014-11-07", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/Interstellar_film_poster.jpg/250px-Interstellar_film_poster.jpg"},
        {id: 4, title: "The Dark Knight", release_date: "2008-07-18", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/81/Dark_Knight.jpg/250px-Dark_Knight.jpg"},
    ]

    const handleSearch = (e) => {
        e.preventDefault();  //to prevent page reload
        // alert(`Searching for: ${searchQuery}`);
    }

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." 
                className = "search-input" 
                value={searchQuery}
                onChange={(e) => (setSearchQuery(e.target.value))} />
                <button type="submit" className="search-button">Search</button>
            </form>
            
            <div className="movies-grid">
            {movies.map((movie) => (
                movie.title.toLowerCase().startsWith (searchQuery.toLowerCase()) &&
                <MovieCard key={movie.id} movie={movie} />
            ))}
            </div>
        </div>
    )


}

export default Home;