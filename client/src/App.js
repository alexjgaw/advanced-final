import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import TopNavbar from './components/TopNavbar/index';
import Hero from './components/Hero/index';
import Explainer from './components/Explainer/index';
import DisplaySection from './components/DisplaySection/index';
import Footer from './components/Footer/index';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Footer />
        <TopNavbar />
        <Hero />
        <Explainer />
        <DisplaySection />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
