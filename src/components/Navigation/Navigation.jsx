import css from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className={css.navList}>
      <NavLink className={css.navItem} to="/" end >Home</NavLink>
      <NavLink className={css.navItem} to="/movies">Movies</NavLink>
      <NavLink className={css.navItem} to="/about">About</NavLink>
    </nav>
  );
}