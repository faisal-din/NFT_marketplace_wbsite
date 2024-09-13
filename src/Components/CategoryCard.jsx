import PropTypes from 'prop-types';

const CategoryCard = ({ image, name, icon }) => {
  return (
    <div className="w-[150px] h-52  sm:w-60 sm:h-80 rounded-3xl overflow-hidden relative scale-animation">
      <div className="h-3/4 sm:h-60 relative">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <img src={icon} alt={name} className="w-20 h-20 sm:w-24 sm:h-24" />
        </div>
      </div>
      <div className="bg-secondary h-1/4  flex justify-center items-center">
        <h2 className="text-base sm:text-2xl  font-semibold">{name}</h2>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default CategoryCard;
