import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ContextProvider} from "./contextProvider"

ReactDOM.render(
  <ContextProvider>
      <App />
  </ContextProvider>,
  document.getElementById('root')
);

