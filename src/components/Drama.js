import React, { useEffect, useState } from "react";
import {api} from "./API/tmdbURL";
import MovieCard from "./MovieCard.jsx";
import ArrowLeft from "../assets/arrow_back.png";
import ArrowRight from "../assets/arrow_forward.png";
import "../CSS/components.css";

function Drama() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
      const fetchMovies = async () => {
        const { data } = await api.get(`/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10`);
        setMovies(data.results);
      };
      fetchMovies();
    }, []);
  
    const slider = document.getElementById("slider-drama");
    
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
  
    return (
      <>
        <section className="section">
          <div className="slider">
            <h2 className="section-title">Top Drama Movies..</h2>
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
            <div className="movie-container" id="slider-drama">
              {movies.map((movie, index) => {
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
      </>
    );
  }

export default Drama;
