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
      if (i > 5) {
        viewedMovies.pop(movie);
        localStorage.setItem("viewedMovies", JSON.stringify(viewedMovies));
      }
    }
  }
  
  function saveToLocalStorage() {
    let obj = viewedMovies.find((movies) => movies.id === movie.id);
    viewedMovies.splice(viewedMovies.indexOf(obj), 1);
    viewedMovies.unshift(movie);
    localStorage.setItem("viewedMovies", JSON.stringify(viewedMovies));
    removeMovie();
  }

  return (
    <div className="card">
      <img className="movie-img" src={getImgURL(poster_path)} alt={title}></img>
      <h3 className="title">
        <a
          onClick={() => saveToLocalStorage()}
          title="More Info"
          href={homepage}
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
