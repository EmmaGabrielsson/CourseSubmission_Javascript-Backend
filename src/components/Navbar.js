import React, { useState } from "react";
import "./navbar.css";
import SearchIcon from "../assets/search-icon.svg";
import Watchlist from "../assets/watchlist-icon.png";

function Navbar(props) {
  const { onSearch } = props;

  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    const text = e.target.value;
    if (searchText !== "") {
      setSearchText(`https://api.themoviedb.org/3/search/movie?api_key=0344a75c41d12f762099ba1e7125eae6&language=en-US&query=${text}&page=1&include_adult=false`);
    }
  };

  const handleEnterKeyPressed = (e) => {
    if (e.key === "Enter") {
      onSearch(searchText);
    }
  };

  return (
    <div className="nav">
      <h1>
        movie<span className="time">time</span>
      </h1>

      <div className="search">
        <input
          className="search-input"
          onChange={handleInput}
          onKeyPress={handleEnterKeyPressed}
          value={searchText}
          type="text"
          placeholder="search movies"
        />
        <img
          title="search"
          className="search-icon"
          src={SearchIcon}
          alt="search icon"
          onClick={onSearch(searchText)}
        />
        <img
          id="watchlist-icon"
          title="Your Watchlist"
          src={Watchlist}
          alt="watchlist"
        />
      </div>
    </div>
  );
}
/*
            <Link to="/">
      <h1>
        movie<span className="time">time</span>
      </h1>
      </Link>
      <SearchForm/>

*/
export default Navbar;
