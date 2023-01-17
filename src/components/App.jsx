import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieInfo from './MovieInfo';
import Cast from './Cast';
import Reviews from './Reviews';
import AppBar from './AppBar';

export const App = () => {
  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:filmId" element={<MovieInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" />
      </Routes>
    </div>
  );
};
