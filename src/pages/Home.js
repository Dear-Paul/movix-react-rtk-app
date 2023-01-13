import React from 'react';
import RequireAuthentication from '../customHooks/requireAuthentication';

 const Home = () => {
  return (
    <div>Home</div>
  )
}

export default RequireAuthentication(Home);
