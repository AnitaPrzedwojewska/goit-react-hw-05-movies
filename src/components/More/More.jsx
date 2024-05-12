import css from './More.module.css';
import PropTypes from 'prop-types';

export const More = ({ onClick }) => {
  return (
    <>
      <button className={css.more} onClick={onClick}>
        Load more
      </button>
    </>
  );
}

More.propTypes = {
  onClick: PropTypes.func.isRequired,
};
