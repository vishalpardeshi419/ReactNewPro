import React from 'react';
import './App.css';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component'; 
import Header from './components/header/header.component'; 
import SigninAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

function App() {
  return (
    <div>
      <Header /> 
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} /> 
        <Route exact path='/shop' component={ShopPage} /> 
        <Route path='/signin' component={SigninAndSignUpPage} /> 
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
