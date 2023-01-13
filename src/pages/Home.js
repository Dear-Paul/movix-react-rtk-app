import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../auth/authSlice';
import Layout from '../components/Layout';


 const Home = () => {
  const [movies, setMovies] = useState([]);
  const displayName = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  
  const onLogout = () => {
    dispatch(logoutUser());
  }
  return (
      <Layout>
      <button onClick={onLogout}></button>
      </Layout>
  )
}

export default Home;
