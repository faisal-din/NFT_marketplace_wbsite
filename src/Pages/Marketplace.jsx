import search_icon from '../assets/icons/search_icon.png';
import SingleNFT from '../Components/SingleNFT';
import { useContext } from 'react';
import { CreatorContext } from '../context/CreatorContext';

const Marketplace = () => {
  const { top_creators } = useContext(CreatorContext);

  return (
    <>
      {/* Marketplace Header */}
      <div className="">
        <div className="px-10 sm:px-20 xl:px-40 py-20  flex flex-col gap-8">
          <div>
            <h2 className="text-3xl sm:text-5xl text-white font-semibold">
              Browse Marketplace
            </h2>
            <p className="text-lg sm:text-2xl text-white mt-3">
              Browse through more than 50k NFTs on the NFT Marketplace.
            </p>
          </div>
          <div className="w-full flex items-center gap-2 px-5 py-3  border border-slate-700 rounded-3xl">
            <input
              type="text"
              placeholder="Search your favourite NFTs"
              className="bg-transparent w-full outline-none"
            />
            <img
              src={search_icon}
              alt="search"
              className="w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
        {/* Marketplace Heading */}

        <div className=" px-10 sm:px-20 xl:px-40 pt-5 flex justify-between items-center gap-2 border-t-2 border-secondary">
          <div className="w-1/2 flex justify-center items-center gap-4 px-8 border-b-2 border-[#858584] cursor-pointer ">
            <p className=" text-lg sm:text-[22px] font-semibold">NFTs</p>
            <p className="hidden sm:block px-[10px] py-[5px] bg-[#858584] rounded-[20px] text-base">
              250
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center gap-4 px-8 cursor-pointer ">
            <p className="text-lg sm:text-[22px] font-semibold text-[#858584]">
              Collections
            </p>
            <p className="hidden sm:block px-[10px] py-[5px] bg-[#858584] rounded-[20px] text-base">
              87
            </p>
          </div>
        </div>
      </div>

      {/* Marketplace Body */}

      <div className="px-10 sm:px-20 xl:px-40 py-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {top_creators.map((nft, idx) => (
            <SingleNFT key={idx} nft={nft} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Marketplace;
