# Netflix API

This API is designed to simulate a Netflix-like application, providing various endpoints to retrieve movie and TV series data. Here's an overview of each endpoint:

## Movie Endpoints

- `GET /movies/:id`: Retrieve detailed information about a specific movie by its ID.
- `GET /movies/popular`: Retrieve a list of popular movies.
- `GET /movies/topRated`: Retrieve a list of top-rated movies.
- `GET /movies/upcoming`: Retrieve a list of upcoming movies.
- `GET /movies/genres`: Retrieve a list of movie genres.
- `GET /movies/genre/:id`: Retrieve movies belonging to a specific genre.
- `GET /movies/similar/:id`: Retrieve a list of movies similar to a given movie.
- `GET /movies/search`: Search for movies based on a keyword.
- `GET /movies/videos/:id`: Retrieve videos of a specific movie

## TV Series Endpoints

- `GET /tv/serie/:id`: Retrieve detailed information about a specific TV series by its ID.
- `GET /tv/popular`: Retrieve a list of popular TV series.
- `GET /tv/topRated`: Retrieve a list of top-rated TV series.
- `GET /tv/genres`: Retrieve a list of TV series genres.
- `GET /tv/genre/:id`: Retrieve TV series belonging to a specific genre.
- `GET /tv/similar/:id`: Retrieve a list of TV series similar to a given TV series.
- `GET /tv/search`: Search for TV series based on a keyword.
- `GET /tv/videos/:id`: Retrieve videos of a specific TV serie

# Getting Started

1. Clone the repository: `git clone https://github.com/Nievas1000/API-NETFLIXAPP-EXPRESS`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

To use this API you will need a "themoviedb" api key and you can get it here [THEMOVIEDB](https://developers.themoviedb.org/3/getting-started/introduction) and after that create a .env file with that key
