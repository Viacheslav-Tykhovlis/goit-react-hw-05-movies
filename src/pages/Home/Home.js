import { useEffect, useState } from 'react';
import { getTrendFilms } from '../../components/API';
import ListMovies from 'components/ListMovies/ListMovies';
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
      <ListMovies films={trendFilms} />
    </>
  );
};

export default Home;
