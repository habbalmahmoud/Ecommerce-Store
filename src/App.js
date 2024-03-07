import './App.css';
import Header from './components/header/Header';
import Slider from './components/Slider/Slider';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hoodies from './components/Navigation/Buttons/Hoodies'
import Nav from './components/Navigation/Nav';
import Home from './components/Home/Home';
import Dresses from './components/Navigation/Buttons/Dresses'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Ecommerce-Store' element={<Home />} />
          <Route path='/Ecommerce-Store/Ecommerce-Store/Hoodies' element={<Hoodies />} />
          <Route path='/Ecommerce-Store/Ecommerce-Store/Dresses' element={<Dresses />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
