import './App.css';
import React from 'react';
import { useEffect } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import OrderPizza from '../OrderPizza/OrderPizza';
import CustomerInformationPage from '../CustomerInformationPage/CustomerInformationPage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    getPizzas();
  }, []);

  const getPizzas = () => {
    axios({
      method: 'GET',
      url: '/api/pizza'
    }).then ((response) => {
      const pizzaArray = response.data;
      dispatch({
        type: 'SET_PIZZA_REDUCER',
        payload: pizzaArray
      })
    })
  }

  return (
    <div className='App'>
        <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1>
        </header>
      {/* <img src='images/pizza_photo.png' /> */}
      <p>Pizza is great.</p>
      <Router>
        <Route exact path='/'>
          <OrderPizza />
        </Route>
        <Route exact path='/customerInformation'>
          <CustomerInformationPage />
        </Route>
        <Route exact path='/checkout'>
          <CheckoutPage />
        </Route>
        {/* <Route exact path='/admin'>
          <AdminPage />
        </Route> */}
      </Router>
  
    </div>
  );
}

export default App;
