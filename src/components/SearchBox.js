import css from './SearchBox.module.css';

const SearchBox = ({ onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className={css.input}
        name="input"
        onChange={onChange}
      ></input>
      <button type="submit" className={css.button}>
        Search films
      </button>
    </form>
  );
};

export default SearchBox;
