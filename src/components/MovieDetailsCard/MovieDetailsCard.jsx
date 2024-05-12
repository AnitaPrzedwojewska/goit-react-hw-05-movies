import { useParams, NavLink } from 'react-router-dom';
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
  const { movieId } = useParams();

  const poster = poster_path
    ? `${POSTER_BASE_URL}${poster_path}`
    : `${noPoster}`;

  console.log("typeof(genres): ", typeof genres);
  const genresList = (genres && genres.length > 0) ? genres.map(({ name }) => name).join(", ") : "";

  return (
    <div className={css.detailsCard}>
      <div className={css.poster}>
        <img src={poster} />
      </div>
      <div className={css.details}>
        <div className={css.info}>
          <h3>{title}</h3>
          {genresList && (
            <div>
              <p>{genresList}</p>
            </div>
          )}
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
        <div className={css.links}>
          <NavLink className={css.navLink} to={`/movies/${movieId}/cast`}>
            Cast
          </NavLink>
          <NavLink className={css.navLink} to={`/movies/${movieId}/reviews`}>
            Reviews
          </NavLink>
        </div>
      </div>
    </div>
  );
};

MovieDetailsCard.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
  genres: PropTypes.array,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
  release_date: PropTypes.string
};