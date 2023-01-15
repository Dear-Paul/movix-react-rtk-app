import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authorizedUser, logoutUser } from '../../auth/authSlice';
import './home.scss';
import tv from '../../assets/tv.svg';
import search from '../../assets/search.svg';
import menu from '../../assets/menu.svg';
import tomatoes from '../../assets/tomatoes.svg';
import imbd from '../../assets/imbd.svg';
import play from '../../assets/play.svg';
import smChevronRight from '../../assets/sm-chevron-right.svg';
import MovieList from '../../components/movieList.js/MovieList';
import FeaturedCast from '../../components/featuredCast.js/FeaturedCast';
import { baseUrl, policies, socials } from './homeUtils';
import ExclusiveVideo from '../../components/exclusiveVideo/ExclusiveVideo';
import Spinner from '../../components/spinner/Spinner';
import { useDebounce } from '../../customHooks/useDebounce';
import useAuth from '../../customHooks/useAuth';




// TODO: Fix Login issue
const key = process.env.REACT_APP_MOVIE_API_KEY
const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [fetchTrending, setFetchTrending] = useState(false)
  const [trendingVideos, setTrendingVideos] = useState([]);
  const [fetchingCasts, setFetchingCasts] = useState(false);
  const [casts, setCasts] = useState([]);
  const [fetchExclusiveVideos, setFetchExclusiveVideos] = useState(false);
  const [exclusiveVideos, setExclusiveVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLogout, setShowLogout] = useState(false);
  const userDisplayName = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const currentUser = useAuth();

  const fetchMovies = async () => {
    setIsLoading(true)
    const res =  await fetch(`${baseUrl}/movie/top_rated?api_key=${key}&language=en-US`);
    const movies = await res.json();
      setMovies(movies.results)
      setIsLoading(false);
  };

  const newArrivals = async () => {
    setFetchTrending(true)
    const res = await fetch(`${baseUrl}/trending/movie/week?api_key=${key}&language=en-US`);
    const trending = await res.json();
    setTrendingVideos(trending.results);
    setFetchTrending(false);
  };

  const getExclusiveVideos = async () => {
    setFetchExclusiveVideos(true);
    const res = await fetch(`${baseUrl}/movie/upcoming?api_key=${key}&language=en-US`);
    const contents = await res.json();
    setExclusiveVideos(contents.results);
    setFetchExclusiveVideos(false);

  }

  const featuredCasts = async () => {
    setFetchingCasts(true);
    const res = await fetch(`${baseUrl}/person/popular?api_key=${key}&language=en-US&page=1`);
    const featured = await res.json();
    setCasts(featured.results)
    setFetchingCasts(false);
  };

  const searchMovie = async (query) => {
    setIsLoading(true);
    const res = await fetch(`${baseUrl}/search/movie?api_key=${key}&language=en-US&page=1&query=${query}`);
    const movies = await res.json();
    setMovies(movies.results);
    setIsLoading(false);
  }
  const debouncedValue = useDebounce(searchTerm, 500);
  useEffect(()=>{
    if(debouncedValue){
      searchMovie(debouncedValue);
    }
  }, [debouncedValue])
  useEffect(()=>{
    fetchMovies();
    newArrivals();
    getExclusiveVideos()
    featuredCasts();
  }, []);

  useEffect(()=>{
    if(currentUser){
      dispatch(authorizedUser(currentUser.currentUser.displayName));
    }
  }, [currentUser, dispatch])
  
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
              <input placeholder='What do you want to watch?' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
              <img src={search} alt="search-icon" />
            </div>
            <div className='with-menu'>
                {userDisplayName && <h5>Hi, {userDisplayName} </h5>}  
              <img src={menu} alt="menu" onClick={()=>setShowLogout(true)}/>
              {showLogout ? <div className='logout' onClick={onLogout}>Logout</div>: ''}
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
          {isLoading ? <Spinner/> : 
          <MovieList movies={movies}/> 
          }
          
        </div>

        <div className='movie-section'>
          <div className='title'>
            <h1>New Arrival</h1>
            <div className='see-more'>
              <span>See more</span>
              <img src={smChevronRight} alt="right arrow" />
            </div>
          </div>
          {fetchTrending ? <Spinner/> : 
          <MovieList movies={trendingVideos}/> 
          }
          {/* <MovieList /> */}
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
         
          {fetchExclusiveVideos ? <Spinner/> : exclusiveVideos.map((video, i) => (
              <ExclusiveVideo
                key={i}
                video={video}
            />
            )
          )}
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
            {fetchingCasts ? <Spinner/> : casts.map((cast, i) => (
              <FeaturedCast
                key={i}
                cast={cast}
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

    

  )
}

export default Home;
