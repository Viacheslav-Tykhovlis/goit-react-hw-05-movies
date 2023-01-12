import { useEffect, useState } from 'react';
import css from './SearchBox.module.css';

const SearchBox = ({ getInput }) => {
  const [inputText, setInputText] = useState('');

  const getSubmit = e => {
    e.preventDefault();
    setInputText(e.currentTarget.input.value);
  };

  useEffect(() => {
    getInput(inputText);
  }, [getInput, inputText]);

  return (
    <form onSubmit={getSubmit}>
      <input type="text" className={css.input} name="input"></input>
      <button type="submit" className={css.button}>
        Search films
      </button>
    </form>
  );
};

export default SearchBox;
