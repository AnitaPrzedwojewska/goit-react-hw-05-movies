import { PropTypes } from 'prop-types';
import css from './MovieDetailsCard.module.css';
import { POSTER_BASE_URL, GENRES_LIST } from "../../api/api_tmdb";

const getGenres = (genreIds) => {
  const genres = genreIds.map((genreId) => {
    const foundGenre = GENRES_LIST.find((genre) => genre.id === genreId);
    return foundGenre ? foundGenre.name : "";
  });
  return genres.join(", ");
};

export const MovieDetailsCard = ({
  poster_path,
  title,
  genres,
  overview,
  vote_average,
  release_date,
}) => {
  const genresList = getGenres(genres);

  return (
    <div className={css.detailsCard}>
      <div>
        <img src={`${POSTER_BASE_URL}\\${poster_path}`} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{release_date.substr(0, 4)}</p>
        <p>{genresList}</p>
        <h4>Overview</h4>
        <p>{overview}</p>
        <h4>Average rating</h4>
        <p>{vote_average.toFixed(1)} / 10</p>
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