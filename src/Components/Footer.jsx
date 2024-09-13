import subscribe from '../assets/images/subscribe.png';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/constants';
import discord from '../assets/images/DiscordLogo.png';
import youtube from '../assets/images/YoutubeLogo.png';
import twitter from '../assets/images/TwitterLogo.png';
import instagram from '../assets/images/InstagramLogo.png';

const Footer = () => {
  return (
    <div className="max-container bg-secondary ">
      <div className=" flex justify-between flex-col xl:flex-row gap-8 xl:gap-4 w-full h-full xl:h-48">
        {/* column one */}
        <div className="flex flex-col sm:flex-row mb-5">
          <div className="w-[330px] flex flex-col gap-8 ">
            {/* Logo */}
            <div className="flex gap-4">
              <img
                src={assets.logo}
                alt="logo"
                className=""
                width={32}
                height={32}
              />
              <p className="text-white font-monospace text-lg font-semibold">
                NFT Marketplace
              </p>
            </div>

            <div className="w-[60%] flex flex-col gap-5 text-base text-[#CCCCCC]">
              <p>NFT marketplace UI created with Anima for Figma.</p>
              <div>
                <p>Join our community</p>
                <div className="flex gap-3 mt-2">
                  <img
                    src={discord}
                    alt=""
                    className="w-6 h-6 cursor-pointer"
                  />
                  <img
                    src={youtube}
                    alt=""
                    className="w-6 h-6 cursor-pointer"
                  />
                  <img
                    src={twitter}
                    alt=""
                    className="w-6 h-6 cursor-pointer"
                  />
                  <img
                    src={instagram}
                    alt=""
                    className="w-6 h-6 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* column two */}
          <div className="w-[240px] flex flex-col gap-6 ">
            <h3 className="text-2xl ] text-white font-monospace font-bold">
              Explore
            </h3>
            {/* NavLinks */}
            <div className=" flex flex-col gap-5 text-base text-[#CCCCCC]">
              <NavLink to="/marketplace">
                <p className="      ">Marketplace</p>
              </NavLink>
              <NavLink to="/rankings" className="">
                <p className="  ">Rankings</p>
              </NavLink>
              <NavLink to="/connect-a-wallet" className="">
                <p className="   ">Connect a wallet</p>
              </NavLink>
            </div>
          </div>
        </div>
        {/* Newsletter */}
        <div className="flex-1 flex flex-col  gap-3 w-full ">
          <h3 className="text-2xl  text-white font-monospace font-bold mb-2">
            Join our weekly digest
          </h3>
          <p className="text-base text-[#CCCCCC]">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <div className="bg-white w-full sm:w-[60%] h-14 flex  gap-3 pl-5 mt-5  rounded-[20px]">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full h-12  rounded-lg outline-none border-none bg-transparent text-primary text-base"
              required
            />
            <button className="nav-button bg-cta w-full  h-14  rounded-[20px] hover:skew-y-2 ">
              <img src={subscribe} alt="" className="w-4 h-4 lg:w-5 sm:h-5" />
              <p>Subscribe</p>
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-14">
        <hr className="flex-grow h-px bg-[#CCCCCC]" />
        <p className="text-base text-[#CCCCCC]">
          © 2024 NFT Marketplace. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
