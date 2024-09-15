import { assets } from '../assets/constants';
import hero_img from '../assets/images/hero_img.png';
import { top_creators } from '../assets/constants';
import { NavLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="max-container">
      <div className="w-full flex flex-col md:flex-row gap-8">
        {/* Hero Right */}
        <div className=" flex-1 flex flex-col gap-5">
          <h1
            className="text-3xl  md:text-[38px] lg:text-[48px]
            xl:text-[68px] font-worksans
            font-bold leading-tight"
          >
            Discover digital art & Collect NFTs
          </h1>
          <p className="text-base sm:text-xl font-monospace leading-normal">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
          <div className="hidden sm:flex">
            <button className="nav-button scale-animation bg-cta w-full sm:w-52  px-6 py-3 mt-3    ">
              <img src={assets.rocket} alt="" width={20} height={20} />
              <p>Get Started</p>
            </button>
          </div>
          <div className="w-full flex items-center gap-8 mt-3">
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold font-monospace">240k+</p>
              <p className="text-sm sm:text-xl font-normal font-worksans">
                Total Sale
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold font-monospace">100k+</p>
              <p className="text-sm sm:text-xl   ">Auctions</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <p className="text-2xl font-bold font-monospace ">180k+</p>
              <p className="text-sm sm:text-xl  font-normal font-worksans ">
                Artists
              </p>
            </div>
          </div>
        </div>

        {/* Hero Left */}
        <NavLink to="/nft-page">
          <div
            onClick={() => {
              scrollTo(0, 0);
            }}
            className="flex-1 "
          >
            <div className="max-w-md mx-auto scale-animation">
              <img src={hero_img} alt="Hero" className="w-full rounded-t-xl" />
              <div className="bg-secondary p-5 rounded-b-xl">
                <h2 className="text-2xl font-semibold mb-3">Space Walking</h2>
                <div className="flex items-center gap-3">
                  <img
                    src={top_creators[0].image}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-lg font-semibold">
                      {top_creators[0].name}
                    </p>
                    <p className="text-base text-gray-400">
                      Total Sales:{' '}
                      <span className="text-white font-semibold font-monospace">
                        {top_creators[0].volume}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default Hero;
