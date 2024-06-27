function parseGoogleSearch() {
  const query = document.querySelector('textarea[name="q"]')?.getAttribute('value');
  if (query && query.toLowerCase().includes('movie')) {
    const title = query.replace('movie', '').trim();
    chrome.runtime.sendMessage({ type: 'MOVIE_QUERY', title });
  }
}

parseGoogleSearch();
