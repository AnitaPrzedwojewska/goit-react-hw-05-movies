import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={css.navList}>
      <NavLink className={css.navLink} to='/' end>
        Home
      </NavLink>
      <NavLink className={css.navLink} to='/movies'>
        Movies
      </NavLink>
    </nav>
  );
};
