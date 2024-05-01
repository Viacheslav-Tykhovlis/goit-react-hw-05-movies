import { NavLink, useLocation } from 'react-router-dom';
import css from './ListMovies.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const ListMovies = ({ films }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.searchingFilms}>
        {films.map(film => (
          <li className={css.searchingFilmsList} key={film.id}>
            <NavLink
              to={`/movies/${film.id}`}
              className={css.searchingFilmsLink}
              state={{ from: location }}
            >
              <div className={css.filmImgCont}>
                <img
                  src={`${BASE_URL + film.poster_path}`}
                  alt={film.title}
                  aria-label={film.title}
                  className={css.filmImg}
                />
              </div>
              <div className={css.filmDiscription}>
                <p className={css.filmTitle}>
                  {film.title || film.original_title || film.name}
                </p>
                <p className={css.filmTextRating}>
                  Rating:
                  <br />
                  <span className={css.filmCard__rating}>
                    {film.vote_average.toFixed(1)}
                  </span>
                </p>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListMovies;
