import { fetchMovieDetails } from './services/tmdbService';
// import { setMovieDetails } from './movieSlice'; // Import the action creator

// Define message and movie details types
interface Message {
  type: string;
  title?: string;
}

export interface MovieDetails {
  title: string;
  release_date: string;
  overview: string;
  rating: number;
  [key: string]: any;
}

chrome.runtime.onMessage.addListener(async (message: Message) => {
  if (message.type === 'MOVIE_QUERY' && message.title) {
    const movieDetails: MovieDetails | null = await fetchMovieDetails(message.title);
    if (!movieDetails) {
      chrome.runtime.sendMessage({ type: 'NO_RESULTS' });
      return;
    }


    // chrome.runtime.sendMessage({ type: 'SET_MOVIE_DETAILS', payload: movieDetails });
    chrome.storage.local.get('movieDetails', (result) => {
      const movieDetailsArray: MovieDetails[] = result.movieDetails || [];
      
      const updatedMovieArray = [
        movieDetails,
        ...movieDetailsArray.filter((movie: MovieDetails) => movie.title !== movieDetails.title)
      ]

      chrome.storage.local.set({ movieDetails: updatedMovieArray }, () => {
        // console.log(`Movie details for "${movieDetails.title}" has been stored.`);
      });
      // chrome.storage.local.get('movieDetails', (result) => {
      //   console.log(result['movieDetails']);
      // })
    })



    chrome.storage.local.get('movieSearches', (result) => {
      const movieSearches: string[] = result.movieSearches || [];
      const updatedSearches = [message.title, ...movieSearches.filter((title: string) => title !== message.title)];

      chrome.storage.local.set({ 
        movieSearches: updatedSearches,
        // [message.title as string]: movieDetails 
      }, () => {
        // console.log(`Movie search for "${message.title}" has been stored.`);
      });
      // chrome.storage.local.get('movieSearches', (result) => {
      //   console.log(result['movieSearches']);
      // })


      // Sort movie details in local storage by the order of movieSearches
      // const sortedMovieDetails: { [key: string]: MovieDetails } = {};
      // updatedSearches.forEach((title) => {
      //   sortedMovieDetails[title as string] = result[title as string];
      // });

      // chrome.storage.local.set(sortedMovieDetails, () => {
      //   console.log('Movie details sorted and stored in local storage.');
      // });
    });
  }
});
