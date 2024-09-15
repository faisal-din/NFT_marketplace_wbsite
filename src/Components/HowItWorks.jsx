import { PropTypes } from 'prop-types';
import { info_cards } from '../assets/constants';

const InfoCard = ({ image, title, description }) => {
  return (
    <div className="bg-secondary w-full h-auto sm:h-[440px] flex items-center flex-row   sm:flex-col p-5  sm:p-7 rounded-3xl shadow-md">
      <img src={image} alt="icon" className="w-20 sm:w-64 h-20 sm:h-64" />
      <div className="text-white text-center ">
        <h4 className="sm:mt-4 text-2xl  font-semibold">{title}</h4>
        <p className="mt-2 text-sm ">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <div className="max-container ">
      <div className="w-full  mb-10">
        <h3 className="text-3xl lg:text-[38px] font-semibold mb-2">
          How it works
        </h3>
        <p className="text-lg leading-loose">Find out how to get started</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {info_cards.map((card, index) => (
          <InfoCard
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

InfoCard.propTypes = {
  image: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HowItWorks;
