import { MovieTable } from '../../components/MovieTable';
import { nowPlayingUrl, popularUrl, topRatedUrl } from '../../constants/urls';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovies } from '../../services/requests/movies';
import useFavorites from '../../services/hooks/useFavorites';
import { movie } from '../../constants/movieType';

type Route = {
  url: string;
  name: string;
  title: string;
};

export const tableRoutes: Record<string, Route> = {  
  popular:{url: popularUrl,name: "popular",title:"POPULAR"},
  topRated: {url:topRatedUrl, name:"topRated",title:"TOP RATED"},
  nowPlaying: {url:nowPlayingUrl, name:"nowPlaying",title:"NOW PLAYING"},
  favorites: {url:popularUrl, name: "favorites", title:"FAVORITES"}
}

function Table() {
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

  useEffect(() => {
    const fetchData = async () => {
      const movieList = await getMovies(movieUrl);
      if (movieList) {
        setMovies(movieList);
      }
    };
    fetchData();
  }, [param, movieUrl]); 
  movieList = movies
  const getTitle = () =>{
    if (typeof param === 'undefined'){
      return ""
    }
    return tableRoutes[param].title;
  }
  const { favorites, addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  if (param === tableRoutes.favorites.name){
    movieList = favorites
  }
  return (
    <div className='bg-gray-200 min-h-screen'>
      <MovieTable movies={movieList} title={getTitle()}/>
    </div>
  );
}

export default Table;