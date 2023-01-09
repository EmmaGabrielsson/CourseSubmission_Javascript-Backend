## Course Submission Javascript-Backend 

### To quickly preview the site, see this netlify link: https://react-movietime.netlify.app/

Here I have created a singlepage application with React using javascrpit. The application fetch movies from the TMDB-API (https://developers.themoviedb.org/3/getting-started/introduction) and includes:

- a searchbar were you can search after all matching movies,
- a frontpage that displays most popular movies, top kids movies and top drama movies and their title and rating in a sidescroll function,
- a link on movie-title that navigates you to the current movie-homepage with more info,
- and at the bottom of the frontpage a placeholder for recently viewed movies that renders in when the user visits a movies homepage, and can display the users six recently visited movie-pages (in the correct order) saved in localStorage.


Finally, to be able to send requests to the API, a key is used. The current key is put in a separate .env file to saftely hide the key in the frontend when using react.

