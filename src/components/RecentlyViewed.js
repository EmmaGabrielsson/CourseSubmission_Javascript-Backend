import React, { useEffect, useState } from "react";
import "../CSS/components.css";
import MovieCard from "./MovieCard.jsx";
import ArrowLeft from "../assets/arrow_back.png";
import ArrowRight from "../assets/arrow_forward.png";

function RecentlyViewed() {
  const [viewedMovies, setViewedMovies] = useState([]);

  useEffect(() => {
    setViewedMovies(JSON.parse(localStorage.getItem("viewedMovies")));
  }, []);

  const slider = document.getElementById("viewed");

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

  if (localStorage.length !== 0)
    return (
      <section className="section">
        <div className="slider">
          <h2 className="section-title">Recently Viewed..</h2>
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
          <div className="movie-container" id="viewed">
            {viewedMovies.map(function (movie, index) {
              return <MovieCard key={index} {...movie} />;
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
    );
}

export default RecentlyViewed;
