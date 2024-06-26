
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { setMovieDetails } from './store/movieSlice';


function App() {
const dispatch = useDispatch();
  const movieDetails = useSelector((state: RootState) => state.movie.details);
   useEffect(() => {
    chrome.storage.local.get(null, (items) => {
      const latestMovie = Object.values(items)[0];
      dispatch(setMovieDetails(latestMovie));
    });
  }, [dispatch]);

   if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Overview: {movieDetails.overview}</p>
      <p>Rating: {movieDetails.vote_average}</p>
    </div>
  )
}

export default App
