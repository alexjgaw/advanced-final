import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import TopNavbar from './components/TopNavbar/index';
import Hero from './components/Hero/index';
import Explainer from './components/Explainer/index';
import DisplaySection from './components/DisplaySection/index';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNavbar />
        <Hero />
        <Explainer />
        <DisplaySection />
      </div>
    </BrowserRouter>
  );
};

export default App;
