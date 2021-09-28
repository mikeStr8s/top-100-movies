export interface Result {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface MovieResponse {
  page: number;
  results: Result[];
  total_pages: number;
  total_results: number;
}


function getMovieRequestOptions(){
  return {
    method: 'GET',
  }
}

export async function getMovie(url: string): Promise<MovieResponse> {
  const response = await fetch(url, getMovieRequestOptions());
  return response.json();
}