import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { fetchSearchedMovies } from "../../api/api_tmdb";

import { PageHeader } from "../../components/PageHeader/PageHeader";
import { Loader } from "../../components/Loader/Loader";
import { SearchForm } from "../../components/SearchForm/SearchForm";
import { Movies } from "../../components/Movies/Movies";
import { More} from '../../components/More/More'

import { INITIAL_STATE } from "../../constants/initial-movies";

export const MoviesLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(INITIAL_STATE.movies);
  const [page, setPage] = useState(INITIAL_STATE.page);
  const [more, setMore] = useState(INITIAL_STATE.more);
  const [error, setError] = useState(INITIAL_STATE.error);

  const query = searchParams.get("query") ?? "";

  const initialNewQuery = () => {
    setMovies(INITIAL_STATE.movies);
    setPage(INITIAL_STATE.page);
    setMore(INITIAL_STATE.more);
    setError(INITIAL_STATE.error);
  };

  const handleSearchQuery = (query) => {
     const newQuery = query !== "" ? { query } : {};
    setSearchParams(newQuery);
    initialNewQuery();
  };

  useEffect(
    () => {
      fetchSearchedMovies(query, page)
        .then(({ results, total_pages }) => {
          if (results.length === 0) {
            setMore(false);
            setError(`Sorry, there are no movies matching '${query}'. Please try again.`);
            return;
          }
          // if page render after click backlink
          setMovies((prevMovies) => {
            if (prevMovies.length > 0) {
              if (prevMovies[prevMovies.length - 1].id === results[results.length - 1].id) return ([...prevMovies]);
            }
            return ([...prevMovies, ...results])
          });
          setMore(total_pages > page);
        })
        .catch((error) => setError(error.message));
    }, [query, page]
  );

  const handleClickMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <main>
      <PageHeader>
        <SearchForm value={query} onSubmit={handleSearchQuery} />
      </PageHeader>
      <Suspense fallback={<Loader />}>
        {error && <p>{error.message}</p>}
        {query && <Movies movies={movies} />}
        {more && <More onClick={handleClickMore} />}
        <Outlet />
      </Suspense>
    </main>
  );
};
