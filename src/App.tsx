
import { useEffect, useState } from 'react';

function App() {
  const [movieDetails, setMovieDetails] = useState<any>(null);

   useEffect(() => {
    chrome.storage.local.get(null, (items) => {
      const latestMovie = Object.values(items)[0];
      setMovieDetails(latestMovie);
    });
  }, []);

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
