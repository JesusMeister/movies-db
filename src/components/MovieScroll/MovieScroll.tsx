import React from 'react'
import { MovieCard } from '../MovieCard'
import { IMovieScroll } from './types'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes/constants'

const MovieScroll: React.FC<IMovieScroll> = ({
  text, movies, param, filter
}) => {
  const ViewAll = () => {
    if (typeof param != 'undefined') {
      return (
        <Link to={`${ROUTES.TABLE}/${param}`} className='p-2 text-[#ffffff] bg-[#eb554d] rounded-sm inline-block'>
          View All
        </Link>
      )
    }
    return (<></>)
  }

  return (
    <div className="bg-gray-200">
      <div className='flex justify-between items-center p-5'>
        <p className="font-bold lg:text-2xl md:text-xl sm:text-lg">{text}</p>
        {ViewAll()}
      </div>
      {movies.length === 0 ? (
        <div className='bg-gray-200 p-5'>
          <p>No hay películas para mostrar</p>
        </div>
      ) : (
        <div className="flex overflow-x-auto">
          {movies.filter((movie) => movie.vote_average > filter).map((movie) => (
            <div className="m-4" key={movie.id}>
              <MovieCard
                movieId={movie.id}
                posterPath={movie.poster_path}
                title={movie.title}
                voteAverage={movie.vote_average}
                genreId={movie.genre_ids[0]}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default MovieScroll
