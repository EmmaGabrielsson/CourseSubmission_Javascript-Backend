import React from "react";
import "./movies.css";
import noImg from "../assets/no-img.png";
import add from "../assets/watchlist_add.png";

const getImgURL = (poster_path) => {
  return `https://www.themoviedb.org/t/p/w500${poster_path}`;
};

function MovieCard({
  id,
  title,
  release_date,
  poster_path,
  vote_average,
  overview,
}) {
  const movie = {
    id,
    title,
    release_date,
    poster_path,
    vote_average,
    overview,
  };

  const homepage = `https://www.themoviedb.org/movie/${movie.id}${movie.title}`;
  
  
  let viewedMovies = JSON.parse(localStorage.getItem("viewedMovies") || "[]");
  
  function removeMovie() {
    for ( let i = 0; i < viewedMovies.length; i++ ) {      
      if (i > 4) {
        viewedMovies.pop(movie);
        localStorage.setItem("viewedMovies", JSON.stringify(viewedMovies));
      }
    }
  }
/*
  function match() {
    const findIndexOfMatch = viewedMovies.findIndex(el => el === movie.id)
    viewedMovies.splice(findIndexOfMatch, 1)
    viewedMovies.unshift(movie);
    localStorage.setItem("viewedMovies", JSON.stringify(viewedMovies));
    removeMovie();

  }*/

  return (
    <div className="card">
      <img
        className="movie-img"
        src={getImgURL(poster_path === "N/A" ? noImg : poster_path)}
        alt={title}
      ></img>
      <h3 className="title">
        <a
          title="More Info"
          href={homepage}
          onClick={() => {
              viewedMovies.unshift(movie);
              localStorage.setItem("viewedMovies", JSON.stringify(viewedMovies));
              removeMovie();
            }
            }
             >
          {title}
        </a>
      </h3>
      <p>{release_date}</p>
      <p>
        Rated: <span className="rating">★ {vote_average}</span>
      </p>
      <button className="add-btn" title="add movie" type="button">
        add to watchlist
        <img className="add" src={add} alt="add to watchlist" />
      </button>
    </div>
  );
}

export default MovieCard;
