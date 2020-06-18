import React from 'react';
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'; 


const HatsPage = () => {
  return (
   <div>
     <h1>Hats page</h1>
   </div>
  );
};

const TopicPage = () => {
  return (
    <div>
    <h1>Topic page </h1>
  </div>
  );
};

const HatsPage = () => {
  return (
   <div>
     <h1>Hats page</h1>
   </div>
  );
};

const TopicPage = () => {
  return (
    <div>
    <h1>Topic page </h1>
  </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route exact path='/shop' component={ShopPage} /> 
        <Route path='/hats/:hatsId' component={TopicPage} /> 
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
