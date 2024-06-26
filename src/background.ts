import { fetchMovieDetails } from './services/tmdbService';

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.type === 'MOVIE_QUERY') {
    const movieDetails = await fetchMovieDetails(message.title);
    chrome.storage.local.set({ [message.title]: movieDetails });
  }
});
