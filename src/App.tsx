import React from 'react';
import './App.css';
import Header from './header/header';
import Banner from './banner/banner';
import Products from './products/products'
import Features from './features/features';
import Footer from './footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Features/>
      <Products/>      
      <Footer/>
    </div>
  );
}

export default App;
