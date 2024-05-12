import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import css from "./Reviews.module.css";
import { fetchMovieReviews } from "../../api/api_tmdb";
import { PageHeader } from '../PageHeader/PageHeader';
import { ReviewCard } from "./ReviewCard/ReviewCard";
import { More } from '../More/More';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);
  const [more, setMore] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    console.log("useEffect for fetchMovieReviews starts...");
    // console.log("movieId: ", movieId);
    if (!movieId) return;
    fetchMovieReviews(movieId,page)
      // .then(setReviews)
      .then((results) => {
        console.log('useEffect - results: ', results.results);
        console.log('useEffect - pages: ', results.total_pages);
        setReviews(results.results);
        setMore(results.total_pages > page);
      })

      .catch(setError);
    // .catch((error) => {
    //   console.log('useEffect - error: ', error);
    //   setError(error);
    // })
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