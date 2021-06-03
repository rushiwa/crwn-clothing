import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.componet';
import SignInAndSignUpPage from './pages/signInAndSignUpPage/signInAndSignUpPage.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ Homepage }/>
        <Route path='/shop' component={ ShopPage }/>
        <Route path='/signin' component={ SignInAndSignUpPage } />
      </Switch>
    </div>
  );
}

export default App;
