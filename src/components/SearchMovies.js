import React from "react";
import MovieCard from "./MovieCard";
import "../CSS/components.css";

function SearchMovies({ movies, search }) {

  if (movies.length !== 0) {
    return (
      <section className="section" id="search-section">
        <h2 className="section-title-search">Your Search: "{search}"</h2>
        <div id="search-container">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} {...movie} />;
          })}
        </div>
      </section>
    );
  } else {
      return (
        <section className="section" id="not-found">
          <h2>No movies matched your search.</h2>
          <p className="not-found">Check if your spelling is correct or try other search words..</p>
        </section>
      );
  }
}

export default SearchMovies;
