import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "c4a1a601044e07d1317cdc7a5a610d93";
const AUTHORIZATION =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGExYTYwMTA0NGUwN2QxMzE3Y2RjN2E1YTYxMGQ5MyIsInN1YiI6IjY1ZDI3MGEwNGJjMzhiMDE3MDU0NDZkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ORxI6_6HPJevgkEWPjECtsf0C8jWV9cvINuU4auf04c";

export const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w300";
export const PHOTO_BASE_URL = "https://image.tmdb.org/t/p/w200";

const LANGUAGE = "en-US";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: AUTHORIZATION,
  },
};

// Genres
export async function fetchGenres() {
  const endpointUrl = "genre/movie/list";
  const searchParams = new URLSearchParams({
    language: "en",
  });
  const url = new URL(`${BASE_URL}${endpointUrl}?${searchParams}`);

  const response = await axios.get(url, options);
  // console.log('fetchGenres response: ', response);
  return response.data;
}

export const GENRES_LIST = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];

export const getGenres = (genreIds) => {
  const genres = genreIds.map((genreId) => {
    const foundGenre = GENRES_LIST.find((genre) => genre.id === genreId);
    return foundGenre ? foundGenre.name : "";
  });
  return genres.join(", ");
};

// Posters
export async function getPoster(posterUrl) {
  const url = `POSTERS_URL${posterUrl}`;
  const response = await axios(url, options);
  // console.log("response.data: ", response.data);
  return response.data;
}

// Trending:
export async function fetchTrendingMovies() {
  const endpointUrl = "trending/movie/day";
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: LANGUAGE,
    // page: pageNo,
  });
  const url = `${BASE_URL}${endpointUrl}?${searchParams}`;
  const response = await axios(url, options);
  // console.log("fetchTrendingMovies - response.data: ", response.data);
  return response.data;
}

// Search
export async function fetchSearchedMovies(keywords, pageNo) {
  const endpointUrl = "search/movie";
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    query: keywords,
    include_adult: false,
    language: LANGUAGE,
    page: pageNo,
  });
  const url = `${BASE_URL}${endpointUrl}?${searchParams}`;
  const response = await axios(url, options);
  // console.log("fetchSearchedMovies - response.data: ", response.data);
  return response.data;
}

// Movie Details
export async function fetchMovieDetails(movieId) {
  const endpointUrl = "movie";
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: LANGUAGE,
  });
  const url = `${BASE_URL}${endpointUrl}/${movieId}?${searchParams}`;
  const response = await axios(url, options);
  // console.log("fetchMovieDetails - response.data: ", response.data);
  return response.data;
}

// Movie Cast
export async function fetchMovieCast(movieId) {
  const endpointUrl = "movie";
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: LANGUAGE,
  });
  const url = `${BASE_URL}${endpointUrl}/${movieId}/credits?${searchParams}`;
  const response = await axios(url, options);
  // console.log("fetchMovieCast - response.data.cast: ", response.data.cast);
  return response.data.cast;
}

// Movie Reviews
export async function fetchMovieReviews(movieId, pageNo) {
  const endpointUrl = "movie";
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: LANGUAGE,
    page: pageNo
  });
  const url = `${BASE_URL}${endpointUrl}/${movieId}/reviews?${searchParams}`;
  const response = await axios(url, options);
  console.log("fetchMovieReviewss - response.data.results: ", response.data.results);
  return response.data.results;
}

// Movie Trailer
export async function fetchMovieTrailers(movieId) {
  const endpointUrl = "movie";
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: LANGUAGE,
  });
  const url = `${BASE_URL}${endpointUrl}/${movieId}/videos?${searchParams}`;
  console.log("fetchMovieTrailers - response.data: ", response.data);
  const response = await axios(url, options);
  return response.data;
}
