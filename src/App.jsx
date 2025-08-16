import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Product from './pages/Product';
import TopBar from './components/TopBar';
import Banner from './components/Banner';
import CategoryCTA from './components/CategoryCTA';
import Category from './components/Category'
import LookBook from './components/LookBook';
import Footer from './components/Footer';



function App() {
  return (
    <div className="bg-beig">
      {/* Top Bar */}
      <TopBar />
      <Navigation />
      <Banner />
      <CategoryCTA />
      <Category />
      <LookBook />
      <Footer />

      {/* <BottomNav /> */}
    </div>
  );
}

export default App;
