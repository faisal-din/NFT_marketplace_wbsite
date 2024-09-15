import PropTypes from 'prop-types';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { CreatorContext } from '../context/CreatorContext';

const CreatorCard = ({ creator }) => {
  const { setSelectedCreator } = useContext(CreatorContext);

  return (
    <NavLink to={`/artist/${creator.name}`}>
      <div
        onClick={() => {
          setSelectedCreator(creator);
          scrollTo(0, 0);
        }}
        className="bg-secondary flex flex-row lg:flex-col gap-5 px-4 py-5 w-full sm:w-72 lg:w-60 lg:h-60 rounded-3xl scale-animation"
      >
        <div className="flex justify-center items-center gap-5">
          <div className="relative">
            <img
              src={creator.avatar}
              alt=""
              className=" w-16 lg:w-28 h-16 lg:h-28 rounded-full object-cover"
            />
            <div>
              <div className="absolute -left-2 -top-2 lg:-left-10  bg-primary w-8 h-8 rounded-full text-base flex items-center justify-center text-gray-400 ">
                {creator.creator_id}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:text-center">
          <p className="text-lg  font-semibold">{creator.name}</p>
          <p className="text-base  text-gray-400">
            Total Sales:{' '}
            <span className="text-white font-semibold font-monospace leading-loose">
              {creator.volume}
            </span>
          </p>
        </div>
      </div>
    </NavLink>
  );
};

CreatorCard.propTypes = {
  creator: PropTypes.shape({
    creator_id: PropTypes.number,
    avatar: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    volume: PropTypes.string.isRequired,
  }).isRequired,
};

export default CreatorCard;
