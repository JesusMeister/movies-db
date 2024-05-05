import React from 'react'
import { MovieCard } from '../MovieCard'
import { IMovieTable } from './types'

const MovieTable:React.FC<IMovieTable> =
 ({
  movies, title, desc
  }) => {
  if (movies.length === 0){
    return (
      <div className='bg-gray-200 items-center inline-block'>
      <p className='p-5 font-bold text-3xl'>There are no {desc} movies available</p>
      </div>
    )
  }
  return (
    <div>
      <p className='a font-bold text-xl p-4'>{title}</p>
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 bg-gray-200 p-5'>
      {movies.map((movie) => (
        <div className='m-0'> 
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
            voteAverage={movie.vote_average}
            genreId={movie.genre_ids[0]}
          />
        </div>
      ))}
    </div>
  </div>
  
  )
}

export default MovieTable