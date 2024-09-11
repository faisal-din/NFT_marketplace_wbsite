import { assets } from '../assets/constants';
import { top_creators } from '../assets/constants';

const SingleNFT = () => {
  return (
    <div>
      <div className=" max-w-sm mx-auto scale-animation">
        <img
          src={assets.hero_img}
          alt=""
          className="w-full h-auto object-cover "
        />
        <div className="bg-secondary p-5 sm:p-7 rounded-b-3xl">
          <div className=" mb-6">
            <p className="text-lg sm:text-xl font-semibold">Distant Galaxy</p>
            <div className="flex items-center mt-2">
              <img
                src={top_creators[0].image}
                alt="Avatar"
                className="w-6 h-6 rounded-full"
              />
              <p className="text-base pl-3">{top_creators[0].name}</p>
            </div>
          </div>
          <div className="flex  justify-between">
            <div>
              <p className="text-sm sm:text-base text-gray-400">
                Total Sales:{' '}
              </p>
              <p className="text-white text-sm sm:text-lg  font-monospace">
                {top_creators[0].volume}
              </p>
            </div>
            <div>
              <p className="text-sm sm:text-base text-gray-400">
                Highest Bid:{' '}
              </p>
              <p className="text-white text-sm sm:text-lg font-monospace">
                {top_creators[0].highest_bid}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNFT;
