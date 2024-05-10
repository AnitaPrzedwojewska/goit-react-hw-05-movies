import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={css.navList}>
      <NavLink className={css.navItem} to='/' end>
        Home
      </NavLink>
      <NavLink className={css.navItem} to='/movies'>
        Movies
      </NavLink>
    </nav>
  );
};
