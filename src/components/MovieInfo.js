import { useEffect, useState } from 'react';
import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { getFilmInfo } from './API';
import css from './MovieInfo.module.css';

const MovieInfo = () => {
  const { filmId } = useParams();
  const [film, setFilm] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const BASE_URL = 'https://image.tmdb.org/t/p/original';

  const handleGoBack = () => {
    navigate(location.state?.from);
  };

  useEffect(() => {
    const getFilm = async () => {
      await getFilmInfo(filmId).then(result => {
        setFilm(result.data);
      });
    };
    getFilm();
  }, [filmId]);

  if (!filmId) {
    return;
  }
  if (!film) {
    return;
  }
  const {
    poster_path,
    title,
    name,
    original_title,
    vote_average,
    overview,
    genres,
    homepage,
  } = film;

  return (
    <>
      <button type="button" className={css.btnBack} onClick={handleGoBack}>
        Go back
      </button>
      <div className={css.filmInfo}>
        <img
          src={`${BASE_URL + poster_path}`}
          width="220px"
          alt={title}
          aria-label={title}
          className={css.filmImg}
        />
        <div>
          <h1>{title || original_title || name}</h1>
          <p>User score: {Math.round(vote_average * 10)}%</p>
          <h2>Owerview</h2>
          <p className={css.overview}>{overview}</p>
          <h3>Genres</h3>
          <p>{genres ? genres.map(genr => genr.name).join(', ') : ''}</p>
          {homepage && (
            <a href={homepage} className="" target="_blank" rel="noreferrer">
              Homepage
            </a>
          )}
        </div>
      </div>
      <div className={css.addFilmInfo}>
        <p>Additional informatoin</p>
        <ul>
          <li className={css.addInfoList}>
            <NavLink
              to="cast"
              className={css.addInfoLink}
              state={location.state?.from}
            >
              Cast
            </NavLink>
          </li>
          <li className={css.addInfoList}>
            <NavLink
              to="reviews"
              className={css.addInfoLink}
              state={location.state?.from}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};

export default MovieInfo;
