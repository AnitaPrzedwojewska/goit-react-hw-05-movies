import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../api/api_tmdb";
import { PageHeader } from '../PageHeader/PageHeader';
import { ActorCard } from "./ActorCard/ActorCard";
import css from "./Cast.module.css";

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    // console.log("useEffect for fetchMovieCast starts...");
    // console.log("movieId: ", movieId);
    if (!movieId) return;
    fetchMovieCast(movieId)
      .then(setCast)
      // .then((results) =>
      .catch(setError);
    // .catch((error) => {
    //   console.log('useEffect - error: ', error);
    //   setError(error);
    // })
  }, [movieId]);

  return (
    <>
      <PageHeader>
        <h2>Cast</h2>
      </PageHeader>
      <div className={css.castGallery}>
        {error && <p>{error.mesage}</p>}
        {cast.length > 0 ? (
          cast.map(({ id, profile_path, name, character }) => (
            <ActorCard
              key={id}
              profile_path={profile_path}
              name={name}
              character={character}
            />
          ))
        ) : (
          <p>No information about the cast</p>
        )}
      </div>
    </>
  );
};
