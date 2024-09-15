import { assets } from '../assets/constants';
import CreatorCard from './CreatorCard';

import { useContext } from 'react';
import { CreatorContext } from '../context/CreatorContext';
import { NavLink } from 'react-router-dom';

const TopCreators = () => {
  const { top_creators } = useContext(CreatorContext);

  return (
    <div className="max-container">
      <div className="container mx-auto px-4">
        {/* Headline */}

        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-24">
          <div>
            <h3 className="text-3xl md:text-[38px] font-semibold ">
              Top Creators
            </h3>
            <p className="text-lg md:text-[22px] leading-loose">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>

          <NavLink to="/rankings">
            <button
              onClick={() => {
                scrollTo(0, 0);
              }}
              className="nav-button scale-animation border-2 bg-transparent border-cta w-full sm:w-52  px-6 py-3 mt-3    "
            >
              <img src={assets.rocket} alt="" width={20} height={20} />
              <p>Rankings</p>
            </button>
          </NavLink>
        </div>

        {/* Top creators */}

        <NavLink to="/artist">
          <div
            onClick={() => {
              scrollTo(0, 0);
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10"
          >
            {top_creators.slice(0, 12).map((creator, index) => (
              <CreatorCard key={index} creator={creator} />
            ))}
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default TopCreators;
