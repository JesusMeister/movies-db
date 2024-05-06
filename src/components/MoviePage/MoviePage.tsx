import React from 'react'
import { IMoviePage } from './types'
import { useMovieId } from '../../services/hooks/useMovieId'
import { IMAGE_SOURCE } from '../../constants/urls'
import useFavorites from '../../services/hooks/useFavorites'
import { genre } from '../../constants/movieType'

const MoviePage:React.FC<IMoviePage> = ({
  id
}) => {
  const getAge = (adult: boolean) => {
    if (adult) {
      return(<p>18+ {adult}</p>)
    }
    return (<p>18- {adult}</p>)
  }
  const movie = useMovieId(id);
  const {addToFavorites, removeFromFavorites, isFavorite} = useFavorites();
  const poster = IMAGE_SOURCE + movie?.poster_path;
  if (movie?.id === 0){
    return (
      <div className='font-bold'>Loading...</div>
    )
  }
  if (typeof movie?.adult == 'undefined'){
    return (
      <div className='font-bold'>Loading...</div>
    )
  }
  return (
    <div className='p-3 flex'>
      {movie?.poster_path === null ? 
      (<div className="a h-96 w-64 flex items-center justify-center text-white font-bold bg-black">Poster unavailable</div>)
      :
      (<img src={poster} alt='poster' className='rounded-lg w-64'></img>)}
      <div className='p-5'>
        <p className='font-bold text-3xl'>{movie?.title}</p>
        <br></br>
        <div className='flex space-x-3 font-bold items-center'>
          {getAge(movie!.adult)}
          <p><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" className="w-6 svg-inline--fa fa-users fa-w-20 my-icons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path></svg></p>
          <p>{movie?.runtime} min.</p>
          <p><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock" className="w-5 svg-inline--fa fa-clock fa-w-16 my-icons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"></path></svg></p>
          <p>{movie?.release_date}</p>
          <p><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-day" className="w-4 svg-inline--fa fa-calendar-day fa-w-14 my-icons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm64-192c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16v-96zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg></p>
          <p>{movie?.vote_average}</p>
          <p><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="w-5 svg-inline--fa fa-star fa-w-18 my-icons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg></p>
          <p>{movie?.vote_count}</p>
          <p><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="poll" className="w-4 svg-inline--fa fa-poll fa-w-14 my-icons" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM160 368c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V240c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v128zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16V144c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v224zm96 0c0 8.84-7.16 16-16 16h-32c-8.84 0-16-7.16-16-16v-64c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v64z"></path></svg></p>
        </div>
        <br></br>
        <p>"{movie?.tagline}"</p>
        <p>{movie?.overview}</p>
        <div className='flex space-x-10'>
        <div>
          <br></br>
        <p>Genres</p>
        <div className='flex flex-wrap'>
          {movie?.genres.map((item: genre, i: number) => (
            <span key={i} className="m-2 border bg-green-500 p-1 rounded-lg text-gray-100">
              {item.name}
            </span>
          ))}
        </div>
        <p className=''>Favorite</p>
        {isFavorite(movie) ? (
        <button className="m-2 border bg-red-500 p-2 rounded-lg text-gray-100" onClick={() => removeFromFavorites(movie)}>
          × Remove from favorites
        </button>) : 
        (<button className="m-2 border bg-blue-500 p-2 rounded-lg text-gray-100" onClick={() => addToFavorites(movie)}>
          ♥ Add to favorites
        </button>)}
        </div>
        </div>
      </div>
    </div>
  )
}

export default MoviePage