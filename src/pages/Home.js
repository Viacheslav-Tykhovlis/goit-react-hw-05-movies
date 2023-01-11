import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getTrendFilms } from '../components/API';
import css from './Home.module.css';

const Home = () => {
  const [trendFilms, setTrendFilms] = useState([]);

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
