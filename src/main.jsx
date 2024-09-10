import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import CreatorContextProvider from './context/CreatorContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CreatorContextProvider>
      <App />
    </CreatorContextProvider>
  </BrowserRouter>
);
