import css from './Movies.module.css';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MovieCard } from '../MovieCard/MovieCard';

export const Movies = ({ movies }) => {
  const location = useLocation();
  console.log('Movies - movies: ', movies);
  return (
    <div className={css.movGallery}>
      {movies.map(({ id, poster_path, title, vote_average }) => (
        <MovieCard
          key={id}
          id={id}
          poster_path={poster_path}
          title={title}
          vote_average={vote_average}
          state={{ from: location }}
        ></MovieCard>
      ))}
    </div>
  );
}

Movies.propTypes = {
  movies: PropTypes.array
}