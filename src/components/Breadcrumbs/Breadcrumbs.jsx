import { Link, useLocation } from "react-router-dom";
import css from "./Breadcrumbs.module.css";

export const Breadcrumbs = () => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `\${crumb}`;
      return (
        <div className={css.crumb} key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    });

  return (
    <>
      <div className={css.breadcrumbs}>{crumbs}</div>
    </>
  );
};
