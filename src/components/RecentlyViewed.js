import React, { useEffect, useState } from "react";
import "./movies.css";
import MovieCard from "./MovieCard.jsx";


function RecentlyViewed() {

 const [viewedMovies, setViewedMovies] = useState(false);
    
  useEffect(() => {
    if (localStorage.length > 5) {
      setViewedMovies(localStorage.removeItem(localStorage.length[0]));      
    }
  }, [viewedMovies])

  /*
          {Object.keys(localStorage).map(function (key) {
          let viewedMovies = JSON.parse(localStorage.getItem(key));
          return <MovieCard key={viewedMovies.id} {...viewedMovies} />;
        })}
*/

if (localStorage.length !==0)
  return (
    <section className="section">
      <div className="slider">
      <h2 className="section-title">Recently Viewed..</h2>
      <div className="movie-container" id="viewed">
        
        {
        
        Object.keys(localStorage).map(function (key) {
          let viewedMovies = JSON.parse(localStorage.getItem(key));
          return <MovieCard key={viewedMovies.id} {...viewedMovies} />;
        })}
      </div>
      </div>
      <button
        className="clear-btn"
        title="clear history"
        type="button"
        onClick={() => localStorage.clear()}
        onChange={viewedMovies}
      >
        Clear Recently Viewed
      </button>
    </section>
  );
  /*
      if (localStorage.length > 5) {
        Object.keys(localStorage).forEach(function (key) {
          localStorage.removeItem(key[0]);
        });
  }*/
}

export default RecentlyViewed;
