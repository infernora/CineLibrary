import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext"
import { useCompareContext } from "../contexts/Compare"


function MovieCard({movie}) {
    const {isFavorite, addToFavorites, removeFromFavorites} = useMovieContext()
    const favorite = isFavorite(movie.id)
    const {addToCompare, isCompared, removeFromCompare} = useCompareContext()

    function onFavoriteClick(e) {
        e.preventDefault()
        if (favorite) removeFromFavorites(movie.id)
        else addToFavorites(movie)
    }

    function onCompareClick(e) {
    e.preventDefault();
    if (isCompared(movie.id)) {
        removeFromCompare(movie.id);
    } else {
        addToCompare({ ...movie, type: 'movie' });
    }
    }




    return <div className="media-card">
        <div className="media-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
            <div className="media-overlay">
                <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                    ♥
                </button>
                <button
                className={`compare-btn ${isCompared(movie.id) ? "active" : ""}`}
                onClick={onCompareClick}
            >
                {isCompared(movie.id) ? "Remove" : "Compare"}
            </button>
            </div>
        </div>
        <div className="media-info">
            
            <h3>{movie.title}</h3>
            <p>{movie.release_date?.split("-")[0]}</p>
        </div>
    </div>
}

export default MovieCard