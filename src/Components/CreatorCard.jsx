import PropTypes from 'prop-types';

const CreatorCard = ({ id, image, name, volume }) => {
  return (
    <div className="bg-secondary flex flex-row lg:flex-col gap-5 px-4 py-5 w-full sm:w-72 lg:w-60 lg:h-60 rounded-3xl scale-animation">
      <div className="flex justify-center items-center gap-5">
        <div className="relative">
          <img
            src={image}
            alt=""
            className=" w-16 lg:w-28 h-16 lg:h-28 rounded-full object-cover"
          />
          <div>
            <div className="absolute -left-2 -top-2 lg:-left-10  bg-primary w-8 h-8 rounded-full text-base flex items-center justify-center text-gray-400 ">
              {id}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:text-center">
        <p className="text-lg  font-semibold">{name}</p>
        <p className="text-base  text-gray-400">
          Total Sales:{' '}
          <span className="text-white font-semibold font-monospace leading-loose">
            {volume}
          </span>
        </p>
      </div>
    </div>
  );
};

CreatorCard.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  volume: PropTypes.number,
};

export default CreatorCard;
