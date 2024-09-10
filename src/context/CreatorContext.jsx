import { createContext } from 'react';
import PropTypes from 'prop-types';

import { categories, top_creators } from '../assets/constants';

export const CreatorContext = createContext();

const CreatorContextProvider = ({ children }) => {
  const value = {
    top_creators,
    categories,
  };

  return (
    <CreatorContext.Provider value={value}>{children}</CreatorContext.Provider>
  );
};

CreatorContextProvider.propTypes = {
  children: PropTypes.node,
};

export default CreatorContextProvider;
