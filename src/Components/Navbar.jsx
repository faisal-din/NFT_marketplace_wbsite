import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../assets/constants';

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const toggleMenu = () => {
    setVisible(!visible);
  };

  return (
    <nav>
      <div>
        <div className=" flex justify-between items-center  px-6 sm:px-12 py-4  mt-2">
          {/* Logo */}
          <Link to="/">
            <div className="flex justify-center items-center gap-4">
              <img
                src={assets.logo}
                alt="logo"
                className=""
                width={32}
                height={32}
              />
              <p className="text-white font-monospace text-xl font-semibold">
                NFT Marketplace
              </p>
            </div>
          </Link>

          {/* NavLinks */}
          <ul className="hidden lg:flex justify-center items-center gap-3 font-worksans  font-semibold ">
            <NavLink to="/marketplace">
              <p className="  px-5 py-3  navlink-list scale-animation">
                Marketplace
              </p>
            </NavLink>
            <NavLink to="/rankings" className="">
              <p className="  px-5 py-3 navlink-list scale-animation">
                Rankings
              </p>
            </NavLink>
            <NavLink to="/connect-a-wallet" className="">
              <p className="  px-5 py-3 navlink-list scale-animation">
                Connect a wallet
              </p>
            </NavLink>
            <NavLink to="/sign-up" className="">
              <button>
                <div className="nav-button bg-cta px-7 py-5 scale-animation ">
                  <img src={assets.user} alt="" width={20} height={20} />
                  <p className="text-white text-lg font-semibold">Sign Up</p>
                </div>
              </button>
            </NavLink>
          </ul>

          {/* Hamburger menu for small screens */}
          <button className="relative lg:hidden flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
            <img
              onClick={toggleMenu}
              src={visible ? assets.close : assets.menu}
              alt=""
              className="w-6 h-6 cursor-pointer  "
            />
          </button>
        </div>
      </div>
      {/* Sidebar menu for small screens */}
      <div
        className={`nav-sidebar lg:hidden bg-secondary text-white  ease-in duration-300
             ${visible ? 'max-h-screen' : 'max-h-0'}`}
      >
        <div className="flex flex-col py-5 text-xl font-semibold text-white">
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 "
            to="/"
          >
            {' '}
            Home{' '}
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 "
            to="/marketplace"
          >
            {' '}
            Marketplace{' '}
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 "
            to="/rankings"
          >
            {' '}
            Rankings{' '}
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 "
            to="/connect-a-wallet"
          >
            {' '}
            Connect a wallet{' '}
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 "
            to="/sign-up"
          >
            {' '}
            Sign Up{' '}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
