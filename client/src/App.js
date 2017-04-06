import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPageContainer from './containers/MainPageContainer';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <MainPageContainer />
      </div>
    </BrowserRouter>
  );
};

export default App;
