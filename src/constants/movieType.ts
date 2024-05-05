export interface genre{
    id:number,
    name:string,
  }
  
  export interface movie{
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    genres: genre[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    tagline: string,
    runtime: number,
  }
  
  
  export const defaultMovie: movie = {
    adult: false,
    backdrop_path: "",
    genre_ids: [0],
    genres: [],
    id: 0,
    original_language: "",
    original_title: "",
    overview: "",
    popularity: 0,
    poster_path: "",
    release_date: "",
    title: "",
    video: false,
    vote_average: 0,
    vote_count: 0,
    tagline: "",
    runtime: 0,
  }
  