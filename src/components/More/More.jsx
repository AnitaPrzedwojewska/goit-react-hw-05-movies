import css from './More.module.css';
import PropTypes from 'prop-types';

export const More = ({ onClick }) => {
  return (
    <div className={css.moreElement}>
      <button className={css.more} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}

More.propTypes = {
  onClick: PropTypes.func.isRequired,
};
