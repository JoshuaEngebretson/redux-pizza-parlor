import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const pizzaReducer = (state = [], action) => {
  if (action.type === 'SET_PIZZA_REDUCER') {
    const pizzaArray = action.payload;
    return pizzaArray;
  }
  return state;
}

const shoppingCart = (state = [], action) => {
  if (action.type === 'ADD_TO_CART') {
    const newPizza = action.payload;
    // let newState = (state, newPizza) => {
    //   let newStateArray = []
    //   for (thing of state) {
    //     newStateArray.push(thing)
    //   }
    //   newStateArray.push(newPizza);

    //   return newStateArray;
    // };
    // return newState;
    return [...state, newPizza];
  }
  if (action.type === 'REMOVE_FROM_CART') {
    const pizzaToRemove = action.payload;
    // copyOfState should be equal to the array when 
    //  it doesn't include pizzaToRemove
    const copyOfState = state.filter(pizza => pizza != pizzaToRemove);
    return copyOfState;
  }
  return state;
}

<<<<<<< HEAD
const custInfoReducer = (state = [], action) => {
  if (action.type === 'NEW_CUSTOMER_INFORMATION') {
    const customerObj = action.payload;
    const newArray = [];
    newArray.push(customerObj);
    return newArray;
  }
  return state;
}


const theStore = createStore(
  combineReducers({
    pizzaReducer,
    shoppingCart,
    custInfoReducer
  }),
  applyMiddleware(
    logger
=======
const customerInformation = (state = '', action) => {
    if(action.type === 'ADD_CUSTOMER_INFORMATION'){
      const newCustomer = action.payload;
      return newCustomer;
    }
    return state;
}

const theStore = createStore(
    combineReducers({
      pizzaReducer,
      shoppingCart,
      customerInformation
    }),
    applyMiddleware(
      logger
    )
>>>>>>> main
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={theStore}>
      <App />
    </Provider>
  </React.StrictMode>
);


// let var1 = "hello";

// let var2 = var1;

// console.log(var2);

// let var3 = [1, 2, 3];

// let var4 = var3;

// console.log(var4);
