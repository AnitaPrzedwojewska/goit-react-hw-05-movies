import { Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();

  return (
    <>
      <h3>Movie details - { movieId}</h3>
      <Outlet />
    </>
  )
}