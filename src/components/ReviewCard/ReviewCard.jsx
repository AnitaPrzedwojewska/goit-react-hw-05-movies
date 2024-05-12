import PropTypes from "prop-types";
import css from "./ReviewCard.module.css";

export const ReviewCard = ({ author, created_at, content }) => {
  return (
    <>
      <div className={css.card}>
        <h3>{author}</h3>
        <p>{created_at}</p>
        <p>{content}</p>
      </div>
    </>
  );
};

ReviewCard.propTypes = {
  author: PropTypes.string,
  created_at: PropTypes.string,
  content: PropTypes.string
};
