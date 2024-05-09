import { useState } from "react";
import { useEffect } from "react";
import { fetchSearchedMovies } from "../../api/api_tmdb";
import { Outlet } from "react-router-dom";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Movies } from "../../components/Movies/Movies";

export const MoviesLayout = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearchQuery = (query) => {
    setQuery(query);
  };

  useEffect(
    () => {
      fetchSearchedMovies(query, 1)
      .then(({ results }) => {
        setMovies(results);
      });
    }, [query]
  );

  return (
    <main>
      <h2>Movies</h2>
      <SearchForm onSubmit={handleSearchQuery} />
      {query && <Movies movies={movies} />}
      <Outlet />
    </main>
  );
};
