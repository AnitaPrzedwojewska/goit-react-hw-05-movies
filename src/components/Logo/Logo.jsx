import css from './Logo.module.css';
import iconLogo from '/film-movie.svg';

export const Logo = () => {
  return (
    <div className={css.logoName}>
      <img className={css.logo} src={iconLogo} /><span className={css.name}>Movies</span>
    </div>
  );
}