import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import { Loader } from "./components/Loader/Loader";
import { HomeLayout } from "./pages/HomeLayout/HomeLayout";
import { SharedLayout } from "./pages/SharedLayout/SharedLayout";
// import { MoviesLayout } from "./pages/MoviesLayout/MoviesLayout";
// import { MovieDetailsLayout } from "./pages/MovieDetailsLayout/MovieDetailsLayout";
// import { Cast } from "./components/Cast/Cast";
// import { Reviews } from "./components/Reviews/Reviews";
const MoviesLayout = lazy(() =>
  import("./pages/MoviesLayout/MoviesLayout").then((module) => {
    return { default: module.MoviesLayout };
  })
);
const MovieDetailsLayout = lazy(() =>
  import("./pages/MovieDetailsLayout/MovieDetailsLayout").then((module) => {
    return { default: module.MovieDetailsLayout };
  })
);
const Cast = lazy(() =>
  import("./components/Cast/Cast").then((module) => {
    return { default: module.Cast };
  })
);
const Reviews = lazy(() =>
  import("./components/Reviews/Reviews").then((module) => {
    return { default: module.Reviews };
  })
);

function App() {
  return (
    <div className={css.container}>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomeLayout />} />

          <Route
            path='/movies'
            element={
              <Suspense fallback={<Loader />}>
                <MoviesLayout />
              </Suspense>
            }
          />
          <Route
            path='/movies/:movieId'
            element={
              <Suspense fallback={<Loader />}>
                <MovieDetailsLayout />
              </Suspense>
            }>
            <Route
              path='cast'
              element={
                <Suspense fallback={<Loader />}>
                  <Cast />
                </Suspense>
              }
            />
            <Route
              path='reviews'
              element={
                <Suspense fallback={<Loader />}>
                  <Reviews />
                </Suspense>
              }
            />
          </Route>

          <Route path='*' element={<HomeLayout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
