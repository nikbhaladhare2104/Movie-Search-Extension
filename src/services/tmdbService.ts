import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovieDetails = async (title: string) => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: title,
    },
  });

 
  // console.log(response.data.results[0])
  return response.data.results[0];
};
