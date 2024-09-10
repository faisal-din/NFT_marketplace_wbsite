import rocket from '../assets/constants';
import CreatorCard from './CreatorCard';

import { useContext } from 'react';
import { CreatorContext } from '../context/CreatorContext';

const TopCreators = () => {
  const { top_creators } = useContext(CreatorContext);

  console.log(top_creators);

  return (
    <div className="py-10 sm:py-16">
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

          <button className="nav-button scale-animation border-2 bg-transparent border-cta w-full sm:w-52  px-6 py-3 mt-3    ">
            <img src={rocket} alt="" width={20} height={20} />
            <p>Rankings</p>
          </button>
        </div>

        {/* Top creators */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
          {top_creators.slice(0, 12).map((creator, index) => (
            <CreatorCard
              key={index}
              id={creator.creator_id}
              image={creator.image}
              name={creator.name}
              volume={creator.volume}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopCreators;
