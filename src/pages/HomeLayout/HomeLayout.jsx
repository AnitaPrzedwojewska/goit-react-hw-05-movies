import { useState, useEffect } from "react";
// import { Suspense } from "react";
import { fetchTrendingMovies } from "../../api/api_tmdb";
import { PageHeader } from "../../components/PageHeader/PageHeader";
// import { Loader } from '../../components/Loader/Loader';
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
      {/* <Suspense fallback={<Loader />}> */}
        <Movies movies={movies} />
      {/* </Suspense> */}
    </main>
  );
};
