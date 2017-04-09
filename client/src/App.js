import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPageContainer from './containers/MainPageContainer';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={MainPageContainer} />
        <Route path="/sign-in" component={() => (<h1>hi</h1>)} />
      </div>
    </BrowserRouter>
  );
};

export default App;
