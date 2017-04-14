import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPageContainer from './containers/MainPageContainer';
import AboutPage from './components/AboutPage';
import MainTemplate from './components/MainTemplate/index';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <MainTemplate>
          <Route exact path="/" component={MainPageContainer} />
          <Route path="/about" component={AboutPage} />
          <Route path="/sign-in" component={() => (<h1>hi</h1>)} />
        </MainTemplate>
      </div>
    </BrowserRouter>
  );
};

export default App;
