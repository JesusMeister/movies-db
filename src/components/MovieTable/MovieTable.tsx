import React, { useEffect, useState } from 'react'
import { MovieCard } from '../MovieCard'
import { IMovieTable } from './types'
import { movie } from '../../constants/movieType';

const MovieTable:React.FC<IMovieTable> =
 ({
  movies, title, desc
  }) => {
  const [movieList, setMovieList] = useState<movie[]>(movies);
  const [sortedByName, setSortedByName] = useState<boolean>(false);
  const [sortedByRating, setSortedByRating] = useState<boolean>(false);
  useEffect(() => {
    setMovieList(movies);
    setSortedByName(false);
    setSortedByRating(false);
  }, [movies]);
  function unsort(){
    setMovieList(movies);
    setSortedByName(false);
    setSortedByRating(false);
  }
  function sortMovieListByRating(){
    setMovieList([...movies].sort((a,b) => (a.vote_average > b.vote_average ? -1 : 1)));
    setSortedByName(false);
    setSortedByRating(true);
  }
  function sortMovieListByName(){
    setMovieList([...movies].sort((a,b) => (a.title < b.title ? -1 : 1)));
    setSortedByName(true);
    setSortedByRating(false);
  }
  if (movies.length === 0){
    return (
      <div className='bg-gray-200 items-center inline-block'>
      <p className='p-5 font-bold text-3xl'>There are no movies to show in {desc} list</p>
      </div>
    )
  }
  return (
    <div>
      <div className='flex justify-between p-4'>
      <p className='a font-bold text-xl'>{title}</p>
      <div className='flex'>
      {!sortedByName ? 
      (<button className='bg-blue-500 rounded-md text-white p-2' onClick={()=>sortMovieListByName()}>Sort by name</button>)
      : 
      (<button className='bg-green-500 rounded-md text-white p-2' onClick={()=>unsort()}>Sort by name</button>)}
      <>&nbsp;</>
      {!sortedByRating ? 
      (<button className='bg-blue-500 rounded-md text-white p-2' onClick={()=>sortMovieListByRating()}>Sort by rating</button>) 
      : 
      (<button className='bg-green-500 rounded-md text-white p-2' onClick={()=>unsort()}>Sort by rating</button>)}
      </div>
      </div>
    <div className='flex flex-wrap gap-5 bg-gray-200 p-5'>
      {movieList.map((movie) => (
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