import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Product from './components/Navigation/Buttons/Product';
import React, { useState } from "react";
import Header from './components/Header/Header';


function App() {
  

  return (
    <div className="App">
      <Router>        
          <Header />
          <Routes>
            <Route path='/Ecommerce-Store' element={<Home />} />
            <Route path='/Ecommerce-Store/Ecommerce-Store/:productType' element={<Product />} />
            <Route path='/Ecommerce-Store/Ecommerce-Store/:productType/:productId' element={<ProductDetail />} />
            <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
