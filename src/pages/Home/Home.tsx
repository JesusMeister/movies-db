import MovieScroll from '../../components/MovieScroll/MovieScroll'
import { useMovies } from '../../services/hooks/useMovies';
import { nowPlayingUrl, popularUrl, topRatedUrl } from '../../constants/urls';
import { tableRoutes } from '../Table/Table';

function Home() {
  return (
    <div className='bg-gray-200 min-h-screen'>
       <MovieScroll text='NOW PLAYING' movies={useMovies(nowPlayingUrl)} param={tableRoutes.nowPlaying.name} filter={6}/>
       <MovieScroll text='POPULAR' movies={useMovies(popularUrl)} param={tableRoutes.popular.name} filter={7}/>
       <MovieScroll text='TOP RATED' movies={useMovies(topRatedUrl)} param={tableRoutes.topRated.name} filter={8.5}/>
    </div>
  );
}

export default Home;