import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { ImArrowLeft2 } from "react-icons/im";

import { useIsBack } from "../../context/useIsBack";

export const Back = ({ to, children }) => {

  const { onBack } = useIsBack();

  return (
    <Link to={to} onClick={onBack}>
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