import { NavLink } from "react-router-dom";
import css from "./Logo.module.css";
import iconLogo from "/film-movie.svg";

export const Logo = () => {
  return (
    <NavLink className={css.logoName} to='/'>
      <img className={css.logo} src={iconLogo} />
      <span className={css.name}>Movies</span>
    </NavLink>
  );
};
