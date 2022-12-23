import React, {useState} from "react";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./Pages/Home";
//import tmdbURL from "./components/API/tmdbURL.js";
//import MoreInfoMovie from "./Pages/MoreInfoMovie";
//import Error from "./Pages/Error";
import SearchMovies from "./Pages/SearchMovies";
import "./app.css";

function App() {

const [state, setState] = useState({
  results: []
});

async function onSearch(url){ 
  const results = await fetch(url);
  const data = await results.json()
  setState(prevState => {
    return {...prevState, results: data}
  })

}
/*
const OnSearch = async (text) => {
  //const results = `https://api.themoviedb.org/3/search/movie?api_key=0344a75c41d12f762099ba1e7125eae6&language=en-US&query=${text}&page=1&include_adult=false`
  const results = await tmdbURL.get(`/search/movie?`, {
    params: {query: text}
  })
  setState(prevState => {
    return {...prevState, results: results}
  })
}*/

  return (
    <div className="App">
      <header>
      <Navbar onSearch={onSearch}/>
      </header>
      <main>
        <SearchMovies results={state.results}/>
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