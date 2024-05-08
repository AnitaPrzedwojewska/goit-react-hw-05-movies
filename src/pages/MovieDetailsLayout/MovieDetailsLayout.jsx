import { Outlet, useParams } from 'react-router-dom';

export const MovieDetailsLayout = () => {
  const { movieId } = useParams();

  return (
    <>
      <h3>Movie details - {movieId}</h3>
      <Outlet />
    </>
  );
};