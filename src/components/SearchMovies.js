import React from 'react'
import { Link } from 'react-router-dom'

const SearchMovies = () => {
  const { movies, isLoading } = useGlobalContext()

  if (isLoading) {
    return <div className='loading'>loading...</div>
  }
  return (
    <section className='movies'>
      {movies.map((movie) => {
        const { imdbID: id, Poster: poster, Title: title, Year: year } = movie

        return (
          <Link to={`/movies/${id}`} key={id} className='movie'>
            <article>
              <img src={poster === 'N/A' ? url : poster} alt={title} />
              <div className='movie-info'>
                <h4 className='title'>{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default SearchMovies;
