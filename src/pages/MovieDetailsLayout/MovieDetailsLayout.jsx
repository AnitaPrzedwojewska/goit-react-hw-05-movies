import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails} from "../../api/api_tmdb";
import { ImArrowLeft2 } from "react-icons/im";
import { PageHeader } from '../../components/PageHeader/PageHeader';
import { MovieDetailsCard } from '../../components/MovieDetailsCard/MovieDetailsCard';
// import { Back } from '../../components/Back/Back';

export const MovieDetailsLayout = () => {
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  const backLink = location.state?.from ?? "/movies";

  useEffect(
    () => {
      console.log("useEffect starts...");
      console.log("movieId: ",movieId);
      if (!movieId) return;
      fetchMovieDetails(movieId)
        // .then(setMovieDetails)
        .then((results) => {
          console.log("useEffect - fetchMovieDeatails - results: ", results);
          setMovieDetails(results);
        })
        .catch((error) => {
          console.log("useEffect - fetchMovieDeatails - error: ", error);
          setError(error)
        });
    },
    [movieId]
  );

  const { poster_path, title, overview, vote_average, release_date } = movieDetails;
  let genresList = "";
  // if (genres && genres.length() > 0)
  //   genresList = genres.map(({ name }) => name).join(", ");


  return (
    <main>
      {console.log("MovieDetailsLayout - movieDetails: ", movieDetails)}
      {/* <Back to={backLink}>Back to list of movies</Back> */}
      <Link to={backLink}>
        <ImArrowLeft2 />
        {"   "}
        Back to list of movies
      </Link>
      <PageHeader>
        <h2>Movie details</h2>
      </PageHeader>
      {error && <p>{error.message}</p>}
      {movieDetails && (
        <>
          <MovieDetailsCard
            poster_path={poster_path}
            title={title}
            genres={genresList}
            overview={overview}
            vote_average={vote_average}
            release_date={release_date}
          />
          <div>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </div>
        </>
      )}
      <Outlet />
    </main>
  );
};