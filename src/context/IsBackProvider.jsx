import { useState } from "react";
import PropTypes from "prop-types";

import { IsBackContext } from './IsBackContext';

export const IsBackProvider = ({ children }) => {
  const [isBack, setIsBack] = useState(false);

  const onBack = () => {
    setIsBack(true);
  };

  const offBack = () => {
    setIsBack(false);
  };

  return (
    <IsBackContext.Provider value={{ isBack, onBack, offBack }}>
      {children}
    </IsBackContext.Provider>
  );
};

IsBackProvider.propTypes = {
  children: PropTypes.node,
};
