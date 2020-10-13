import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const key = '8ca227215ef92806ff11aa15496e0565';

const trendingMovies = () => {
  return axios
    .get(`trending/movie/day?api_key=${key}`)
    .then(response => response.data.results);
};

const particularMovie = id => {
  return axios
    .get(`movie/${id}?api_key=${key}`)
    .then(response => response.data);
};

const movieCast = id => {
  return axios
    .get(`movie/${id}/credits?api_key=${key}`)
    .then(response => response.data.cast);
};

const movieReviews = id => {
  return axios
    .get(`movie/${id}/reviews?api_key=${key}`)
    .then(response => response.data);
};

const moviesSearch = movie => {
  return axios
    .get(`search/movie?api_key=${key}&query=${movie}`)
    .then(response => response.data.results);
};

export default {
  trendingMovies,
  particularMovie,
  movieCast,
  movieReviews,
  moviesSearch,
};
