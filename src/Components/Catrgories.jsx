import CategoryCard from './CategoryCard';
import { useContext } from 'react';
import { CreatorContext } from '../context/CreatorContext';

const Catrgories = () => {
  const { categories } = useContext(CreatorContext);

  return (
    <div className="max-container">
      <p className=" text-3xl sm:text-4xl font-semibold">Browse Categories</p>

      {/* Categories */}

      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-10">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            image={category.image}
            name={category.name}
            icon={category.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Catrgories;
