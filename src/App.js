import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Homepage from './pages/homepage.component';

const HatsPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
)

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ Homepage }/>
        <Route path='/shop/hats' component={ HatsPage }/>
      </Switch>
    </div>
  );
}

export default App;
