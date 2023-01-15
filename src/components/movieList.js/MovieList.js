import Movie from '../movie/Movie';
import './movieList.scss';
const MovieList = ({movies}) => {
    return (
        <div className="movie-list">
           {movies?.map((movie) => (
             <Movie movie={movie}/>
           ))}
           
        </div>
    )
}

export default MovieList;