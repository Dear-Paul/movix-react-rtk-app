import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../auth/authSlice';


 const Home = () => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutUser());
    console.log("worked")
  }
  return (
    <div>Home
      <button onClick={onLogout}></button>
    </div>
  )
}

export default Home;
