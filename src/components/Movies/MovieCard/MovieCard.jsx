import { Link } from 'react-router-dom';
// import { useLocation } from "react-router-dom";
import css from './MovieCard.module.css';
import PropTypes from 'prop-types';
import noPoster from "../../../assets/no-poster-available.jpg";

const POSTERS_URL = "https://image.tmdb.org/t/p/original/";

export const MovieCard = ({ id, poster_path, title, state }) => {
  const poster = poster_path ? `${POSTERS_URL}${poster_path}` : `${noPoster}`;
  return (
    <div className={css.card} key={id}>
      <Link to={`/movies/${id}`} state={state}>
        <div className={css.poster}>
          <img src={poster} alt='Poster of film: ${title}' />
        </div>
        <div className={css.info}>
          <p className={css.title}>{title}</p>
        </div>
      </Link>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.number,
  state: PropTypes.object
};