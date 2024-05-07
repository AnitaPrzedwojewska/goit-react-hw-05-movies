import css from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={css.naviList}>
      <li className={css.naviItem}>Home</li>
      <li className={css.naviItem}>Movies</li>
      <li className={css.naviItem}>About</li>
    </nav>
  );
}