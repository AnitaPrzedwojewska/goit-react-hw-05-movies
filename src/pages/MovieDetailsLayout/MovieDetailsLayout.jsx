import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from "react-router-dom";

import { Back } from '../../components/Back/Back';
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { MovieDetailsCard } from '../../components/MovieDetailsCard/MovieDetailsCard';

import { fetchMovieDetails} from "../../api/api_tmdb";

export const MovieDetailsLayout = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLink = location.state?.from ?? "/movies";

  useEffect(
    () => {
      if (!movieId) return;
      fetchMovieDetails(movieId)
        .then(setMovieDetails)
        .catch(setError)
    },
    [movieId]
  );

  const { poster_path, title, genres, overview, vote_average, release_date } = movieDetails;

  return (
    <main>
      <Back to={backLink}>Back to list of movies</Back>
      <PageHeader>
        <h2>Movie details</h2>
      </PageHeader>
      {error && <p>{error.message}</p>}
      {movieDetails && (
        <>
          <MovieDetailsCard
            poster_path={poster_path}
            title={title}
            genres={genres}
            overview={overview}
            vote_average={vote_average}
            release_date={release_date}
          />
        </>
      )}
      <Outlet />
    </main>
  );
};