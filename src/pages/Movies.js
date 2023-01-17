import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilms } from 'components/API';
import SearchBox from 'components/SearchBox';
import SearchMovies from 'components/SearchMovies';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams({ search });
  };

  useEffect(() => {
    const search = searchParams.get('search');
    if (!search) {
      return;
    }
    getFilms(search).then(res => setFilms(res.data.results));
  }, [search, searchParams]);

  return (
    <>
      <SearchBox onChange={handleChange} onSubmit={handleSubmit} />
      <SearchMovies films={films} />
    </>
  );
};

export default Movies;
