import { MoviePage } from '../../components/MoviePage'
import { MovieScroll } from '../../components/MovieScroll'
import { useMovies } from '../../services/hooks/useMovies'
import { useParams } from 'react-router-dom'

function Poster() {
    const { param } = useParams()
    const url = "https://api.themoviedb.org/3/movie/" + param + "/similar?language=en-US&page=1"
  return (
    <div className='bg-gray-200'>
        <MoviePage id={Number(param)}/>
        <MovieScroll text='RECOMMENDATIONS' movies={useMovies(url)} filter={0}/>
    </div>
  )
}

export default Poster