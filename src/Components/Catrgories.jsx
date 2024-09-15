import { useContext } from 'react';
import { CreatorContext } from '../context/CreatorContext';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {
  return (
    <div className="w-[150px] h-52  sm:w-60 sm:h-80 rounded-3xl overflow-hidden relative scale-animation">
      <div className="h-3/4 sm:h-60 relative">
        <img
          src={category.image}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
          <img
            src={category.icon}
            alt=""
            className="w-20 h-20 sm:w-24 sm:h-24"
          />
        </div>
      </div>
      <div className="bg-secondary h-1/4  flex justify-center items-center">
        <h2 className="text-base sm:text-2xl  font-semibold">
          {category.name}
        </h2>
      </div>
    </div>
  );
};

const Catrgories = () => {
  const { categories } = useContext(CreatorContext);

  return (
    <div className="max-container">
      <p className=" text-3xl sm:text-4xl font-semibold">Browse Categories</p>

      {/* Categories */}
      <NavLink to="/marketplace">
        <div
          onClick={() => {
            scrollTo(0, 0);
          }}
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10"
        >
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </NavLink>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.string,
    image: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    icon: PropTypes.array.isRequired,
  }).isRequired,
};
export default Catrgories;
