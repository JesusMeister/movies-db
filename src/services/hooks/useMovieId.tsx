import { useEffect, useState } from "react"
import { getMovieById } from "../requests/movies"
import { movie } from "../../constants/movieType";

export const useMovieId = (id:number) => {
    const [data, setData] = useState<movie>();
    useEffect(() => {
        const fetchData = async() => {
            const movie = await getMovieById(id);
            if (movie){
                movie.genre_ids = []
                movie.genres.map((genre, i) => 
                    movie.genre_ids.push(genre.id)
                )
                setData(movie);
            }
        }
        fetchData();
    }, [id])
    return data;
}