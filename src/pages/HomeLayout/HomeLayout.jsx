import { useState } from "react";
import { useEffect } from "react";
import { fetchTrendingMovies } from "../../api/api_tmdb";
import { PageHeader } from "../../components/PageHeader/PageHeader";
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
      <PageHeader>
        <h2>Trending movies</h2>
      </PageHeader>
      <Movies movies={movies} />
    </main>
  );
};
