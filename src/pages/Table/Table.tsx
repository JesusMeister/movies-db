import { MovieTable } from '../../components/MovieTable';
import { nowPlayingUrl, popularUrl, topRatedUrl } from '../../constants/urls';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovies } from '../../services/requests/movies';
import useFavorites from '../../services/hooks/useFavorites';
import { movie } from '../../constants/movieType';

type Route = {
  url: string;
  name: string;
  title: string;
  desc: string;
};

export const tableRoutes: Record<string, Route> = {  
  popular:{url: popularUrl,name: "popular",title:"POPULAR", desc:"popular"},
  topRated: {url:topRatedUrl, name:"topRated",title:"TOP RATED", desc: "top rated"},
  nowPlaying: {url:nowPlayingUrl, name:"nowPlaying",title:"NOW PLAYING", desc: "now playing"},
  favorites: {url:popularUrl, name: "favorites", title:"FAVORITES", desc: "favorite"}
}

function Table() {

  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  }, [location])

  const { param } = useParams();

  var movieUrl:string; 
  if (typeof param !== 'undefined'){
    movieUrl = tableRoutes[param]?.url
  }
  else{
    movieUrl = tableRoutes.popular.url
  }

  let movieList: movie[]
  const [movies, setMovies] = useState<movie[]>([]);
  var description = "";

  const [loading, setLoading] = useState<boolean>();
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const movieList = await getMovies(movieUrl);
      if (movieList) {
        setMovies(movieList);
        setLoading(false)
      }
    };
    fetchData();
  }, [param, movieUrl]); 
  movieList = movies
  const getTitle = () =>{
    if (typeof param === 'undefined'){
      return ""
    }
    description = tableRoutes[param].desc
    return tableRoutes[param].title;
  }
  const { favorites } = useFavorites();
  if (param === tableRoutes.favorites.name){
    movieList = favorites
  }
  return (
    <div className='bg-gray-200 min-h-screen'>
      {loading ? 
        (<p className='font-bold'>Loading...</p>)
        :
        (<MovieTable movies={movieList} title={getTitle()} desc={description}/>)}
    </div>
  );
}

export default Table;