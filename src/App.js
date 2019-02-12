import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Home from './components/Home'
import AboutUs from './components/AboutUs';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path = '/' component = {Home}></Route>
          <Route path = '/details' component = {Details}></Route>
          <Route path = '/cart' component = {Cart}></Route>
          <Route path = '/product' component = {ProductList}></Route>
          <Route path = '/aboutus' component = {AboutUs}></Route>
          <Route component = {Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
