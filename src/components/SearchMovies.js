import React from "react";
import MovieCard from "./MovieCard";
import ArrowLeft from "../assets/arrow_back.png";
import ArrowRight from "../assets/arrow_forward.png";
import "./components.css";

function SearchMovies({ movies, search }) {
  
  const slider = document.getElementById("searched-slider");
  
  const sliderLeft = () => {
    let left = slider.scrollLeft;
    let currentWidth = slider.clientWidth;
    slider.scrollTo({ left: (left -= currentWidth), behavior: "smooth" });
  };
  
  const sliderRight = () => {
    let left = slider.scrollLeft;
    let currentWidth = slider.clientWidth;
    slider.scrollTo({ left: (left += currentWidth), behavior: "smooth" });
  };
  
  if (movies.length !==0) {
    return (
      <section className="section" id="search-section">
        <div className="slider" id="search-container">
          <h2 className="section-title">Your Search: "{search}"</h2>
          <button
            className="arrow-left"
            title="previous"
            type="button"
            onClick={sliderLeft}
            >
            <img
              className="arrow"
              src={ArrowLeft}
              alt="move to previous slide"
              />
          </button>
          <div className="movie-container" id="searched-slider">
            {movies.map((movie) => {
              return <MovieCard key={movie.id} {...movie} />;
            })}
          </div>
          <button
            className="arrow-right"
            title="next"
            type="button"
            onClick={sliderRight}
            >
            <img className="arrow" src={ArrowRight} alt="move to next slide" />
          </button>
        </div>
      </section>
    )
  } else {
    return (
      <section className="section" id="not-found"><p className="not-found">No movies match your search. Try again..</p></section>
    )
  }
    
}

export default SearchMovies;
