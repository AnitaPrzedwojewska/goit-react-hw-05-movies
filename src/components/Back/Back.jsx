import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { ImArrowLeft2 } from "react-icons/im";

export const Back = ({ to, children }) => {

  return (
    <Link to={to}>
      <ImArrowLeft2 />
      {"   "}
      {children}
    </Link>
  );
};

Back.propTypes = {
  to: PropTypes.object,
  children: PropTypes.node
}