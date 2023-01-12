import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import SearchMovies from './SearchMovies';
import MovieInfo from './MovieInfo';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}>
            <Route index element={<SearchMovies />}></Route>
            <Route path=":filmId" element={<MovieInfo />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

// c3e84704be1d961c1bbe01bb4ff0b43a

// - /  - Layout
// -      - Home
//          - MovieInfo
//            - Gast
//            - Reviews
//        - Movies
//          - MovieInfo
//            - Gast
//            - Reviews
