import { NavLink, useLocation } from 'react-router-dom';
import css from './SearchMovies.module.css';

const SearchMovies = ({ films }) => {
  const location = useLocation();

  return (
    <>
      <ul className={css.searchingFilms}>
        {films.map(film => (
          <li className={css.searchingFilmsList} key={film.id}>
            <NavLink
              to={`${film.id}`}
              className={css.searchingFilmsLink}
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

export default SearchMovies;
