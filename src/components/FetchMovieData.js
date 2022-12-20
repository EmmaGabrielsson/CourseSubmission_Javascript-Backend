import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://api.themoviedb.org/3/search/movie?api_key=0344a75c41d12f762099ba1e7125eae6&language=en-US&page=1&include_adult=false'
const AppContext = React.createContext();

const getImgURL = (poster_path) => {
    return `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${poster_path}`;
  };

const MovieData = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const fetchMovies = useCallback( async () => {
    setLoading(true)
    try {
      const response = await fetch(`${url}${searchTerm}`)
      const data = await response.json()
      const { movies } = data
      if (movies) {
        const newMovies = movies.map((movie) => {
          movie = {
            id: movie.id,
            link: movie.homepage,
            title: movie.title,
            rating: movie.vote_average,
            description: movie.overview,
            img: getImgURL(movie.poster_path), 
          }
          return movie;
        })
        setMovies(newMovies)
      } else {
        setMovies([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  },[searchTerm])
  useEffect(() => {
    fetchMovies()
  }, [searchTerm,fetchMovies])
  return (
    <AppContext.Provider
      value={{ loading, movies, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
};

export default { AppContext, MovieData };
