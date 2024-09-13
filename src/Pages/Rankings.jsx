import { top_creators } from '../assets/constants';
import PropTypes from 'prop-types';

const UserProfile = ({ id, image, name, change, nfts_sold, volume }) => {
  return (
    <div className="grid grid-cols-[0.2fr_2fr_1fr] sm:grid-cols-[0.2fr_2fr_1fr_1fr] lg:grid-cols-[0.2fr_2fr_1fr_1fr_1fr] items-center bg-secondary p-3 px-5 mt-5 rounded-3xl shadow-md gap-4">
      {/* Rank */}
      <div className="w-7 h-7 text-center bg-primary text-[#858584] text-lg  rounded-full">
        {id}
      </div>
      {/* Avatar and Name */}
      <div className="flex items-center space-x-3 scale-animation cursor-pointer">
        <img
          src={image}
          alt="Avatar"
          className="w-6 h-6  sm:w-14 sm:h-14 rounded-full"
        />
        <div className="text-white text-lg sm:text-[22px] font-semibold">
          {name}
        </div>
      </div>

      {/* Percentage change */}
      <div className="text-green-400 font-medium text-center font-monospace hidden sm:block">
        {change}
      </div>

      {/* NFTs sold */}
      <div className="text-white text-center font-monospace hidden lg:block">
        {nfts_sold}
      </div>

      {/* ETH Value */}
      <div className="text-white text-sm sm:text-base text-center font-monospace">
        {volume}
      </div>
    </div>
  );
};

const Rankings = () => {
  return (
    <div>
      <div className="max-container flex flex-col gap-8">
        <div>
          <h2 className="text-3xl sm:text-5xl text-white font-semibold">
            Top Creators
          </h2>
          <p className="text-base sm:text-2xl text-white mt-3">
            Check out top ranking NFT artists on the NFT Marketplace.
          </p>
        </div>
      </div>

      <div className="  max-container pt-5 flex justify-between items-center border-t-2 border-secondary">
        <div className=" flex justify-center items-center gap-4 px-5 lg:px-8 border-b-2 border-[#858584] cursor-pointer ">
          <p className="text-[22px] font-semibold hidden sm:block">Today</p>
          <p className="text-[22px] font-semibold block sm:hidden ">1d</p>
        </div>
        <div className=" flex justify-center items-center gap-4 px-5 lg:px-8 cursor-pointer ">
          <p className="text-[22px] font-semibold text-[#858584] hidden sm:block">
            This Week
          </p>
          <p className="text-[22px] font-semibold text-[#858584] block sm:hidden ">
            7d
          </p>
        </div>
        <div className=" flex justify-center items-center gap-4 px-5 lg:px-8 cursor-pointer ">
          <p className="text-[22px] font-semibold text-[#858584] hidden sm:block ">
            This Month
          </p>
          <p className="text-[22px] font-semibold text-[#858584] block sm:hidden">
            30d
          </p>
        </div>
        <div className=" flex justify-center items-center gap-4 px-5 lg:px-8 cursor-pointer ">
          <p className="text-[22px] font-semibold text-[#858584] ">All Time</p>
        </div>
      </div>

      <div className="max-container ">
        <div className="grid grid-cols-[0.2fr_2fr_1fr] sm:grid-cols-[0.2fr_2fr_1fr_1fr] lg:grid-cols-[0.2fr_2fr_1fr_1fr_1fr]  items-center bg-transparent border border-secondary p-3 px-5 mb-5 rounded-3xl shadow-md gap-4 ">
          <div className=" text-[#858584] text-base pl-3">#</div>
          <div className=" text-[#858584] text-base">Artist</div>
          <div className=" text-[#858584] text-base text-center hidden sm:block">
            Change
          </div>
          <div className=" text-[#858584] text-base text-center hidden lg:block">
            NFTs sold
          </div>
          <div className=" text-[#858584] text-base text-center">Volume</div>
        </div>
        {top_creators.map((creator) => (
          <UserProfile
            key={creator.creator_id}
            id={creator.creator_id}
            image={creator.image}
            name={creator.name}
            change={creator.change}
            nfts_sold={creator.nfts_sold}
            volume={creator.volume}
          />
        ))}
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  change: PropTypes.string.isRequired,
  nfts_sold: PropTypes.number.isRequired,
  volume: PropTypes.number,
};

export default Rankings;
