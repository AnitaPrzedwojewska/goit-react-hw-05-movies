import css from './Input.module.css';
import PropTypes from 'prop-types';

export const Input = ({type, id, placeholder, children}) => {
  return (
    <input className={css.input} type={type} id={id} placeholder={placeholder}>
      {children}
    </input>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.node,
};