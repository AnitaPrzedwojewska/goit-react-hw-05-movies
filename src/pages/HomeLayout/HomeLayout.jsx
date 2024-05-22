import { useState, useEffect, Suspense } from "react";

import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Loader } from '../../../../../My-projects/zawody-pzlam/src/components/Loader/Loader';
import { Movies } from "../../components/Movies/Movies";

import { fetchTrendingMovies } from "../../api/api_tmdb";

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
      <Suspense fallback={<Loader />}>
        <Movies movies={movies} />
      </Suspense>
    </main>
  );
};
