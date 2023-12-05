import React, {useState} from 'react';
import './App.css';
import {Navbar, Carousel, Ticker, AboutUs} from './components';

function App() {
  return (
    <main className="bg-black w-full overflow-hidden">
      <Navbar />
      <Carousel />
      <Ticker />
      <AboutUs />
    </main>
  )
      
}

export default App;

