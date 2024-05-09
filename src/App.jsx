// import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import { HomeLayout } from "./pages/HomeLayout/HomeLayout";
import { SharedLayout } from "./pages/SharedLayout/SharedLayout";
import { MoviesLayout } from "./pages/MoviesLayout/MoviesLayout";
import { MovieDetailsLayout } from "./pages/MovieDetailsLayout/MovieDetailsLayout";
import { Cast } from "./components/Cast/Cast";
import { Reviews } from "./components/Reviews/Reviews";
// const MoviesLayout = lazy(() =>
//   import("./pages/MoviesLayout/MoviesLayout"));
// const MovieDetailsLayout = lazy(() =>
//   import("./pages/MovieDetailsLayout/MovieDetailsLayout")
// );
// const Cast = lazy(() =>
//   import("./components/Cast/Cast"));
// const Reviews = lazy(() =>
//   import("./components/Reviews/Reviews"));

function App() {
  return (
    <div className={css.container}>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomeLayout />} />
          <Route path='/movies' element={<MoviesLayout />} />
          <Route path='/movies/:movieId' element={<MovieDetailsLayout />}>
            <Route path='cast' element={<Cast />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='*' element={<HomeLayout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
