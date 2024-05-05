import { useState, useEffect } from 'react';
import { getMovies } from '../requests/movies';
import { movie } from '../../constants/movieType';


export const useMovies = (url:string) => {
  const [data, setData] = useState<movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieList = await getMovies(url);
      if (movieList) {
        setData(movieList);
      }
    };
    fetchData();
  }, [url]);
  return data;
};