import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../auth/authSlice';
import Layout from '../../components/Layout';
import './home.scss';
import tv from '../../assets/tv.svg';
import search from '../../assets/search.svg';
import menu from '../../assets/menu.svg';


// TODO: Fix Login issue
 const Home = () => {
  const [movies, setMovies] = useState([]);
  const displayName = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  
  const onLogout = () => {
    dispatch(logoutUser());
  }
  return (
      <Layout>
        <div className='home-container'>
          <div className='bg-image'>
            <div className='nav-bar'>
              <div className='with-tv'>
                <img src={tv} alt="tv"/>
                <span>Movix</span>
              </div>
              <div className='with-search'>
               <input placeholder='What do you want to search'/>
                <img src={search} alt="search-icon"/>
              </div>
              <div className='with-menu'>
                  <h5>Hi, William</h5>
                  <img src={menu} alt="menu" />
              </div>
            </div>
          </div>

          <div className='anos'></div>
        </div>
      <button onClick={onLogout}>Logout</button>
      </Layout>
  )
}

export default Home;
