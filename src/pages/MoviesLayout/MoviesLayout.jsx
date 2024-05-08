import { useState } from "react";
import { useEffect } from "react";
import { fetchSearchedMovies } from "../../api/api_tmdb";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Loader } from "../../components/Loader/Loader";
import { Movies } from "../../components/Movies/Movies";

export const MoviesLayout = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchQuery = (query) => {
    setQuery(query);
  };

  useEffect(
    () => {
      setLoading(true);
      fetchSearchedMovies(query, 1)
      .then(({ results }) => {
        setMovies(results);
      })
      .finally(() => {
        setLoading(false);
      });
    }, [query]
  );

  return (
    <>
      <h2>Movies</h2>
      <SearchForm onSubmit={handleSearchQuery} />
      {loading && <Loader />}
      {query && <Movies movies={movies} />}
      <Outlet />
    </>
  );
};
