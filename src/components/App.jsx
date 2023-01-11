import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieInfo from './MovieInfo';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />}></Route>
          <Route path="movies" element={<Movies />}>
            <Route path=":filmId" element={<MovieInfo />}></Route>
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
