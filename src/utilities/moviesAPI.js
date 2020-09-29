import axios from 'axios';

const baseURL = 'https://api.themoviedb.org';
const key = '8ca227215ef92806ff11aa15496e0565';

const trendingMovies = () => {
  return axios
    .get(`${baseURL}/3/trending/movie/day?api_key=${key}`)
    .then(response => response.data.results);
};

const particularMovie = id => {
  return axios
    .get(`${baseURL}/3/movie/${id}?api_key=${key}`)
    .then(responce => responce.data);
};

const movieCast = id => {
  return axios
    .get(`${baseURL}/3/movie/${id}/credits?api_key=${key}`)
    .then(responce => responce.data.cast);
};

const movieReviews = id => {
  return axios
    .get(`${baseURL}/3/movie/${id}/reviews?api_key=${key}`)
    .then(responce => responce.data);
};

const moviesSearch = movie => {
  return axios
    .get(`${baseURL}/3/search/movie?api_key=${key}&query=${movie}`)
    .then(responce => responce.data.results);
};

export default {
  trendingMovies,
  particularMovie,
  movieCast,
  movieReviews,
  moviesSearch,
};
