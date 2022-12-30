import React, { useState, useEffect } from "react";
import "./navbar.css";
import "./components.css";
import SearchIcon from "../assets/search-icon.svg";
import SearchMovies from "./SearchMovies";

function Navbar() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [URL, setUrl] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  
  useEffect(() => {
    fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw Error("Error: " + response.status);
      }
      return response.json();
    })
    .then((data) => {
      setMovies(data.results);
    })
    .catch((err) => console.log(err.message));
  }, [URL]);
  
  const handleSearch = (e) => {
    if (e.key === "Enter") {
      const apiKey = `0344a75c41d12f762099ba1e7125eae6`;
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`;
      setUrl(url)
      setShowSearch(true)
      //setSearchText(" ");
    }
  };

  const handleSubmit = (e) => e.preventDefault();


  return (
    <>
      <header>
        <div className="nav">
          <h1>
            movie<span className="time">time</span>
          </h1>
          <form className="search" onSubmit={handleSubmit}>
            <input
              id="search"
              name="search"
              className="search-input"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
              onKeyPress={handleSearch}
              type="text"
              placeholder="search movies"
            />
            <img
              title="search"
              className="search-icon"
              src={SearchIcon}
              alt="search icon"
            />
          </form>
        </div>
      </header>
      <div className="space"></div>
      {showSearch === true ? <SearchMovies movies={movies} search={searchText} /> : ""}
    </>
  );
}

export default Navbar;
