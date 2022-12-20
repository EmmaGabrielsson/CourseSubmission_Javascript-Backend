import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import SearchForm from "./SearchForm";
import SearchIcon from "../assets/search-icon.svg";
import Watchlist from "../assets/watchlist-icon.png";

function Navbar() {
  return (
    <div className="nav">
      <h1>
        movie<span className="time">time</span>
      </h1>

      <div className="search">
        <input
          className="search-input"
          onChange={""}
          onKeyPress={""}
          type="text"
          placeholder="search movies"
        />
        <img
          title="search"
          className="search-icon"
          src={SearchIcon}
          alt="search icon"
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
