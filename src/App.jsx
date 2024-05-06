// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { Home } from './pages/Home/Home';
import { Movies } from './pages/Movies/Movies';
import { MovieDetails } from './pages/MovieDetails/MovieDetails';
import { Cast } from './pages/Cast/Cast';
import { Reviews } from './pages/Reviews/Reviews';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='/movies' element={<Movies />}>
            <Route path=':movieId' element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews  />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App
