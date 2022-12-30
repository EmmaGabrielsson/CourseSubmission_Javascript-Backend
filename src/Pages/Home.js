import React from 'react';
import PopularMovies from "../components/PopularMovies";
import KidsMovies from '../components/KidsMovies';
import Drama from "../components/Drama";
import RecentlyViewed from "../components/RecentlyViewed";

function Home() {
  return (
    <div>
      <PopularMovies/>
      <KidsMovies/>
      <Drama/>
      <RecentlyViewed/>
    </div>
  )
}

export default Home;