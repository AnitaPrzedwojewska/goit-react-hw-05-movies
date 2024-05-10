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
        <p>{genresList}</p>
        <p>{overview}</p>
        <p>{release_date}</p>
        <p>{vote_average && Math.floor(vote_average * 10)}</p>
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