export interface Respuesta {
    created_by: string;
    description: string;
    favorite_count: number;
    id: string;
    Items: Movie[];
    item_count: number;
    iso_639_1: string;
    name: string;
    poster_path: string;
}

export interface Movie {
    poster_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    media_type: string;
    id: number;
    adult: boolean;
    backdrop_path: string;
    original_language: string;
    original_title: string;
    genre_ids: number[];
    title: string;
    vote_average: number;
    overview: string;
    release_date: string;
}
