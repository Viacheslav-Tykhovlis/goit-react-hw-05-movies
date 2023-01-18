import { NavLink, useLocation } from 'react-router-dom';
import css from './ListMovies.module.css';

const ListMovies = ({ films }) => {
  const location = useLocation();

  return (
    <>
      <ul className={css.searchingFilms}>
        {films.map(film => (
          <li className={css.searchingFilmsList} key={film.id}>
            <NavLink
              to={`/movies/${film.id}`}
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

export default ListMovies;
