import React from 'react';
import PopularMovies from "../components/PopularMovies";
import RecentlyViewed from "../components/RecentlyViewed";


function Home() {
  return (
    <div>
      <PopularMovies/>
      <RecentlyViewed/>
    </div>
  )
}

export default Home;