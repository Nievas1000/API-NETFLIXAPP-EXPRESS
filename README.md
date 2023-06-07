# Netflix API

This API is designed to simulate a Netflix-like application, providing various endpoints to retrieve movie and TV series data. Here's an overview of each endpoint:

## Movie Endpoints

- `GET /movie/:id`: Retrieve detailed information about a specific movie by its ID.
- `GET /movie/popular`: Retrieve a list of popular movies.
- `GET /movie/topRated`: Retrieve a list of top-rated movies.
- `GET /movie/upcoming`: Retrieve a list of upcoming movies.
- `GET /movies/genres`: Retrieve a list of movie genres.
- `GET /movies/genre/:id`: Retrieve movies belonging to a specific genre.
- `GET /movie/similar/:id`: Retrieve a list of movies similar to a given movie.
- `GET /movie/search`: Search for movies based on a keyword.

## TV Series Endpoints

- `GET /tv/serie/:id`: Retrieve detailed information about a specific TV series by its ID.
- `GET /tv/popular`: Retrieve a list of popular TV series.
- `GET /tv/topRated`: Retrieve a list of top-rated TV series.
- `GET /tv/genres`: Retrieve a list of TV series genres.
- `GET /tv/genre/:id`: Retrieve TV series belonging to a specific genre.
- `GET /tv/similar/:id`: Retrieve a list of TV series similar to a given TV series.
- `GET /tv/search`: Search for TV series based on a keyword.

# Getting Started

1. Clone the repository: `git clone https://github.com/Nievas1000/API-NETFLIXAPP-EXPRESS`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

To use this API you will need a "themoviedb" api key and you can get it here [THEMOVIEDB](https://developers.themoviedb.org/3/getting-started/introduction) and after that create a .env file with that key
