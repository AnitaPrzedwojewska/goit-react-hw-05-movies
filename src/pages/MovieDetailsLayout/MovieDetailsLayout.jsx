import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api/api_tmdb";
import { ImArrowLeft2 } from "react-icons/im";
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { MovieDetailsCard } from '../../components/MovieDetailsCard/MovieDetailsCard';

export const MovieDetailsLayout = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLink = location.state?.from ?? "/movies";


  console.log("movieId: ", movieId);
  useEffect(() => {
    fetchMovieDetails(movieId)
      // .then(setMovieDetails)
      .then(({ results }) => {
        console.log("fetchMovieDeatails - results: ", results);
        setMovieDetails(results);
      })
      .catch((error) => setError(error));
  }, []);

    // useEffect(() => {
    //   fetchMovieDetails(movieId)
    //     // .then(setMovieDetails)
    //     .then(({ results }) => {
    //       console.log("fetchMovieDeatails - results: ", results);
    //       setMovieDetails(results);
    //     })
    //     .catch((error) => setError(error));
    // }, [movieId]);

  // const { poster_path, title, genres, overview, vote_average, release_date } = movieDetails;
  // console.log("MovieDetailsLayout - movieDetails: ", movieDetails);

  return (
    <main>
      <Link to={backLink}>
        <ImArrowLeft2 />
        {"   "}
        Back to list of movies
      </Link>
      <PageHeader>
        <h3>
          Movie details - {movieId} - {movieDetails.title}
        </h3>
      </PageHeader>
      {error && <p>{error.message}</p>}
      {/* {movieDetails && <p>Tu powinny być informacje o filmie</p>} */}
      {console.log('movieDetails: ', movieDetails)}
      <MovieDetailsCard
        poster_path={movieDetails.poster_path}
        title={movieDetails.title}
        genres={movieDetails.genres}
        overview={movieDetails.overview}
        vote_average={movieDetails.vote_average}
        release_date={movieDetails.release_date}
      />
      <div>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </div>
      <Outlet />
    </main>
  );
};