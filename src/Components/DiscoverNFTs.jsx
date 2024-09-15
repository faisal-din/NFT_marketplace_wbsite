import { NavLink } from 'react-router-dom';
import { assets } from '../assets/constants';
import SingleNFT from './SingleNFT';
import { useContext } from 'react';
import { CreatorContext } from '../context/CreatorContext';

const DiscoverNFTs = () => {
  const { top_creators } = useContext(CreatorContext);

  return (
    <div className="max-container">
      {/* Headline */}
      <div className=" flex flex-col sm:flex-row justify-between items-center  sm:gap-24">
        <div className="w-full">
          <h3 className="text-3xl lg:text-[38px] font-semibold">
            Discover More NFTs
          </h3>
          <p className="text-lg md:text-[22px] leading-loose">
            Explore new trending NFTs
          </p>
        </div>

        {/* Button is hidden on mobile and flex on md+ */}
        <div className="hidden sm:flex">
          <NavLink to="/marketplace">
            <button
              onClick={() => {
                scrollTo(0, 0);
              }}
              className=" nav-button scale-animation border-2 bg-transparent border-cta w-full sm:w-52 px-6 py-3 mt-3"
            >
              <img src={assets.eye_icon} alt="rocket" width={20} height={20} />
              <p>See All</p>
            </button>
          </NavLink>
        </div>
      </div>

      {/* NFTs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {top_creators.slice(0, 3).map((nft, idx) => (
          <SingleNFT nft={nft} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default DiscoverNFTs;
