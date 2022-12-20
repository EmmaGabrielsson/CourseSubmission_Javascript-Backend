import React, {useState} from "react";
import tmdbURL from "./API/tmdbURL";
//import FetchMovieData, { useGlobalContext } from "../components/FetchMovieData";
import SearchIcon from "../assets/search-icon.svg";
import Watchlist from "../assets/watchlist-icon.png";
import "./movies.css";

const getFilteredMovies = (seacrhTerm, movies) => {
  if(!seacrhTerm) {
    return movies;
  }
  return movies.filter(movie => movie.title.includes(seacrhTerm))
}

export default function SearchForm() {
  const { searchTerm, setSearchTerm } = useState("");

    const fetchMovies = async () => {
      const { data } = await tmdbURL.get(`/search/movie?${searchTerm}`);
      data = data.results;
    };

const {data} = fetchMovies;
const {movies} = data;

const filteredMovies = getFilteredMovies(searchTerm, movies);

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="search movies"
        />
        <label htmlFor="name">
          <img
            title="search"
            className="search-icon"
            src={SearchIcon}
            alt="search icon"
          />
        </label>
      </form>
      <img
        id="watchlist-icon"
        title="Your Watchlist"
        src={Watchlist}
        alt="watchlist"
      />
      <ul>
        {filteredMovies.map(movie => <h2 key={movie.title}>{movie.title}</h2>)}
      </ul>
    </section>
  );
}


/*
export default function SearchForm() {
  const { searchTerm, setSearchTerm } = useState("");
  const searchValue = React.useRef("");

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await tmdbURL.get("/search/movie?");
      setMovies(data.results);
    };
    fetchMovies();
  }, []);


  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function searchMovie() {
    setSearchTerm(searchValue.current.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          ref={searchValue}
          onChange={searchMovie}
          placeholder="search movies"
        />
        <label htmlFor="name">
          <img
            title="search"
            className="search-icon"
            src={SearchIcon}
            alt="search icon"
          />
        </label>
      </form>
      <img
        id="watchlist-icon"
        title="Your Watchlist"
        src={Watchlist}
        alt="watchlist"
      />
    </section>
  );
}
*/