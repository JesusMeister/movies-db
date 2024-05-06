import MovieScroll from '../../components/MovieScroll/MovieScroll'
import { useMovies } from '../../services/hooks/useMovies';
import { nowPlayingUrl, popularUrl, topRatedUrl } from '../../constants/urls';
import { tableRoutes } from '../Table/Table';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Home() {
  const location = useLocation()
  const [loading, setLoading] = useState<boolean>();
  const nowPlaying = useMovies(nowPlayingUrl);
  const popular = useMovies(popularUrl);
  const topRated = useMovies(topRatedUrl);
  useEffect(() => {
    window.scrollTo(0,0)
    setLoading(true);
    if (nowPlaying && popular && topRated){
      setLoading(false);
    }
  }, [location, loading, nowPlaying, popular, topRated])
  return (
    <div className='bg-gray-200 min-h-screen'>
       {loading ? 
       (<p className='font-bold'>Loading...</p>) 
       : 
       (<>
       <MovieScroll text='NOW PLAYING' movies={nowPlaying} param={tableRoutes.nowPlaying.name} filter={7}/>
       <MovieScroll text='POPULAR' movies={popular} param={tableRoutes.popular.name} filter={7}/>
       <MovieScroll text='TOP RATED' movies={topRated} param={tableRoutes.topRated.name} filter={8.5}/>
       </>)}
    </div>
  );
}

export default Home;