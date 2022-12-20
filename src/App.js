import React from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./Pages/Home";
//import MoreInfoMovie from "./Pages/MoreInfoMovie";
//import Error from "./Pages/Error";
//import SerchMovies from "./Pages/SearchMovies";
import "./app.css";

function App() {
  return (
    <div className="App">
      <header>
      <Navbar/>
      </header>
      <main>
        <Home/>
      </main>
      <footer>
        <p>A Javascript app with React by Emma Gabrielsson</p>
      </footer>
    </div>
  );
}

export default App;


/*
      <Router>
      <header>
      <Navbar/>
      </header>
      <Routes>
      <main>
        <Route path="/" element={<Home/>}/>
        <Route path="moreinfomovie" element={<MoreInfoMovie/>}/>
        <Route path="movie/:id" element={<SerchMovies/>}/>
        <Route path="*" element={<Error/>}/>
      </main>
      </Routes>
      <footer>
        <p>A Javascript app with React by Emma Gabrielsson</p>
      </footer>
      </Router>
*/