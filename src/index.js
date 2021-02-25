import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Crypto from './Crypto';
import Sidebar from './Sidebar'
import reportWebVitals from './reportWebVitals';
import Saved from './Saved';

ReactDOM.render(
  <React.StrictMode>
    <Sidebar />

    <App />
    <Crypto parent="Crypto" />
    <Saved parent="Saved" />

    <div id="loadscreen">

    </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
