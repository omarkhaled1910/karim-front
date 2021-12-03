import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import store from './Redux/store'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

let persistor = persistStore(store)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>

      <Provider store={store}>

        <PersistGate loading={null} persistor={persistor}>

          <App />

        </PersistGate>

      </Provider>

    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);



