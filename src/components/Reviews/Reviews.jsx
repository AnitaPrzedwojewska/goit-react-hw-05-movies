import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import css from "./Reviews.module.css";
import { PageHeader } from '../PageHeader/PageHeader';
import { ReviewCard } from "./ReviewCard/ReviewCard";
import { More } from '../More/More';

import { fetchMovieReviews } from "../../api/api_tmdb";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    fetchMovieReviews(movieId,page)
      .then(({ results, total_pages }) => {
        setReviews(results);
        setMore(total_pages > page);
      })
      .catch(setError);
  }, [movieId, page]);

  const handleClickMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <PageHeader>
        <h2>Reviews</h2>
      </PageHeader>
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
        {more && <More onClick={handleClickMore} />}
      </div>
    </>
  );
};