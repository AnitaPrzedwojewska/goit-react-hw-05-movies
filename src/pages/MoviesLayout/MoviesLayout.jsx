import { useState, useEffect } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { fetchSearchedMovies } from "../../api/api_tmdb";
import { PageHeader } from "../../components/PageHeader/PageHeader";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Movies } from "../../components/Movies/Movies";

export const MoviesLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const query = searchParams.get("query") ?? "";

  const handleSearchQuery = (query) => {
     const newQuery = query !== "" ? { query } : {};
     setSearchParams(newQuery);
  };

  useEffect(
    () => {
      fetchSearchedMovies(query, 1)
        .then(({ results }) => {
          setMovies(results);
        })
        .catch((error) => setError(error));
    }, [query]
  );

  return (
    <main>
      <PageHeader>
        <SearchForm value={query} onSubmit={handleSearchQuery} />
      </PageHeader>
      {error && <p>{error.message}</p>}
      {query && <Movies movies={movies} />}
      <Outlet />
    </main>
  );
};
