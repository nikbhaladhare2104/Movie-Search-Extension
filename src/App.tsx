
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { setMovieDetails } from './store/movieSlice';


function App() {
const dispatch = useDispatch();
  const { details, history } = useSelector((state: RootState) => state.movie);


    useEffect(() => {
    chrome.storage.local.get(null, (items) => {
      const latestMovie = Object.values(items)[0];
      dispatch(setMovieDetails(latestMovie));
    });
  }, [dispatch]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{details.title}</h1>
      <p>Release Date: {details.release_date}</p>
      <p>Overview: {details.overview}</p>
      <p>Rating: {details.vote_average}</p>
      <h2>Search History</h2>
      <ul>
        {history.map((movie, index) => (
          <li key={index}>
            {movie.title} - {movie.release_date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
