import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import logger from 'redux-logger';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const pizzaReducer = (state=[], action) => {
    if (action.type === 'SET_PIZZA_REDUCER') {
        const pizzaArray = action.payload;
        return pizzaArray;
    }
    return state;
}

const theStore = createStore(
    combineReducers({
      pizzaReducer
    }),
    applyMiddleware(
      logger
    )
  )

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store = {theStore}>
        <App />
        </Provider>
    </React.StrictMode>
);
