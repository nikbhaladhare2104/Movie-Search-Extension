
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { setMovieDetails, setMovieHistory } from './store/movieSlice';


function App() {
const dispatch = useDispatch();
  const { details, history } = useSelector((state: RootState) => state.movie);


  useEffect(() => {
    chrome.storage.local.get('movieDetails', (items) => {
      // console.log(items['movieDetails'][0]);
      const latestMovie = items['movieDetails'][0]
      dispatch(setMovieDetails(latestMovie));
      dispatch(setMovieHistory(items['movieDetails']));
    });
  }, [dispatch]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className='app'>
      <h1>{details.title}</h1>
      <p  className='release-date'>Release Date: {details.release_date}</p>
      <p className='overview'>Overview: {details.overview}</p>
      <p className='rating'>Rating: {details.vote_average}</p>
      <h2 className='history'>Search History</h2>
      <ul className='search-history'>
        {history.map((movie, index) => (
          <li key={index} className='search-history-item'>
            {movie.title} - {movie.release_date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
