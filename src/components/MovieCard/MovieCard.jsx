import { Link } from 'react-router-dom';
// import { useLocation } from "react-router-dom";
import css from './MovieCard.module.css';
import PropTypes from 'prop-types';

const POSTERS_URL = "https://image.tmdb.org/t/p/original/";

export const MovieCard = ({ id, poster_path, title, vote_average, state }) => {
  const poster = `${POSTERS_URL}${poster_path}`;
  console.log('MovieCard - state: ', state);
  return (
    <div className={css.card} key={id}>
      <Link to={`/movies/${id}`} state={state}>
        <div className={css.poster}>
          <img src={poster} alt='Poster of film: ${title}' />
        </div>
        <div className={css.info}>
          <p className={css.title}>{title}</p>
        </div>
        <div className={css.vote}>{vote_average}</div>
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