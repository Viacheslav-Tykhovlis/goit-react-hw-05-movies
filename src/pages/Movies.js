import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFilms } from 'components/API';
import SearchBox from 'components/SearchBox/SearchBox';
import ListMovies from 'components/ListMovies/ListMovies';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilms = searchParams.get('search');

  const handleSubmit = text => {
    setSearchParams({ search: text });
  };

  useEffect(() => {
    if (!searchFilms) {
      return;
    }
    getFilms(searchFilms).then(res => setFilms(res.data.results));
  }, [searchFilms]);

  return (
    <>
      <SearchBox onSubmit={handleSubmit} />
      <ListMovies films={films} />
    </>
  );
};

export default Movies;
