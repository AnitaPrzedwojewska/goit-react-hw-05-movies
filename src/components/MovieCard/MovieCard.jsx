import css from './MovieCard.module.css';
import PropTypes from 'prop-types';

const POSTERS_URL = "https://image.tmdb.org/t/p/original/";

export const MovieCard = ({ id, poster_path, title, vote_average }) => {
  const poster = `${POSTERS_URL}${poster_path}`;
  return (
    <div className={css.card} id={id}>
      <div className={css.poster}>
        <img src={poster} alt='Poster of film: ${title}' />
      </div>
      <div className={css.info}>
        <p className={css.title}>{title}</p>
      </div>
      <div className={css.vote}>{vote_average}</div>
    </div>
  );
};

MovieCard.propTypes = {
  id: PropTypes.number,
  poster_path: PropTypes.string,
  title: PropTypes.string,
  vote_average: PropTypes.string,
};