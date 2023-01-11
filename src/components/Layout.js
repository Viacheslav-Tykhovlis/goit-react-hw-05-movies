import { Outlet } from 'react-router-dom';
import AppBar from './AppBar';
import css from './Layout.module.css';

const Layout = () => {
  return (
    <div className={css.global}>
      <AppBar />
      <Outlet />
    </div>
  );
};

export default Layout;
