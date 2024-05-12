import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "./Reviews.module.css";
import { fetchMovieReviews } from "../../api/api_tmdb";
import { ReviewCard } from "../ReviewCard/ReviewCard";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    console.log("useEffect for fetchMovieReviews starts...");
    // console.log("movieId: ", movieId);
    if (!movieId) return;
    fetchMovieReviews(movieId,1)
      // .then(setReviews)
      .then((results) => {
        console.log('useEffect - results: ', results);
        setReviews(results);
      })

      .catch(setError);
    // .catch((error) => {
    //   console.log('useEffect - error: ', error);
    //   setError(error);
    // })
  }, [movieId]);

  return (
    <>
      <div className={css.reviewsList}>
        {error && <p>{error.mesage}</p>}
        {reviews.length > 0 ? (
          reviews.map(({ id, author, created_at, content }) => (
            <ReviewCard
              key={id}
              author={author}
              created_at={created_at}
              content={content}
            />
          ))
        ) : (
          <p>No information about the cast</p>
        )}
      </div>
    </>
  );
};