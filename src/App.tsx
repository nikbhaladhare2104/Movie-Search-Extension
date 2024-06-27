import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { setMovieDetails, setMovieHistory } from "./store/movieSlice";
import { MovieDetails } from "./background";

function App() {
  const dispatch = useDispatch();
  const { details, history } = useSelector((state: RootState) => state.movie);

  useEffect(() => {
    chrome.storage.local.get("movieDetails", (items) => {
      // console.log(items['movieDetails'][0]);
      const latestMovie = items["movieDetails"][0];
      dispatch(setMovieDetails(latestMovie));
      dispatch(setMovieHistory(items["movieDetails"]));
    });
  }, [dispatch]);

  const handleClear = () => {
    chrome.storage.local.remove("movieDetails", () => {
      dispatch(setMovieDetails({} as MovieDetails));
      dispatch(setMovieHistory([]));
    });
  };

  return (
    <div className="app">
      {/* <img
        src="https://picsum.photos/200"
        alt="Movie Poster"
        className="poster"
      /> */}

      {details && (
        <div className="movie-details-container">
          <div className="movie-details">
            <div className="title-container">
              <h1 className="title">{details.title}</h1>
              <p className="release-date">{details.release_date}</p>
            </div>

            <div className="rating-container">
               <img src="/star.svg" alt="Star-icon" width={18} height={18} /> 
              <p className="rating">{details.vote_average}</p>
            </div>
          </div>
          <p className="overview">{details.overview}</p>
        </div>
      )}
      {!details && <p className="no-results">No results found</p>}
      <div className="search-history-container">
        <h2 className="history">Recent Movie Searches</h2>
        <ul className="search-history">
          {history.map((movie, index) => (
            <li key={index} className="search-history-item" onClick={() => dispatch(setMovieDetails(movie))}>
              {movie.title}
            </li>
          ))}
          {!history.length && <p className="no-history">No history found</p>}
        </ul>
      </div>
      <div className="clear-history" onClick={handleClear}>
        Clear History
      </div>
    </div>
  );
}

export default App;
