import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Marketplace from './pages/Marketplace';
import Rankings from './pages/Rankings';
import ConnectaWallet from './pages/ConnectaWallet';
import CreateAccount from './pages/CreateAccount';
import Artist from './Pages/Artist';
import NFTpage from './Pages/NFTpage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/connect-a-wallet" element={<ConnectaWallet />} />
        <Route path="/sign-up" element={<CreateAccount />} />
        <Route path="/artist/:name" element={<Artist />} />
        <Route path="/nft-page" element={<NFTpage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
