import './movie.scss';
import postImg from '../../assets/poster-image.svg';
import heartIcon from '../../assets/heart-icon.svg';
import tomatoes from '../../assets/tomatoes.svg';
import imbd from '../../assets/imbd.svg';
const Movie = () => {
    return (
        <div className="movie-card">
            <div className='image'>
                <img src={postImg} alt='test' />
                <div className='rating'>
                    <div className='tv-series'>
                        <span>TV SERIES</span>
                    </div>
                    <div className='heart-circle'>
                        <img src={heartIcon} alt="he" />
                    </div>

                </div>
            </div>

            <h4>USA, 2016 - CURRENT</h4>
            <h3>Stranger Things</h3>
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