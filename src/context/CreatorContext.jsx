import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

import { categories, top_creators } from '../assets/constants';

export const CreatorContext = createContext();

const CreatorContextProvider = ({ children }) => {
  const [selectedCreator, setSelectedCreator] = useState(null);
  const [selectedNFT, setSelectedNFT] = useState(null);

  const value = {
    top_creators,
    categories,
    selectedCreator,
    setSelectedCreator,
    selectedNFT,
    setSelectedNFT,
  };

  return (
    <CreatorContext.Provider value={value}>{children}</CreatorContext.Provider>
  );
};

CreatorContextProvider.propTypes = {
  children: PropTypes.node,
};

export default CreatorContextProvider;
