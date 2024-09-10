import { assets } from '../assets/constants';

const DiscoverNFTs = () => {
  return (
    <div className="py-10 sm:py-16">
      {/* Headline */}

      <div className="flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-24">
        <div>
          <h3 className="text-3xl md:text-[38px] font-semibold ">
            Discover NFTs
          </h3>
          <p className="text-lg md:text-[22px] leading-loose">
            Explore new trending NFTs{' '}
          </p>
        </div>

        <button className="nav-button scale-animation border-2 bg-transparent border-cta w-full sm:w-52  px-6 py-3 mt-3    ">
          <img src={assets.rocket} alt="" width={20} height={20} />
          <p>See All</p>
        </button>
      </div>
    </div>
  );
};

export default DiscoverNFTs;
