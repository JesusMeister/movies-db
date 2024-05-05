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
      {posterPath === null ? 
      (<div className="a h-96 w-full flex items-center justify-center text-white font-bold bg-black">Poster unavailable</div>)
      :
      (<img src={poster} alt='Poster unavailable' className='h-full w-full rounded-lg relative duration-700 hover:scale-110 hover:brightness-50'></img>)}
      <div className='h-full w-full absolute top-0 left-0 bg-gradient-to-b from-transparent to-black opacity-50 pointer-events-none'></div>
      <div className='absolute bottom-5 left-6 pointer-events-none'>
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