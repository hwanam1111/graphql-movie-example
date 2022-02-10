import axios from 'axios';

const API_URL = 'https://yts.mx/api/v2/list_movies.json';

export const getMovies = (limit = 1) => {
  return axios.get(`${API_URL}?limit=${limit}`)
    .then((result) => {
      return result.data;
    })
    .then((json) => {
      return json.data.movies;
    })
}