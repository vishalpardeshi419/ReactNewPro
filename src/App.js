import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

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
        <Route exact path='/' component={HomePage} /> 
        <Route exact path='/hats' component={HatsPage} /> 
        <Route path='/hats/:hatsId' component={TopicPage} /> 
    </div>
  );
}

export default App;
