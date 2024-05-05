import { movie } from "../../constants/movieType"


export interface IMovieScroll{
    text: string
    movies: movie[]
    param?: string
    filter: number
}