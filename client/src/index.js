import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react'
import './index.css';
import App from './App';
import { UserProvider } from './app/UserContext/UserContext';
import { store } from './app/store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
   
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <ChakraProvider>
          <App />
          </ChakraProvider>
        </UserProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);