import { useContext } from 'react';
import { assets } from '../assets/constants';
import { CreatorContext } from '../context/CreatorContext';
import CountDownTimer from './CountDownTimer';
import { NavLink } from 'react-router-dom';

const Banner = () => {
  const { top_creators } = useContext(CreatorContext);

  return (
    <div className="my-3">
      <div className="w-full h-[660px] flex flex-col justify-center items-center bg-highlight-img bg-cover bg-no-repeat bg-center">
        {/* <img src={assets.nft_highlight} alt="" className="w-full h-[660px] bg-"/> */}
        <div className="  relative  bg-gradient-to-t from-cta to-transparent w-full h-full  ">
          <div className="absolute bottom-0  flex flex-col sm:flex-row items-center px-10 sm:px-20 lg:px-32  pb-14 w-full">
            {/* NFT Artist , title and button */}
            <div className="w-full flex flex-col gap-6 sm:gap-8 py-4">
              {/* Atrist info */}
              <div className="bg-gray-600 flex items-center w-48 px-3 py-3 rounded-3xl">
                <img
                  src={top_creators[0].image}
                  alt="Avatar"
                  className="w-6 h-6 rounded-full"
                />
                <p className="text-base pl-3">{top_creators[0].name}</p>
              </div>

              {/* title */}
              <p className="text-4xl lg:text-5xl font-semibold">
                Magic Mashrooms
              </p>

              {/* button */}
              <div className="flex">
                <NavLink to="/marketplace">
                  <button
                    onClick={() => {
                      scrollTo(0, 0);
                    }}
                    className=" nav-button scale-animation border-2 bg-white border-cta  px-12 py-3 mt-3"
                  >
                    <img src={assets.eye_icon} alt="" width={20} height={20} />
                    <p className="text-primary">See All</p>
                  </button>
                </NavLink>
              </div>
            </div>

            {/* Stop watch */}
            <CountDownTimer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
