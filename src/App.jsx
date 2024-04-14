import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav,Footer } from './sections/index';
import HomePage from './pages/homepage';
import ShopPage from './pages/ShopPage';


const App = () => (
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
     
    </Routes>
 <Footer />
  </Router>

);

export default App;
