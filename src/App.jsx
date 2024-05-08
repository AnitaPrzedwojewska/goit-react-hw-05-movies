// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { HomeLayout } from "./pages/HomeLayout/HomeLayout";
import { MoviesLayout } from './pages/MoviesLayout/MoviesLayout';
import { MovieDetailsLayout } from "./pages/MovieDetailsLayout/MovieDetailsLayout";
import { CastLayout } from "./pages/CastLayout/CastLayout";
import { ReviewsLayout } from "./pages/ReviewsLayout/ReviewsLayout";
import { AboutLayout } from "./pages/AboutLayout/AboutLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<HomeLayout />} />
          <Route path='/movies' element={<MoviesLayout />}>
            <Route path=':movieId' element={<MovieDetailsLayout />}>
              <Route path='cast' element={<CastLayout />} />
              <Route path='reviews' element={<ReviewsLayout />} />
            </Route>
          </Route>
          <Route path='/about' element={<AboutLayout />} />
          <Route path='*' element={<HomeLayout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App
