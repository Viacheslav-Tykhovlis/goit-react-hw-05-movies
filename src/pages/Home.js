import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { getTrendFilms } from '../components/API';
import css from './Home.module.css';

const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendFilms().then(result => {
      setTrendFilms(result.data.results);
    });
  }, []);

  return (
    <>
      <h2 className={css.homeTitle}>Trending today</h2>
      <ul className={css.trendingFilms}>
        {trendFilms.map(film => (
          <li className={css.trendingFilmsList} key={film.id}>
            <NavLink
              to={`/movies/${film.id}`}
              className={css.trendingFilmsLink}
              state={{ from: location }}
            >
              {film.title || film.original_title || film.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
