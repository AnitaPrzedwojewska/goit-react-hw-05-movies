import PropTypes from 'prop-types';
import css from './MovieDetailsCard.module.css';
import { POSTER_BASE_URL } from "../../api/api_tmdb";
import noPoster from "../../assets/no-poster-available.jpg";

export const MovieDetailsCard = ({
  poster_path,
  title,
  genres,
  overview,
  vote_average,
  release_date,
}) => {
  // if (genres && genres.length() > 0)
  //   genresList = genres.map(({ name }) => name).join(", ");
  const poster = poster_path
    ? `${POSTER_BASE_URL}${poster_path}`
    : `${noPoster}`;
  return (
    <div className={css.detailsCard}>
      <div className={css.poster}>
        <img src={poster} />
      </div>
      <div className={css.details}>
        <h3>{title}</h3>
        <div>
          <p>{genres}</p>
        </div>
        <div>
          <p className={css.label}>Overview</p>
          <p>{overview}</p>
        </div>
        <div>
          <p className={css.label}>Release date</p>
          <p>{release_date}</p>
        </div>
        <div>
          <p className={css.label}>Average rating</p>
          <p>{vote_average} / 10</p>
        </div>
      </div>
    </div>
  );
};

MovieDetailsCard.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  genres: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string
};