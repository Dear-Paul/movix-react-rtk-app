import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../auth/authSlice';
import { casts } from '../../components/featuredCast.js/featuredCastUtils';
import './home.scss';
import tv from '../../assets/tv.svg';
import search from '../../assets/search.svg';
import menu from '../../assets/menu.svg';
import tomatoes from '../../assets/tomatoes.svg';
import imbd from '../../assets/imbd.svg';
import play from '../../assets/play.svg';
import smChevronRight from '../../assets/sm-chevron-right.svg';
import Movie from '../../components/movie/Movie';
import MovieList from '../../components/movieList.js/MovieList';
import FeaturedCast from '../../components/featuredCast.js/FeaturedCast';
import { exclusiveVideos, policies, socials } from './homeUtils';
import ExclusiveVideo from '../../components/exclusiveVideo/ExclusiveVideo';


// TODO: Fix Login issue
const Home = () => {
  const [movies, setMovies] = useState([]);
  const displayName = useSelector(state => state.auth.user);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logoutUser());
  }
  return (

    <>
      <div className='home-container'>
        <div className='bg-image'>
          <div className='nav-bar'>
            <div className='with-tv'>
              <img src={tv} alt="tv" />
              <span>Movix</span>
            </div>
            <div className='with-search'>
              <input placeholder='What do you want to watch?' />
              <img src={search} alt="search-icon" />
            </div>
            <div className='with-menu'>
              <h5>Hi, William</h5>
              <img src={menu} alt="menu" />
            </div>
          </div>
          <div className='description-box'>
            <h3>John Wick 3: Parabellum</h3>
            <div className='rating'>
              <div className='item'>
                <img src={imbd} alt="imbd" />
                <span>86.0 / 100</span>
              </div>

              <div className='item'>
                <img src={tomatoes} alt="imbd" />
                <span>97%</span>
              </div>

            </div>
            <div className='description'>
              <h4>John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</h4>
            </div>
            <div className='watch-trailer'>
              <img src={play} alt="play" />
              <span>Watch Trailer</span>
            </div>
          </div>
        </div>

        <div className='movie-section'>
          <div className='title'>
            <h1>Featured Movie</h1>
            <div className='see-more'>
              <span>See more</span>
              <img src={smChevronRight} alt="right arrow" />
            </div>
          </div>
          <MovieList />
        </div>

        <div className='movie-section'>
          <div className='title'>
            <h1>New Arrival</h1>
            <div className='see-more'>
              <span>See more</span>
              <img src={smChevronRight} alt="right arrow" />
            </div>
          </div>
          <MovieList />
        </div>

        <div className='movie-section'>
          <div className='title'>
            <h1>Exclusive Videos</h1>
            <div className='see-more'>
              <span>See more</span>
              <img src={smChevronRight} alt="right arrow" />
            </div>
          </div>
        <div className='exclusive-videos'>
          {exclusiveVideos.map(({title, image},i) => (
             <ExclusiveVideo
             key={i}
             title={title}
             image={image}
             />
          ))}
         
        </div>
        </div>

        <div className='movie-section'>
          <div className='title'>
            <h1>Featured Casts</h1>
            <div className='see-more'>
              <span>See more</span>
              <img src={smChevronRight} alt="right arrow" />
            </div>
          </div>
          <div className='featured-casts'>
            {casts.length > 0 && casts.map(({ title, image }, i) => (
              <FeaturedCast
                key={i}
                title={title}
                image={image}
            />
            )
          )}
          </div>
        </div>
        <div className='footer-section'>
          <div className='socials'>
            {socials.map(({ image, link }, index) => (
              <a href={link}>
                <img src={image} alt='socials' />
              </a>
            ))}
          </div>
          <div className='policies'>
            {policies.map(({ link, policy }) => (
              <a href={link}>{policy}</a>
            ))}
          </div>

          <div className='copyright'>
            <span>c</span>
            <h4>2021 Movix</h4>
          </div>
        </div>
      </div>
    </>

    // {/* <button onClick={onLogout}>Logout</button> */}

  )
}

export default Home;
