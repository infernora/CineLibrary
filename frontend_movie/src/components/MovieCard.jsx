
function MovieCard({movie}){    //object argument

    function onFavoriteClick(){
        alert("clicked")}

    return(
        <div className = "movie-card">
            <div className = "movie-poster">
                <img src={movie.poster} alt={movie.title} />
                <div className = "movie-overlay">
                    <button className = "favorite-btn" onClick={onFavoriteClick}>Watch Now</button>
                </div>
            </div>
            <div className = "movie-info">
                <h3 className = "">{movie.title}</h3>
                <p className = "">{movie.release_date}</p>
            </div>
        </div>
    )
}

export default MovieCard;