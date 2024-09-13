import CollectionItem from './CollectionItem';

const TrendingCollections = () => {
  return (
    <div className="max-container">
      <div className="container mx-auto px-4">
        {/* Headline */}
        <div className="mb-10 md:mb-14">
          <h3 className="text-3xl md:text-[38px] font-bold">
            Trending Collections
          </h3>
          <p className="text-lg md:text-[22px] leading-loose">
            Checkout our weekly updated trending collection.
          </p>
        </div>

        {/* Trending Collections */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-8 ">
          {/* Collection 1 */}
          <CollectionItem />
          <CollectionItem />
          <CollectionItem />
        </div>
      </div>
    </div>
  );
};

export default TrendingCollections;
