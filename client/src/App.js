import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import TopNavbar from './components/TopNavbar/index';
import Hero from './components/Hero/index';
import Explainer from './components/Explainer/index';
import DisplaySectionContainer from './containers/DisplaySectionContainer';
import Footer from './components/Footer/index';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Hero />
        <TopNavbar />
        <Explainer />
        <DisplaySectionContainer />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
