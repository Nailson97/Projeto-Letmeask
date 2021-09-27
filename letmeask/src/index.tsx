import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {configFirebase} from './services/firebase'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);