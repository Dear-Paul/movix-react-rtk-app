import Movie from '../movie/Movie';
import './movieList.scss';
const MovieList = () => {
    return (
        <div className="movie-list">
            <Movie/>
            <Movie/>
            <Movie/>
            <Movie/>
        </div>
    )
}

export default MovieList;