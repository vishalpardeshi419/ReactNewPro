import React from 'react';
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'; 
import Header from './components/header/header.component'; 


const HatsPage = () => {
  return (
   <div>
     <h1>Hats page</h1>
   </div>
  );
};

const TshirtsPage = () => {
  return (
    <div>
    <h1>Topic page </h1>
  </div>
  );
};

const CapsPage = () => {
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
      <Header /> 
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
