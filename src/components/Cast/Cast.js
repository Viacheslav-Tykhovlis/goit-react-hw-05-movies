import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastFilm } from '../API';
import defaultImage from '../../images/notFound.png';
import css from './Cast.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w300';

const Cast = () => {
  const { filmId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastFilm(filmId).then(rest => setCast(rest.data.cast));
  }, [filmId]);

  const isNotImage = path => {
    if (!path) {
      return null;
    }
    return `${BASE_URL + path}`;
  };

  return (
    <div>
      <ul>
        {cast.map(one => (
          <li className={css.cast} key={one.id}>
            <img
              src={isNotImage(one.profile_path) || defaultImage}
              width="220px"
              alt={one.name}
              aria-label={one.name}
              className={css.castImg}
            />
            <div>
              <p>Name: {one.name}</p>
              <p>Character: {one.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
