import { useEffect, useRef } from 'react'
import { MoviePage } from '../../components/MoviePage'
import { MovieScroll } from '../../components/MovieScroll'
import { useMovies } from '../../services/hooks/useMovies'
import { useLocation, useParams } from 'react-router-dom'

function Poster() {
    const { param } = useParams()
    const url = "https://api.themoviedb.org/3/movie/" + param + "/similar?language=en-US&page=1"
    const location = useLocation()
    useEffect(() => {
     window.scrollTo(0,0)
    }, [location])
  return (
    <div className='bg-gray-200 min-h-screen'>
        <MoviePage id={Number(param)}/>
        <MovieScroll text='RECOMMENDATIONS' movies={useMovies(url)} filter={0}/>
    </div>
  )
}

export default Poster