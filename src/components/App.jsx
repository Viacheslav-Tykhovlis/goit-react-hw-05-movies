import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies';
import MovieInfo from './MovieInfo/MovieInfo';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import AppBar from './AppBar/AppBar';

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
