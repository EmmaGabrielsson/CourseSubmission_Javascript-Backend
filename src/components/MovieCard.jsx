import React from "react";
import "../CSS/components.css";
import noImg from "../assets/no-img.png";

const getImgURL = (poster_path) => {
  if (poster_path === null) {
    return noImg;
  } else {
    return `https://www.themoviedb.org/t/p/w500${poster_path}`;
  }
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
    for (let i = 0; i < viewedMovies.length; i++) {
      if (i > 4) {
        viewedMovies.pop(movie);
        localStorage.setItem("viewedMovies", JSON.stringify(viewedMovies));
      }
    }
  }
  //let filteredMovies = viewedMovies.filter(movies => movies.id != e.target.id);
  //localStorage.setItem("viewedMovies", JSON.stringify(filteredMovies));
  
  //fixa lägga till en movie som redan finns/ är besökt först i recently view/localStorage

  function saveToLocalStorage() {
    viewedMovies.unshift(movie);
    localStorage.setItem("viewedMovies", JSON.stringify(viewedMovies));
    removeMovie();
  }

  return (
    <div className="card">
      <img className="movie-img" src={getImgURL(poster_path)} alt={title}></img>
      <h3 className="title">
        <a
          title="More Info"
          href={homepage}
          onClick={() => saveToLocalStorage()}
        >
          {title.length > 30 ? title.slice(0, 30) + ".." : title}
        </a>
      </h3>
      <p className="release">{release_date}</p>
      <p className="rating">★ {vote_average}</p>
    </div>
  );
}

export default MovieCard;
