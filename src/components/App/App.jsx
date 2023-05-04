import React from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import OrderPizza from '../OrderPizza/OrderPizza';
import { useEffect } from 'react';
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
    }).then((response) => {
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
