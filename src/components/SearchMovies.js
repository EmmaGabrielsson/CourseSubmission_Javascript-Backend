import React from "react";
import MovieCard from "./MovieCard";
import "../CSS/components.css";

function SearchMovies({ movies, search }) {

  if (movies.length !== 0) {
    return (
      <section className="section" id="search-section">
        <h2 className="section-title-search">Your Search: "{search}"</h2>
        <div className="" id="search-container">
            {movies.map((movie) => {
              return <MovieCard key={movie.id} {...movie} />;
            })}
        </div>
      </section>
    );
  } else {
    return (
      <section className="section" id="not-found">
        <p className="not-found">No movies match your search. Try again..</p>
      </section>
    );
  }
}

export default SearchMovies;
