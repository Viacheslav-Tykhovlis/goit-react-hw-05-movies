import axios from 'axios';

const API_KEY = 'c3e84704be1d961c1bbe01bb4ff0b43a';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendFilms = () => {
  const trendFilms = axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );

  return trendFilms;
};

export const getFilmInfo = id => {
  const infoFilm = axios.get(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
  );

  return infoFilm;
};
