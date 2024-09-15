import { useContext } from 'react';
import CountDownTimer from '../Components/CountDownTimer';
import globe_icon from '../assets/icons/Globe.png';
import { CreatorContext } from '../context/CreatorContext';

const NFTpage = () => {
  const { selectedNFT } = useContext(CreatorContext);

  if (!selectedNFT) {
    return <div>No NFT selected</div>;
  }

  const { name, avatar, title } = selectedNFT;

  return (
    <div>
      <div className="w-full h-80 sm:h-screen bg-[url('/src/assets/images/nft_highlight.png')] bg-cover bg-no-repeat bg-center"></div>
      <div className="px-10 sm:px-16 xl:px-36 py-10 sm:py-16  gap-5">
        <div className="flex flex-col lg:flex-row justify-between sm:gap-8 xl:gap-24 ">
          <div className=" flex-1 w-full lg:w-[400px] xl:w-[610px] flex flex-col gap-8">
            {/* Title */}
            <div>
              <h2 className="text-4xl lg:text-5xl text-white font-worksans font-semibold">
                {title}
              </h2>
              <p className="text-lg lg:text-2xl text-[#858584] font-worksans mt-3">
                Minted on Sep 30, 2022
              </p>
            </div>

            {/* Artist Name */}
            <div className="flex flex-col gap-3">
              <p className="text-lg lg:text-2xl  text-[#858584] font-monospace font-bold mt-3">
                Created By
              </p>
              <div className="flex items-center gap-3 ">
                <img src={avatar} alt="" className="w-6 h-6 rounded-full" />
                <p className="text-lg lg:text-2xl text-white font-worksans font-semibold">
                  {name}
                </p>
              </div>
            </div>

            {/* Description */}
            <div className="w-full">
              <h2 className="text-2xl text-[#858584] font-semibold font-monospace mb-3">
                Description
              </h2>
              <p className="text-[22px] text-white font-worksans">
                The Orbitians is a collection of 10,000 unique NFTs on the
                Ethereum blockchain,
                <br />
                <br />
                There are all sorts of beings in the NFT Universe. The most
                advanced and friendly of the bunch are Orbitians.
                <br />
                <br />
                They live in a metal space machines, high up in the sky and only
                have one foot on Earth. These Orbitians are a peaceful race, but
                they have been at war with a group of invaders for many
                generations. The invaders are called Upside-Downs, because of
                their inverted bodies that live on the ground, yet do not know
                any other way to be. Upside-Downs believe that they will be able
                to win this war if they could only get an eye into Orbitian
                territory, so they have taken to make human beings their target.
              </p>
            </div>

            {/* Details */}
            <div className="flex flex-col gap-3">
              <p className="text-2xl text-[#858584] font-monospace font-bold mt-3">
                Details{' '}
              </p>
              <div className="flex items-center gap-3 ">
                <img src={globe_icon} alt="" className="w-8 h-8 rounded-full" />
                <p className="text-2xl text-white font-worksans ">
                  View on Etherscan
                </p>
              </div>
              <div className="flex items-center gap-3 ">
                <img src={globe_icon} alt="" className="w-8 h-8 rounded-full" />
                <p className="text-2xl text-white font-worksans ">
                  View Original
                </p>
              </div>
            </div>

            {/* Tags */}
            <div className=" flex flex-col   gap-3">
              <p className="text-2xl text-[#858584] font-monospace font-bold mt-3">
                Tags
              </p>
              <div className="flex flex-col sm:flex-row   justify-center   gap-3 ">
                <button className="px-6 py-3 bg-secondary text-xl rounded-3xl">
                  ANIMATION
                </button>
                <button className="px-6 py-3 bg-secondary text-xl rounded-3xl">
                  ILLUSTRATION
                </button>
                <button className="px-6 py-3 bg-secondary text-xl rounded-3xl">
                  MOON
                </button>
                <button className="px-6 py-3 bg-secondary text-xl rounded-3xl">
                  SPACE
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <CountDownTimer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTpage;
