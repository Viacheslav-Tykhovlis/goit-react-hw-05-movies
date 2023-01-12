import { useEffect, useState } from 'react';
import { NavLink, useSearchParams, useLocation } from 'react-router-dom';
import { getFilms } from './API';
import SearchBox from './SearchBox';
import css from './SearchMovies.module.css';

const SearchMovies = () => {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();

  const getInputText = input => {
    setSearch(input);
  };

  useEffect(() => {
    if (!search) {
      return;
    }
    getFilms(search).then(result => setFilms(result.data.results));
    setSearchParams({ filter: search });
  }, [search, setSearchParams]);

  return (
    <>
      <SearchBox getInput={getInputText} />
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
