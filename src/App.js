import './App.css';
import Header from './components/header/Header';
import Slider from './components/Slider/Slider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hoodies from './components/Navigation/Buttons/Hoodies'
import Nav from './components/Navigation/Nav';
import Home from './components/Home/Home';
import Shoes from './components/Navigation/Buttons/Shoes';
import Jeans from './components/Navigation/Buttons/Jeans';
import ProductDetail from './components/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Ecommerce-Store' element={<Home />} />
          <Route path='/Ecommerce-Store/Ecommerce-Store/Hoodies' element={<Hoodies />} />
          <Route path='/Ecommerce-Store/Ecommerce-Store/Hoodies/:productId' element={<ProductDetail />} />
          <Route path='/Ecommerce-Store/Ecommerce-Store/Shoes' element={<Shoes />} />
          <Route path='/Ecommerce-Store/Ecommerce-Store/Shoes/:productId' element={<ProductDetail />} />
          <Route path='/Ecommerce-Store/Ecommerce-Store/Jeans' element={<Jeans />} />
          <Route path='/Ecommerce-Store/Ecommerce-Store/Jeans/:productId' element={<ProductDetail />} />
          <Route path='/Ecommerce-Store/Ecommerce-Store/TShirts/:productId' element={<ProductDetail />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
