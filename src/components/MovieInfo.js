import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmInfo } from './API';
import css from './MovieInfo.module.css';

const MovieInfo = () => {
  const { filmId } = useParams(null);
  const [film, setFilm] = useState({});

  useEffect(() => {
    getFilmInfo(filmId).then(result => {
      setFilm(result.data);
      console.log(result.data);
    });
  }, [filmId]);

  if (!filmId) {
    return;
  }

  const BASE_URL = 'https://image.tmdb.org/t/p/w300';

  const {
    poster_path,
    title,
    name,
    original_title,
    vote_average,
    overview,
    // genres,
  } = film;
  return (
    <>
      <button type="button" className={css.btnBack}>
        Go back
      </button>
      <div className={css.filmInfo}>
        <img
          src={`${BASE_URL + poster_path}`}
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
          {/* <p>{genres.map(genr => genr.name).join(', ')}</p> */}
        </div>
      </div>
    </>
  );
};

export default MovieInfo;
