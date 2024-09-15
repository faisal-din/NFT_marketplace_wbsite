import { useContext } from 'react';
import { CreatorContext } from '../context/CreatorContext';
import copy_icon from '../assets/icons/Copy.png';
import plus_icon from '../assets/icons/Plus.png';
import discord from '../assets/icons/DiscordLogo.png';
import youtube from '../assets/icons/YoutubeLogo.png';
import twitter from '../assets/icons/TwitterLogo.png';
import instagram from '../assets/icons/InstagramLogo.png';
import SingleNFT from '../Components/SingleNFT';

const Artist = () => {
  const { top_creators, selectedCreator } = useContext(CreatorContext);

  if (!selectedCreator) {
    return <div>No creator selected</div>;
  }
  return (
    <div>
      {/* Header */}
      <div className="w-full h-[370px]">
        <div className="w-full h-[320px] flex flex-col justify-center items-center bg-artist-img bg-cover bg-no-repeat bg-center">
          <div className="  relative  bg-gradient-to-t from-cta to-transparent w-full h-full  ">
            <div className="absolute -bottom-16 left-14 lg:left-40">
              <img
                src={selectedCreator.avatar}
                alt="Avatar"
                className="w-[120px] h-[120px] rounded-2xl  "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Artist Info */}
      <div className="max-container py-10">
        {/* Artist Name and CTA */}
        <div className="w-full flex flex-col lg:flex-row justify-between gap-8 xl:gap-24">
          <h1 className="text-4xl xl:text-5xl font-bold">
            {selectedCreator.name}
          </h1>
          <div className="w-full sm:w-[350px] flex flex-col sm:flex-row gap-5">
            <button className="nav-button bg-cta w-full  h-14  rounded-[20px]  ">
              <img src={copy_icon} alt="" className="w-4 h-4 lg:w-5 sm:h-5" />
              <p>0xc0E3...B79C</p>
            </button>
            <button className="nav-button bg-transparent border border-cta w-full  h-14  rounded-[20px]  ">
              <img src={plus_icon} alt="" className="w-4 h-4 lg:w-5 sm:h-5" />
              <p>Follow</p>
            </button>
          </div>
        </div>

        {/* Artist Description */}
        <div className=" sm:w-[600px] flex flex-col gap-8 mt-8">
          {/* Stats */}
          <div className="w-full sm:w-[380px] flex items-center justify-between gap-8 mt-3">
            <div className="flex flex-col gap-2">
              <p className="text-2xl sm:text-[28px] font-bold font-monospace">
                {selectedCreator.total_sales}k+
              </p>
              <p className="text-base sm:text-[22px]">Vloume</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-2xl sm:text-[28px] font-bold font-monospace">
                {selectedCreator.nfts_sold}k+
              </p>
              <p className="text-base sm:text-[22px]   ">NFTs Sold</p>
            </div>
            <div className="flex flex-col gap-2 ">
              <p className="text-2xl sm:text-[28px] font-bold font-monospace ">
                {selectedCreator.followers}
              </p>
              <p className="text-base sm:text-[22px] ">Followers</p>
            </div>
          </div>

          {/* Bio */}

          <div className="w-full">
            <h2 className="text-2xl text-[#858584] font-semibold font-monospace mb-3">
              Bio
            </h2>
            <p className="text-[22px] text-white">{selectedCreator.bio}</p>
          </div>

          {/* Links */}

          <div className="w-[60%] flex flex-col gap-5  ">
            <div>
              <p className="text-2xl text-[#858584] font-semibold font-monospace ">
                Links
              </p>
              <div className="flex gap-3 mt-2">
                <img src={discord} alt="" className="w-6 h-6 cursor-pointer" />
                <img src={youtube} alt="" className="w-6 h-6 cursor-pointer" />
                <img src={twitter} alt="" className="w-6 h-6 cursor-pointer" />
                <img
                  src={instagram}
                  alt=""
                  className="w-6 h-6 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body Heading */}

      <div className="   max-container pt-5 flex justify-between items-center border-t-2 border-secondary">
        <div className="w-[105px] sm:w-1/2 flex justify-center items-center gap-3 px-3 sm:px-8 border-b-2 border-[#858584] cursor-pointer ">
          <div className="py-2 flex">
            <p className="text-lg sm:text-[22px] font-semibold">Created</p>
            <p className="hidden sm:block px-[10px] py-[5px] bg-[#858584] rounded-[20px] text-base">
              250
            </p>
          </div>
        </div>
        <div className="w-[105px] sm:w-1/2 flex justify-center items-center gap-3 px-8 cursor-pointer ">
          <p className="text-lg sm:text-[22px] font-semibold text-[#858584]">
            Owned
          </p>
          <p className="hidden sm:block px-[10px] py-[5px] bg-secondary rounded-[20px] text-base">
            87
          </p>
        </div>
        <div className="w-[105px] sm:w-1/2 flex justify-center items-center gap-3 px-8 cursor-pointer ">
          <p className="text-lg sm:text-[22px] font-semibold text-[#858584]">
            Collections
          </p>
          <p className="hidden sm:block px-[10px] py-[5px] bg-secondary rounded-[20px] text-base">
            8
          </p>
        </div>
      </div>

      {/* Body */}

      <div className=" max-container py-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 ">
          {top_creators.map((nft, idx) => (
            <SingleNFT key={idx} nft={nft} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artist;
