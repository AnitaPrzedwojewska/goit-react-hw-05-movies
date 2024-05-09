import { useState } from "react";
import { useEffect } from "react";
import { fetchTrendingMovies } from "../../api/api_tmdb";
import { Movies } from "../../components/Movies/Movies";

export const HomeLayout = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(({ results }) => {
        setMovies(results);
      })
      .catch(() => { throw new Error("Something's gone wrong");});
  }, []);

  return (
    <main>
      <h2>Trending movies</h2>
      <Movies movies={movies} />
    </main>
  );
};
