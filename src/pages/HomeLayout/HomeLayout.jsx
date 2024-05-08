import { useState } from "react";
import { useEffect } from "react";
import { fetchTrendingMovies } from "../../api/api_tmdb";
import { Loader } from "../../components/Loader/Loader";
import { Movies } from "../../components/Movies/Movies";

export const HomeLayout = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchTrendingMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h2>Trending movies</h2>
      {loading && <Loader />}
      <Movies movies={movies} />
    </>
  );
};
