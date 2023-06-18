import { Routes, Route, Link } from 'react-router-dom';
import Home from './home/Home';
import Movies from './movies/Movies';
import MovieDetails from './movieDetails/MovieDetails';
import Cast from './cast/Cast';
import Reviews from './reviews/Reviews';

export const App = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies:movieid" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
};
