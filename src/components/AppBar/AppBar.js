import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './AppBar.module.css';

const StyledLink = styled(NavLink)`
  &.active {
    color: rgb(255, 68, 0);
  }
`;

const AppBar = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <StyledLink to="/" className={css.navList}>
          Home
        </StyledLink>
        <StyledLink to="/movies" className={css.navList}>
          Search
        </StyledLink>
      </nav>
      <p className={css.headerText}>Find movie you really want to see</p>
    </header>
  );
};

export default AppBar;
