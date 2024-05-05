import axios from 'axios';
import { defaultMovie, movie } from '../../constants/movieType';


const apiKey = process.env.REACT_APP_BD_API_KEY
export const getMovies = async(url: string): Promise<movie[]> => {
  try {
    const response = await axios.get(`${url}&api_key=${apiKey}`);
    return response.data.results;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return [];
  }
};

export const getMovieById = async(id: number): Promise<movie> => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return defaultMovie;
  }
};