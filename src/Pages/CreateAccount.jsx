import PropTypes from 'prop-types';
import wallet_img from '../assets/images/Image-Placeholder.png';

import user_icon from '../assets/icons/user_icon.png';
import envelope_icon from '../assets/icons/mail_icon.png';
import password_icon from '../assets/icons/LockKey.png';

const CreateAccount = () => {
  return (
    <div className="flex flex-col sm:flex-row lg:gap-14">
      {/* Right Side */}
      <img
        src={wallet_img}
        alt="wallet"
        className="w-full sm:w-[400px] lg:w-[500px]  xl:w-[610px] h-96 sm:h-[530px] lg:h-[640px] object-cover"
      />
      {/* Left Side */}
      <div className="flex flex-col justify-center w-full sm:w-[400px] lg:w-[500px]  xl:w-[610px]  px-8 py-5 lg:py-12 lg:gap-10">
        {/* Heading */}

        <div className="w-full xl:w-[75%]">
          <p className="text-4xl lg:text-5xl font-semibold text-white mb-5">
            Create account
          </p>
          <p className="text-lg lg:text-2xl text-white mb-5">
            Welcome! enter your details and start creating, collecting and
            selling NFTs.
          </p>
        </div>

        {/* Input Feilds and button */}

        <div className="w-full lg:w-80 flex flex-col space-y-5">
          <InputButton
            icon={user_icon}
            label="Metamask"
            type="text"
            placeholder="Username"
          />
          <InputButton
            icon={envelope_icon}
            label="email"
            type="email"
            placeholder="Email"
          />
          <InputButton
            icon={password_icon}
            label="password"
            type="password"
            placeholder="Password"
          />
          <InputButton
            icon={password_icon}
            label="confirm password"
            type="password"
            placeholder="Confirm Password"
          />

          <button className="bg-cta text-white text-lg py-3 rounded-3xl scale-animation mt-3">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
};

const InputButton = ({ icon, label, type, placeholder }) => {
  return (
    <div className=" flex items-center gap-5  border-2 bg-white border-none px-5 py-2 rounded-3xl">
      <img src={icon} alt={label} className="w-5 h-5 bgg-gray-500 " />
      <input
        type={type}
        placeholder={placeholder}
        className="text-lg text-primary  bg-transparent focus:outline-none"
        required
      />
    </div>
  );
};

InputButton.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default CreateAccount;
