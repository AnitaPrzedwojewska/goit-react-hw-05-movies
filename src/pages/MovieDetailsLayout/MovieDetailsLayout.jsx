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

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(({ results }) => {
        console.log("movie details - movie: ", results);
        setMovieDetails(results);
      })
      .catch((error) => setError(error));
  }, []);

  const { poster_path, title, genres, overview, vote_average, release_date } = movieDetails;
  console.log('movieDetails: ', movieDetails);

  return (
    <main>
      <Link to={backLink}>
        <ImArrowLeft2 />
        {"   "}
        Back to list of movies
      </Link>
      <PageHeader>
        <h3>Movie details - {movieId} - {title}</h3>
      </PageHeader>
      {error && <p>{error.message}</p>}
      {movieDetails && (
        <MovieDetailsCard poster_path={poster_path} title={title} genres={genres} overview={overview} vote_average={vote_average} release_date={release_date} />
      )}
      <div>
        <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
      </div>
      <Outlet />
    </main>
  );
};

// adult :
// false
// backdrop_path :
// "/5cCfqeUH2f5Gnu7Lh9xepY9TB6x.jpg"
// belongs_to_collection :
// {id: 2980, name: 'Ghostbusters Collection', poster_path: '/sctvCtE1M1rDF4f0W2fMrk2BrGB.jpg', backdrop_path: '/guigdRPHN65fsgZHmvVvBOyiArf.jpg'}
// budget :
// 100000000
// genres :
// (3) [{…}, {…}, {…}]
// homepage :
// "https://www.ghostbusters.com"
// id :
// 967847
// imdb_id :
// "tt21235248"
// origin_country :
// ['US']
// original_language :
// "en"
// original_title :
// "Ghostbusters: Frozen Empire"
// overview
// :
// "The Spengler family returns to where it all started – the iconic New York City firehouse – to team up with the original Ghostbusters, who've developed a top-secret research lab to take busting ghosts to the next level. But when the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second Ice Age."
// popularity
// :
// 919.006
// poster_path
// :
// "/e1J2oNzSBdou01sUvriVuoYp0pJ.jpg"
// production_companies
// :
// (2) [{…}, {…}]
// production_countries
// :
// [{…}]
// release_date
// :
// "2024-03-20"
// revenue
// :
// 195102874
// runtime
// :
// 115
// spoken_languages
// :
// [{…}]
// status
// :
// "Released"
// tagline
// :
// "It'll send a chill down your spine."
// title
// :
// "Ghostbusters: Frozen Empire"
// video
// :
// false
// vote_average
// :
// 6.566
// vote_count
// :
// 507