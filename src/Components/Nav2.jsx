import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.svg';
import user from '../assets/User.svg';
import menu from '../assets/menu.png';
import close from '../assets/close.svg';

const Nav2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { to: '/marketplace', label: 'Marketplace' },
    { to: '/rankings', label: 'Rankings' },
    { to: '/connect-a-wallet', label: 'Connect a wallet' },
  ];

  const NavItem = ({ to, label, onClick }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-5 py-3 rounded-[20px] text-white text-base hover:bg-gray-700 transition duration-300 ${
          isActive ? 'bg-gray-700' : ''
        }`
      }
      onClick={onClick}
    >
      {label}
    </NavLink>
  );

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="h-8 w-8 mr-2" />
            <span className="font-semibold text-xl">NFT Marketplace</span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavItem key={item.to} {...item} />
              ))}
              <Link to="/sign-up" className="ml-4">
                <button className="flex items-center bg-cta px-4 py-2 rounded-[20px] hover:bg-opacity-80 transition duration-300">
                  <img src={user} alt="" className="w-5 h-5 mr-2" />
                  <span>Sign Up</span>
                </button>
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <img src={isMenuOpen ? close : menu} alt="" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <NavItem
              key={item.to}
              {...item}
              onClick={() => setIsMenuOpen(false)}
            />
          ))}
          <Link
            to="/sign-up"
            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;
