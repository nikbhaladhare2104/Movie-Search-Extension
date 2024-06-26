chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'MOVIE_QUERY') {
    // Handle movie query
  }
});
