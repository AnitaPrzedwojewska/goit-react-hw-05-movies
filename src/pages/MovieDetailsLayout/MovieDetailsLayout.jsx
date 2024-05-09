import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation, Link } from "react-router-dom";
import { fetchMovieDetails } from "../../api/api_tmdb";

export const MovieDetailsLayout = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/movies";

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(({ results }) => {
        console.log("movie details - movie: ", results);
        setMovieDetails(results);
      });
    }, [movieId]
  );

  // const { poster_path, title, genres, overview, vote_average, release_date } = moviesDetails;
  const movie = movieDetails;

  return (
    <main>
      <Link to={backLinkHref}>Back</Link>
      <h3>Movie details - {movieId}</h3>
      {movieDetails && (<div>
        <p>Movie</p>
        {movie}
      </div>)}
      <div>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </div>
      <Outlet />
    </main>
  );
};