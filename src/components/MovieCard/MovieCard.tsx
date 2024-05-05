import React from 'react'
import { IMovieCard } from './types'
import { Link } from 'react-router-dom'
import { IMAGE_SOURCE } from '../../constants/urls'
import genres from '../../constants/genres.json'
import { ROUTES } from '../../routes/constants'
import '../../index.css'

const MovieCard: React.FC<IMovieCard> = ({
  title,
  genreId,
  movieId,
  voteAverage,
  posterPath,
}) => {
  const poster = IMAGE_SOURCE + posterPath
  const getGenre = (genreId: number) => {
    const key = Object.values(genres.genres).find(genre => genre.id === genreId)
    if (key) {
      return key.name;
    }
    return "Not classified"
  }
  return(
  <Link to = {ROUTES.POSTER + "/"+ movieId} className='inline-block'>
  <div className='relative overflow-hidden rounded-lg inline-block bg-red-600 w-64'>
      <img src={poster} alt='Poster unavailable' className='h-full w-full rounded-lg relative duration-700 hover:scale-110 hover:brightness-50'></img>
      <div className='absolute bottom-5 left-6'>
        <div className='sm:text-xs md:text-sm lg:text-base inline-block p-1 font-bold text-[#ffffff] bg-[#eb554d] rounded-md'>
        {getGenre(genreId)}
        </div>
        <div className='font-bold text-[#ffffff]'>
          <p className='sm:text-base md:text-lg lg:text-xl'>{title}</p>
          <p className='sm:text-xs md:text-sm lg:text-base'>☆{voteAverage}/10</p>
        </div>
      </div>
  </div>
  </Link>
  )
}

export default MovieCard