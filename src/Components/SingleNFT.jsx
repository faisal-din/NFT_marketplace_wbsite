import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CreatorContext } from '../context/CreatorContext';
import PropTypes from 'prop-types';

const SingleNFT = ({ nft }) => {
  const { setSelectedNFT } = useContext(CreatorContext);
  return (
    <div>
      <NavLink to="/nft-page">
        <div
          onClick={() => {
            setSelectedNFT(nft);
            scrollTo(0, 0);
          }}
          className=" max-w-sm mx-auto scale-animation cursor-pointer"
        >
          <img
            src={nft.image}
            alt=""
            className="w-full h-auto object-cover rounded-t-3xl"
          />
          <div className="bg-secondary p-5 sm:p-7 rounded-b-3xl">
            <div className=" mb-6">
              <p className="text-lg sm:text-xl font-semibold">{nft.title}</p>
              <div className="flex items-center mt-2">
                <img
                  src={nft.avatar}
                  alt="Avatar"
                  className="w-6 h-6 rounded-full"
                />
                <p className="text-base pl-3">{nft.name}</p>
              </div>
            </div>
            <div className="flex  justify-between">
              <div>
                <p className="text-sm sm:text-base text-gray-400">Price: </p>
                <p className="text-white text-sm sm:text-lg  font-monospace">
                  {nft.volume}
                </p>
              </div>
              <div>
                <p className="text-sm sm:text-base text-gray-400">
                  Highest Bid:{' '}
                </p>
                <p className="text-white text-sm sm:text-lg font-monospace">
                  {nft.highest_bid}
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </NavLink>
    </div>
  );
};

SingleNFT.propTypes = {
  nft: PropTypes.object,
};

export default SingleNFT;
