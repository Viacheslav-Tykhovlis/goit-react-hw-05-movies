import { useState } from 'react';

import css from './SearchBox.module.css';

const SearchBox = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className={css.input}
        name="input"
        onChange={handleChange}
      ></input>
      <button type="submit" className={css.button}>
        Search films
      </button>
    </form>
  );
};

export default SearchBox;
