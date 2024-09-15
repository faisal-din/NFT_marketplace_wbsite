import PropTypes from 'prop-types';
import wallet_img from '../assets/images/Image-Placeholder.png';
import metamask_icon from '../assets/icons/metamask.png';
import wallet_icon from '../assets/icons/wallet_connect.png';
import coinbase_icon from '../assets/icons/coinbase.png';

const ConnectaWallet = () => {
  return (
    <div className="flex flex-col sm:flex-row lg:gap-14">
      <img
        src={wallet_img}
        alt="wallet"
        className="w-full sm:w-[400px] lg:w-[500px]  xl:w-[610px] h-96 sm:h-[530px] lg:h-[640px] object-cover"
      />

      <div className="flex flex-col justify-center w-full sm:w-[400px] lg:w-[500px]  xl:w-[610px]  px-8 py-5 lg:py-12 lg:gap-10">
        <div className="w-full xl:w-[75%]">
          <p className="text-4xl lg:text-5xl font-semibold text-white mb-5">
            Connect a Wallet
          </p>
          <p className="text-lg lg:text-2xl text-white mb-5">
            Connect your wallet to access all the features of our platform.
          </p>
        </div>

        <div className="flex flex-col space-y-5">
          <WalletButton icon={metamask_icon} label="Metamask" />
          <WalletButton icon={wallet_icon} label="Wallet Connect" />
          <WalletButton icon={coinbase_icon} label="Coinbase" />
        </div>
      </div>
    </div>
  );
};

const WalletButton = ({ icon, label }) => {
  return (
    <button className="w-full sm:w-80 flex items-center gap-5 scale-animation border-2 bg-secondary border-cta pl-10 pr-6 py-3 rounded-3xl">
      <img src={icon} alt={label} className="w-10 h-10" />
      <p className="text-[22px] font-semibold">{label}</p>
    </button>
  );
};

WalletButton.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default ConnectaWallet;
