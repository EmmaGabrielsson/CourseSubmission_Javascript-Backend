import React from 'react';
import MovieCard from './MovieCard';

function SearchMovies({results}) {

  let data = [];

  if (results.data) {
    data = results.data || [];
  }

  return (
    <section className='slider'>
      {data.map((movie) => {
        return <MovieCard key={movie.id} movie={...movie}/>
      })}
    </section>
  )
}

export default SearchMovies;
