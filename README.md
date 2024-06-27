# Movie Search Chrome Extension

## Description
This Chrome extension enhances the Google search experience for movie queries by fetching detailed information from the TMDB API and displaying it in a popup. It also maintains a searchable and persistent history of all movie queries made through the extension.

## Features
- Detects Google searches for movies.
- Fetches movie details from the TMDB API.
- Displays movie details in a user-friendly popup.
- Maintains and displays a search history of movie queries.
- State management with Redux.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/movie-search-extension.git
   cd movie-search-extension
   ```
2. Install dependencies:
  ```bash
  npm install
  ```
3. Build the extension:
  ```bash
  npm run build
  ```

4. Load the extension in Chrome:
  * Open Chrome and go to chrome://extensions/.
  * Enable "Developer mode" by toggling the switch in the top right corner.
  * Click "Load unpacked" and select the dist directory from the project.

##Usage
  * Perform a Google search for a movie (e.g., "Inception movie").
  * Click on the extension icon in the Chrome toolbar to view the movie details and search history.

    

