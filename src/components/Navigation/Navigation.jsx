import css from './Navigation.module.css';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className={css.naviList}>
      <Link className={css.naviItem} to="/">Home</Link>
      <Link className={css.naviItem} to="/movies">Movies</Link>
      <Link className={css.naviItem} to="/about">About</Link>
    </nav>
  );
}