import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ type, children }) => {
  return <button className={css.btn} type={type}>{children}</button>;
};

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
}