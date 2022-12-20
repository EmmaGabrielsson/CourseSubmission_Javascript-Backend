import React, {useState, useEffect} from "react";
import "./movies.css";
import noImg from "../assets/no-img.png";
import add from "../assets/watchlist_add.png";

const getImgURL = (poster_path) => {
  return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`;
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
          target= "_blank"
          rel="noreferrer"
          onClick={() => localStorage.setItem(movie.id, JSON.stringify(movie))}
        >
          {title}
        </a>
      </h3>
      <p>Release: {release_date}</p>
      <p>
        Rating: <span className="rating">★{vote_average} /10</span>
      </p>
      <button className="add-btn" title="add movie" type="button">
        add to watchlist
        <img className="add" src={add} alt="add to watchlist" />
      </button>
    </div>
  );
}

export default MovieCard;
