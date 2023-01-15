import './movie.scss';
import heartIcon from '../../assets/heart-icon.svg';
import tomatoes from '../../assets/tomatoes.svg';
import imbd from '../../assets/imbd.svg';
const Movie = (movie) => {
    return (
        <div className="movie-card">
            <div className='image'>
                <img src={`http://image.tmdb.org/t/p/w500/${movie.movie.poster_path}`} alt='poster' />
                <div className='rating'>
                    <div className='tv-series'>
                        <span>TV SERIES</span>
                    </div>
                    <div className='heart-circle'>
                        <img src={heartIcon} alt="he" />
                    </div>

                </div>
            </div>

            <h4>Released: {movie.movie.release_date}</h4>
            <h3>{movie.movie.title}</h3>
            <div className='movie-rating'>
              <div className='item'>
                <img src={imbd} alt="imbd" />
                <span>86.0 / 100</span>
              </div>

              <div className='item'>
                <img src={tomatoes} alt="imbd" />
                <span>97%</span>
              </div>

            </div>
            <h4>ACTION, HORROR</h4>
        </div>
    )
}

export default Movie;