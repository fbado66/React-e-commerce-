import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Descriptions from './components/Descriptions';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ErrorPage from './components/ErrorPage';
import Modal from './components/Modal';



class App extends Component {
  render() {
    return (
     <React.Fragment>
       <Navbar />
       <Switch>
         <Route exact path='/'component={ProductList}></Route>
         <Route path='/descriptions'component={Descriptions}></Route>
         <Route path='/cart'component={Cart}></Route>
         <Route component={ErrorPage}></Route>
       </Switch>
       <Modal />
       

     </React.Fragment>
    );
  }
}

export default App;
