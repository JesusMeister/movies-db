import { useEffect, useState } from 'react'
import { MoviePage } from '../../components/MoviePage'
import { MovieScroll } from '../../components/MovieScroll'
import { useMovies } from '../../services/hooks/useMovies'
import { useLocation, useParams } from 'react-router-dom'

function Poster() {
    const { param } = useParams()
    const url = "https://api.themoviedb.org/3/movie/" + param + "/similar?language=en-US&page=1"
    const location = useLocation()
    const [loading, setLoading] = useState<boolean>();
    const movieList = useMovies(url);
    useEffect(() => {
     setLoading(true);
     if (movieList){
      setLoading(false);
     }
     window.scrollTo(0,0);

    }, [location, movieList])
  return (
    <div className='bg-gray-200 min-h-screen'>
        {loading ? 
        (<p className='font-bold'>Loading...</p>)
        :
        (<>
        <MoviePage id={Number(param)}/>
        <MovieScroll text='RECOMMENDATIONS' movies={movieList} filter={0}/>
        </>)}
    </div>
  )
}

export default Poster