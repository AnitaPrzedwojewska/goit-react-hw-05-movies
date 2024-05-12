import PropTypes from "prop-types";
import css from "./ReviewCard.module.css";

export const ReviewCard = ({ author, created_at, content }) => {
  return (
    <>
      <div className={css.card}>
        <p className={css.author}>{author}</p>
        <p className={css.content}>{content}</p>
        <p className={css.date}>{created_at.substr(0,10)}</p>
      </div>
    </>
  );
};

ReviewCard.propTypes = {
  author: PropTypes.string,
  created_at: PropTypes.string,
  content: PropTypes.string
};
