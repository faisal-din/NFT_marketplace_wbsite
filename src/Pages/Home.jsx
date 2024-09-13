import Hero from '../components/Hero';
import TrendingCollections from '../Components/TrendingCollections';
import TopCreators from '../Components/TopCreators';
import Catrgories from '../Components/Catrgories';
import DiscoverNFTs from '../Components/DiscoverNFTs';
import Banner from '../Components/Banner';
import HowItWorks from '../Components/HowItWorks';
import NewsLetter from '../Components/NewsLetter';

const Home = () => {
  return (
    <div>
      <Hero />
      <TrendingCollections />
      <TopCreators />
      <Catrgories />
      <DiscoverNFTs />
      <Banner />
      <HowItWorks />
      <NewsLetter />
    </div>
  );
};

export default Home;
