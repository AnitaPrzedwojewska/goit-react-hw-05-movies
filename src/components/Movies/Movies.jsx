import css from './Movies.module.css';
import PropTypes from 'prop-types';
import { MovieCard } from '../MovieCard/MovieCard';

export const Movies = ({ movies }) => {
  console.log('Movies - movies: ', movies);
  return (
    <div className={css.movGallery}>
      {movies.map(({ id, poster_path, title, vote_average }) => <MovieCard key={id} id={id} poster_path={poster_path} title={title} vote_average={vote_average}></MovieCard>)}
    </div>
  )
}

Movies.propTypes = {
  movies: PropTypes.array
}