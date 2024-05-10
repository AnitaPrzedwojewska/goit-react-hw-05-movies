import css from './PageHeader.module.css';
import { PropTypes } from 'prop-types';

export const PageHeader = ({ children }) => {
  return (
    <div className={css.header}>
      {children}
    </div>
  )
}

PageHeader.propTypes = {
  children: PropTypes.node,
}